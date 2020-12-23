<template>
  <div class="Forum">
    <ForumNav></ForumNav>
    <v-text-field class="filter" rounded filled type="text" v-model="search" placeholder="Search Forum Title.."></v-text-field>
    <section>
      
      <div class="col1">
        <div class="discussion">Discussion</div>
        <div class="profile">
          
          <div class="create-post">

          <form @submit.prevent style="position:fixed">
          <v-card outlined class="form-card">
          <h3 class="username">Create a Post</h3>
              <v-text-field
                name="title"
                placeholder="Title..."
                id="title"
                v-model.trim="post.title"
                filled
                rounded
                dense
                required  
              ></v-text-field>
             
              <v-textarea
                v-model.trim="post.content"
                placeholder="Write Something..."
                multi-line 
                filled
                rounded 
              ></v-textarea>

              <button
                @click="createPost()"
                :disabled="post.content && post.title === ''"
                class="button"
              >
                Post
              </button>
            </v-card>
            </form>
          </div>
        </div>
      </div>

      <div class="col2">
        <div v-if="posts.length">
          <v-card outlined v-for="post in filteredPosts" :key="post.id" class="post">
            <v-card-title>{{ post.title }}</v-card-title>
            <!-- <v-card-title>{{ post.id }}</v-card-title> -->

            <v-card-subtitle>{{ post.createdOn | formatDate }} by {{ post.userName }}</v-card-subtitle>
            <v-card-text>{{ post.content | trimLength }}</v-card-text>
            <!-- <v-card-text v-for="comment in viewPost(post)" :key="comment.id">
            </v-card-text> -->
            <a @click="viewPost(post)">View comment</a>
            <v-card-text>
            <v-chip-group>
              <v-chip>
                <a @click="toggleCommentModal(post)"
                  ><i style="color:#28cd3d" class="fas fa-comment"></i> {{ post.comments }}</a
                >
              </v-chip>
              <v-chip>
                <a @click="likePost(post.id, post.likes)"
                  ><i style="color:#28cd3d" class="fas fa-thumbs-up"></i> {{ post.likes }}</a
                >
              </v-chip>
            <div v-show="postComments.length" class="comments">

            <div
              v-for="comment in postComments"
              :key="comment.id"
              class="comment"
            >
            <div v-if="comment.postId == post.id">
              <p>{{ comment.userName }}</p>
              <!-- <p>{{ comment.postId }}</p> -->

              <span>{{ comment.createdOn | formatDate }}</span>
              <p>{{ comment.content }}</p>
            </div>
            </div>
                    </div>

              <!-- <v-dialog
                v-model="dialog"
                width="700"
              > -->
              <!-- <template v-slot:activator="{ on, attrs }"> -->
              <!-- <v-chip @click="viewPost(post)">view full post</v-chip> -->
              <!-- </template> -->
              
          <!-- <v-card> -->
       
          <!-- <a @click="dialog = false" class="close">close</a> -->
          
          
        

          <!-- </v-card> -->
              <!-- </v-dialog> -->
            </v-chip-group>
            </v-card-text>
            <transition name="fade">
              <CommentModal
                v-if="showCommentModal"
                :post="selectedPost"
                @close="toggleCommentModal()"
              ></CommentModal>
            </transition>
          </v-card>
        </div>
        <div v-else>
          <p class="no-results">There are currently no posts</p>
        </div>
      </div>
    </section>

    <!-- full post modal -->
    <!-- <transition name="fade">
      <div v-if="showPostModal" class="p-modal">
        <div class="p-container">
          <a @click="closePostModal()" class="close">close</a>
          <div class="post">
            <h5>{{ fullPost.userName }}</h5>
            <span>{{ fullPost.createdOn | formatDate }}</span>
            <h4>{{fullPost.title}}</h4>
            <p>{{ fullPost.content }}</p>
            <ul>
              <li>
                <a> {{ fullPost.comments }}</a>
              </li>
              <li>
                <a>likes {{ fullPost.likes }}</a>
              </li>
            </ul>
          </div>
          <div v-show="postComments.length" class="comments">
            <div
              v-for="comment in postComments"
              :key="comment.id"
              class="comment"
            >
              <p>{{ comment.userName }}</p>
              <span>{{ comment.createdOn | formatDate }}</span>
              <p>{{ comment.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </transition> -->
    <!-- Full post modal -->

     

  </div>
</template>

<script>
import CommentModal from "./CommentModal";
import { commentsCollection } from '@/firebase';
import { mapState } from "vuex";
import moment from "moment";
export default {
  name: "Forum",
  components: {
    CommentModal,
  },
  data() {
    return {
      post: {
        title: "",
        content: "",

      },
      search: "",
      dialog: false,
      icons: ["mdi-facebook", "mdi-twitter"],
      showCommentModal: false,
      selectedPost: {},
      showPostModal: true,
      fullPost: {},
      postComments: []
    };
  },
  
  computed: {
    ...mapState(["userProfile", "posts"]),

    
    filteredPosts: function(){
      return this.posts.filter((posts)=>{
        return posts.title.match(this.search);
      })
    }
    

  },
  
  created() {
    document.title = "Forum"; // to set title
  },

  methods: {
    logOut() {
      this.$store.dispatch("logout");
    },
    createPost() {
      this.$store.dispatch("createPost", { content: this.post.content, title: this.post.title });
      this.post.content = "";
      this.post.title = "";      
    },
    toggleCommentModal(post) {
      this.showCommentModal = !this.showCommentModal;
      // if opening modal set selectedPost, else clear
      if (this.showCommentModal) {
        this.selectedPost = post;
      } else {
        this.selectedPost = {};
      }
      


    },
    likePost(id, likesCount) {
      this.$store.dispatch("likePost", { id, likesCount });
    },

    async viewPost(post) {
      const docs = await commentsCollection.where('postId', '==', post.id).get()
      docs.forEach(doc => {
        let comment = doc.data()
        comment.id = doc.id
        this.postComments.push(comment)

    
      })

      // this.fullPost = post
      // this.showPostModal = true
},

closePostModal() {
  this.postComments = []
  this.showPostModal = false
}
  },

  filters: {
    formatDate(val) {
      if (!val) {
        return "-";
      }
      let date = val.toDate();
      return moment(date).fromNow();
    },
    trimLength(val) {
      if (val.length < 1000000) {
        return val;
      }
      return `${val.substring(0, 1000000)}...`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
// colors
$primary: #30a0ee;
$error: #ef5777;
$success: #1abc9c;
$light: #f5f8fa;
$medium: #657786;
$dark: #34495e;
$white: #fff;



// resets
body {
  margin: 0;
  color: $dark;
  background: #e6ecf0;
}

html {
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}

* {
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
  transition: 0.15s;

  &:focus {
    outline: none;
  }
}

// fonts
h1,
h2,
h3,
h4,
h5,
p {
  margin: 0 0 0.5rem;
}

#foot {
  background-color: #e4e4dd;
}

h1 {
  font-size: 2rem;
}

.form-card{
  padding: 30px 30px 30px 30px;
}

h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.6rem;
}

h4 {
  font-size: 1.4rem;
}

h5 {
  font-size: 1.2rem;
}


.discussion{
  position:fixed;
  width: 150.5px;
  height: 17px;
  padding-left: 2px;
  margin: 1px 1px 20px 1px;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  font-family: "Nunito", sans-serif;
  font-size: 50px;
  padding-top: -10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  text-align: left;
  color: #28cd3d;

}

p {
  line-height: 1.5;
}

a {
  font-family: "Open Sans", sans-serif;
  text-decoration: none;
  color: green;
  margin: 0;
  cursor: pointer;

  &:hover {
    color: lighten(green, 5%);
  }
}

// globals
section {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 800px) {
    display: block;
  }
}

.col2{
  margin-top: 140px;
}


.col1,
.col2 {
  flex-grow: 1;
  flex-basis: 0;
  padding: 1rem;
  @media screen and (max-width: 800px) {
  }
}

[v-cloak] {
  display: none;
}

.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba($dark, 0.4);
  z-index: 9999;

  p {
    background: $white;
    width: 150px;
    text-align: center;
    margin: 40vh auto 0;
    padding: 40px 0;
    border-radius: 3px;
    box-shadow: 0 0 20px 0 rgba($dark, 0.5);
  }
}

.error-msg {
  margin-top: 1rem;
  text-align: center;

  p {
    color: $error;
    margin: 0;
  }
}

.button {
  background: #28cd3d;
  border: 0;
  outline: 0;
  color: $white;
  padding: 0.8rem 1rem;
  min-width: 480px;
  font-size: 20px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background: lighten(green, 5%);
  }

  &:disabled {
    opacity: 0.5;

    &:hover {
      background: green;
    }
  }
}

.text-center {
  text-align: center;
}



.inline {
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
  }
}

.clear {
  clear: both;
}
   
.username{
  padding-bottom: 20px;
}

form {
  padding-top: 140px;
  label {
    display: block;
    font-size: 16px;
    margin-bottom: 0.5rem;
  }

  input {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
    font-size: 16px;
    padding: 10px;
    outline: 0;
    border: 1px solid #e6ecf0;
    border-radius: 3px;

    &:focus {
      box-shadow: 0 0 5px 0 rgba($dark, 0.2);
    }
  }

  // v-textarea {
  //   // resize: none;
  //   border: 1px solid #e6ecf0;
  //   outline: 0;
  //   height: 100px;
  //   // width: 100%;
  //   padding: 10px;
  //   font-size: 16px;
  // }
}
// transitions

.fade-enter-active {
  transition: opacity 0.5s;
}

.fade-leave-active {
  transition: opacity 0s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

header {
  position: relative;
  background: $white;
  box-shadow: 0 0 5px 0 rgba($dark, 0.5);
  z-index: 10;

  h3 {
    display: inline-block;
  }

  ul {
    float: right;
    text-align: right;

    li {
      margin-top: 4px;
      margin-left: 6px;

      a {
        display: block;
        padding: 5px;
      }
    }
  }

  @media screen and (max-width: 742px) {
    h3 {
      display: block;
      text-align: center;
    }

    ul {
      float: none;
      text-align: center;
    }
  }
}

// login


// password reset
.modal {
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(#333, 0.5);

  .modal-content {
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 400px;
    background: #fff;
    padding: 40px;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(#333, 0.5);
    z-index: 999;

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      padding: 5px;
      cursor: pointer;
      transition: 0.15s;

      &:hover {
        color: #000;
      }
    }

    h3 {
      margin: 0;
    }

    p {
      margin: 15px 0;
    }

    .error {
      color: tomato;
      font-size: 12px;
    }

    .button {
      width: 100%;
    }
  }
}

// dashboard
#dashboard {
  section {
    padding: 2rem 0;
  }

  .col1 {
    flex: 0 0 30%;
    position: fixed;

    @media screen and (max-width: 10000px) {
      flex: 0 0 40%;
    }
  }

  .profile {
    background: $white;
    padding: 2rem;

   

    p {
      color: $medium;
      margin-bottom: 1rem;
    }
  }

  .create-post {
    p {
      margin-bottom: 0.5rem;
    }

    // textarea {
    //   height: 200px;
    //   margin: 0;
    // }

    .button {
      margin-top: 1rem;
      width: 100%;
      z-index: 5;
      border-radius: 0 0 3px 3px;
    }
  }

  .hidden-posts {
    text-align: center;
    border: 1px solid #e6ecf0;
    font-size: 14px;
    border-bottom: 0;
    background: $white;

    &:hover {
      background: #f5f8fa;
      cursor: pointer;
    }

    .new-posts {
      color:#28cd3d ;
    }

    p {
      padding: 15px;
      margin: 0 auto;
      color: darken($light, 25%);
    }
  }

  .post {
    border: 1px solid #e6ecf0;
    border-bottom: 0;
    font-size: 14px;
    padding: 1.5rem;
    background: $white;

    &:hover {
      background: #f5f8fa;
    }

    &:last-of-type {
      border-bottom: 1px solid $light;
    }

    h5 {
      margin: 0 0 0.5rem;
    }

    span {
      display: block;
      font-style: italic;
      font-size: 12px;
      margin-bottom: 0.5rem;
      color: darken($light, 25%);
    }

    p {
      margin: 0;
    }

    ul {
      list-style: none;
      margin: 1rem 0 0;
      padding: 0;

      li {
        display: inline-block;
        margin-right: 1rem;
        font-size: 12px;
      }
    }
  }

  .no-results {
    border: 1px solid #e6ecf0;
    background: $white;
    text-align: center;
    padding: 100px 1rem;
  }

  .c-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba($dark, 0.4);
    z-index: 999;

    .c-container {
      position: relative;
      max-width: 600px;
      margin: 30vh auto 0;
      padding: 2rem;
      border-radius: 3px;
      background: $white;
      box-shadow: 0 0 20px 0 rgba($dark, 0.5);

      a {
        position: absolute;
        top: 5px;
        right: 10px;
        padding: 5px;
      }

      .button {
        margin-top: 1rem;
      }
    }
  }

  .p-modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba($dark, 0.4);
    z-index: 999;

    .p-container {
      position: fixed;
      max-width: 600px;
      top: 2vh;
      bottom: 2vh;
      left: 0;
      right: 0;
      margin: 0 auto;
      padding: 2rem;
      border-radius: 3px;
      background: $white;
      box-shadow: 0 0 20px 0 rgba($dark, 0.5);
      overflow: auto;

      .close {
        position: absolute;
        top: 5px;
        right: 10px;
        padding: 5px;
      }

      .post {
        border: 0;
        border-bottom: 1px solid #e6ecf0;

        &:hover {
          background: $white;
        }
      }

      .comment {
        font-size: 14px;
        padding: 1.5rem;
        border-top: 1px solid #e6ecf0;

        &:first-of-type {
          border-top: 0;
        }

        h5 {
          margin: 0 0 0.5rem;
        }

        span {
          display: block;
          font-style: italic;
          font-size: 12px;
          margin-bottom: 0.5rem;
          color: darken($light, 20%);
        }

        p {
          margin: 0;
        }
      }
    }
  }
}

// settings
#settings {
  padding: 2rem 0;

  .col1 {
    max-width: 600px;
    margin: 5vh auto 0;
    background: $white;
    padding: 2rem;
  }

  form {
    margin-top: 3rem;
  }

  .success {
    color: $success;
    margin: 0.5rem 0 -2rem;
  }

  .button {
    margin-top: 2rem;
  }
}
</style>
