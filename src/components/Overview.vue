<template>
  <div class="overview">
      <h3>This is Overview. Welcome {{email}}</h3>
  </div>
</template>

<script>
export default {
    name: "Overview",
    props: {
        msg: String
    }

}; 
</script>

<style scoped lang="scss">

</style>