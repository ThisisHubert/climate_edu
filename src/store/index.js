import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from '../firebase';
import router from '../router/index';

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
    posts: []
  },
  mutations: {
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    setUser (state, payload) { // payload instead of val, udpate user profile in the state
      state.userProfile = payload
    },
    setPosts(state, val) {
      state.posts = val
    }
  },
  actions: {
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'kfdlsfjslakl12'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    },
    async createPost({ state}, post) {    // sth wrong with this
      await firebase.postsCollection.add({
        createdOn: new Date(),
        content: post.content,
        userId: firebase.auth.currentUser.uid,
        userName: state.userProfile.name,
        comments: 0,
        likes: 0
      })
    },

    async signup ({dispatch}, payload) {  // sign up function 
      const { user } = await firebase.auth.createUserWithEmailAndPassword(payload.email, payload.password)
      await firebase.usersCollection.doc(user.uid).set({
        name: payload.name,
        email: payload.email
      })
      dispatch('fetchUserProfile', user)
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
      // firebase.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).then(

      const { user } = await firebase.auth.signInWithEmailAndPassword(payload.email, payload.password)

      dispatch('fetchUserProfile', user)
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

    async fetchUserProfile({ commit }, user) {
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
      return state.user
    }
  }
})

