<template>
 <div>
     <ForumNav></ForumNav>
     <comment-grid
  baseURL="https://climate-edu.firebaseio.com"
  apiKey="AIzaSyAs2-Y8hzL2FEb8VQ79o2cEw2cYXAc2IxY"
  nodeName="newnodename">
</comment-grid>
 </div>
</template>

<script>
export default {
created() {
    document.title = "Freetalk"; // to set title
  },
}
</script>

<style>

</style>