import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from '../firebase';
import router from '../router/index';
import * as fb from 'firebase'
// import Trend from "vuetrend";

// Vue.use(Trend)

Vue.use(Vuex)

firebase.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
  // logic goes here
  let postsArray = []

  snapshot.forEach(doc => {
    let post = doc.data()
    post.id = doc.id

    postsArray.push(post)
  })

  store.commit('setPosts', postsArray)
})





export const store = new Vuex.Store({
  state: {
    userProfile: {},  // for userprofile 
    posts: [],
    loadedMeetups: [
     
    ],
    user: {},
    loading: false,
    error: null
  },
  mutations: {
    setLoadedMeetups(state,payload){
      state.loadedMeetups = payload
    },
    updateMeetup(state,payload){
      const meetup = state.loadedMeetups.find(meetup =>{
        return meetup.id === payload.id
      })
      if(payload.title){
        meetup.title = payload.title
      }
      if(payload.description){
        meetup.description = payload.description
      }
      if(payload.date){
        meetup.date = payload.date
      }
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) { // payload instead of val, udpate user profile in the state
      state.userProfile = payload
    },
    setPosts(state, val) {
      state.posts = val
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }
  },
  actions: {
    loadMeetups({commit}){ // actions to fetch from the database
      commit('setLoading', true)
      fb.database().ref('meetups').once('value')
      .then((data) => {
        const meetups = []
        const obj = data.val()
        for (let key in obj){
          meetups.push({
            id: key,
            title: obj[key].title,
            description: obj[key].description,
            imageUrl: obj[key].imageUrl,
            date: obj[key].date,
            email: obj[key].email,
            userName: obj[key].userName,
            location: obj[key].location,
            creatorId: obj[key].creatorId    
          })
        }
        commit('setLoadedMeetups', meetups)
        commit('setLoading', false)
      }).catch(
        (error) => {
          console.log(error)
          commit('setLoading', true)

        }
      )
    },
    createMeetup ({commit, state}, payload) {
      const meetup = {
        title: payload.title,
        email: payload.email,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(), 
        userName: state.userProfile.name,
        creatorId: firebase.auth.currentUser.uid,
        
      }
      // Reach out to firebase and store it
      let imageUrl 
      let key
      fb.database().ref('meetups').push(meetup)
      .then((data) => {
        key = data.key
        return key
      })
      .then(key => {
        const filename = payload.image.name
        const ext = filename.slice(filename.lastIndexOf('.'))
        return fb.storage().ref('meetups/' + key + '.' + ext).put(payload.image)
      })
      .then(async fileData => {
        const imageUrl = await fileData.ref.getDownloadURL();
        return await fb.database().ref('meetups').child(key).update({ imageUrl: imageUrl });
      })
      .then(() => {
        commit('createMeetup', {
          ...meetup,
          imageUrl: imageUrl,
          id: key
        })
      })
      .catch((error) => {
        console.log(error)
      })
    },

    updateMeetupData({commit}, payload){
      commit('setLoading', true)
      const updateObj = {}
      if (payload.title){
        updateObj.title = payload.title
      }
      if(payload.description){
        updateObj.description = payload.description
      }
      if (payload.date){
        updateObj.date = payload.date
      }
      fb.database().ref('meetups').child(payload.id).update(updateObj)
      .then(() => {
        commit('setLoading', false)
        commit('updateMeetup', payload)
      }).catch(error => {
        console.log(error)
        commit('setLoading', false) 
      })
    },

    async createPost({ state}, post) {    // sth wrong with this
      await firebase.postsCollection.add({
        createdOn: new Date(),       
        content: post.content,
        title: post.title,
        userId: firebase.auth.currentUser.uid,
        userName: state.userProfile.name,
        comments: 0,
        likes: 0
      })
    },

    async likePost (_,post) {
      const userId = firebase.auth.currentUser.uid
      const docId = `${userId}_${post.id}`
    
      // check if user has liked post
      const doc = await firebase.likesCollection.doc(docId).get()
      if (doc.exists) { return }
    
      // create post
      await firebase.likesCollection.doc(docId).set({
        postId: post.id,
        userId: userId
      })
    
      // update post likes count
      firebase.postsCollection.doc(post.id).update({
        likes: post.likesCount + 1
      })
    },

    async signup ({dispatch}, payload) {  // sign up function 
    try{
      dispatch('setLoading',true)
      dispatch('clearError')
      const { user } = await firebase.auth.createUserWithEmailAndPassword(payload.email, payload.password)
      await firebase.usersCollection.doc(user.uid).set({
        name: payload.name,
        email: payload.email
      })
      dispatch('setLoading',false)
      const newUser = {
        id: user.uid,
        registeredMeetups: []
      }
      dispatch('fetchUserProfile', user)
      dispatch('setUser', newUser)
    }catch(error){
      dispatch('setLoading', false)
      dispatch('setError', error)
      console.log(error)
      alert('Oops! Something wrong!')
    }
      // user.catch(
      //   error => {
      //     dispatch('setLoading', false)
      //     dispatch('setError', error)
      //     console.log(error) 
      //   }
      // )
      // .then(
        //   user => {
        //     const newUser = {
        //       id: user.uid,
        //       registeredMeetups: []
        //     }

        //     firebase.usersCollection.doc(newUser.uid).set({
        //       name: payload.name,
        //       email: payload.email
        //     })
           
        //     dispatch('fetchUserProfile', newUser)
        //   }
        // )
        // .catch(
        //   error => {
        //     var errorCode = error.code;
        //     var errorMessage = error.message; 
        //     if(errorCode == 'auth/weak-password'){
        //       alert('The password is too weak.');
        //     }else{
        //       alert(errorMessage);     
        //     }
        //     console.log(error)
        //   }
        // )
    },
    async onSignin ({dispatch}, payload) {   // sign in function  
    try{
      dispatch('setLoading',true)
      dispatch('clearError')
      const { user } = await firebase.auth.signInWithEmailAndPassword(payload.email, payload.password)
      dispatch('setLoading',false)
      const newUser = {
        id: user.uid,
        registeredMeetups: []  // for registered meetups empty array 
      }
      dispatch('fetchUserProfile', user)    
      dispatch('setUser', newUser) 
    }catch(error){
      dispatch('setLoading', false)
      dispatch('setError', error)
      console.log(error)
      alert("Wrong Email or Password")    
    }
      // user.catch(
      //   error => {
      //     dispatch('setLoading', false)
      //     dispatch('setError', error)
      //     console.log(error) 
      //   }
      // )
        // .then(
        //   user => {
        //     const newUser = {
        //       id: user.uid,
        //       registeredMeetups: []
        //     }
        //     dispatch('fetchUserProfile', newUser)
        //   }
        // )
        // .catch(
        //   error => {
        //     console.log(error)
        //   }
        // )
    },

    async logout({ commit }) {
      await firebase.auth.signOut()
    
      // clear userProfile and redirect to /login
      commit('setUser', {})
      router.push('/home')
    },

    async fetchUserProfile({ commit }, user) {  // fetch the current profile data 
      // fetch user profile
      const userProfile = await firebase.usersCollection.doc(user.uid).get()
  
      // set user profile in state    
      commit('setUser', userProfile.data())  
      
      // change route to dashboard
      if (router.currentRoute.path === '/home') {  
      router.push('/dashboard/overview')
    }
  }


    
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {  
          return meetup.id === meetupId
        })
      }
    },
    user (state) {
      return state.userProfile
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})

