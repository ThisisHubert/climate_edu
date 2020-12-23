<template>
  <div class="c-modal">
    <div class="c-container">
      <!-- <a @click="$emit('close')">close</a> -->
      
      <form @submit.prevent>
        <v-text-field placeholder="Write comment..." style="margin-left: 20px; margin-right: 20px" rounded filled v-model.trim="comment"></v-text-field>
        <v-btn rounded color="#28cd3d" style="margin-bottom: 20px; margin-left: 20px; margin-top:-15px; color:white" @click="addComment()" :disabled="comment == ''" class="button">Post</v-btn>
      </form>
    </div>
  </div>
</template>

<script>
import { commentsCollection, postsCollection, auth } from '@/firebase'
export default {
  props: ['post'],
  data() {
    return {
      comment: '',
    }
  },
  methods: {
    async addComment() {
      // create comment
      await commentsCollection.add({
        createdOn: new Date(),
        content: this.comment,
        postId: this.post.id,
        userId: auth.currentUser.uid,
        userName: this.$store.state.userProfile.name
      })
      // update comment count on post
      await postsCollection.doc(this.post.id).update({
        comments: parseInt(this.post.comments) + 1
      })



      // close modal
      this.$emit('close')
    }
  }
}
</script>