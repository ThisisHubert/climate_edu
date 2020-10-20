<template>
  <div class="Forum">
    <ForumNav></ForumNav>
     <section>
      <div class="col1">
        <div class="profile">
          <h5>{{name}}</h5>
          <div class="create-post">
            <p>create a post</p>
            <form @submit.prevent>
              <textarea v-model.trim="post.content"></textarea>
              <button @click="createPost()" :disabled="post.content === ''" class="button">post</button>
            </form>
          </div>
        </div>
      </div>
      <div class="col2">
        <div>
          <p class="no-results">There are currently no posts</p>
        </div>
      </div>
    </section>


  </div>
</template>

<script>
import firebase from 'firebase'
export default {
    name: "Forum",
    data() {
    return {
      post: {
        content: ''
      }
    }
  },
    components:{

    },
    created(){
      this.user = firebase.auth().currentUser;
        if(this.user != null){
            this.name = this.user.name;  
            this.email = this.user.email;
            this.photo = this.user.photoURL;
    }
    },
    methods:{
      logOut(){
            firebase.auth().signOut();
           
    },
     createPost() {
      this.$store.dispatch('createPost', { content: this.post.content })
      this.post.content = ''
    }
    },

}
</script>

<style>

</style>