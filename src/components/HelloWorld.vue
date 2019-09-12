<template>
   <router-link to="newcontact"><h1>{{ msg }}</h1></router-link>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'welcome'
    }
   },
}
</script>
<style lang="scss" scoped>
 h1{
     font-weight: normal;
     font-size: 18px;
   }
</style>
