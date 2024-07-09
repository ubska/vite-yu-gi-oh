<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
  }
}
</script>

<template>
 
  <AppHeader message="Yu-Gi-Ho"/>
  <main>
    
  </main>
</template>

<style lang="scss">
@use './style/general.scss';

main{
  padding-top: 20px;
}
</style>
