<script>
// import axios
import axios from 'axios';

import AppHeader from './components/AppHeader.vue'
import CharactersList from './components/CharactersList.vue'
import AppSearch from './components/AppSearch.vue';
// import store
import { store } from './store';

export default {
  name: 'App',
  components: {
    AppHeader,
    CharactersList,
    AppSearch,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getCharacters() {
      axios.
        get(store.apiURl)
        .then(res => {
          console.log("RES", res.data);
          store.charactersList = res.data.data;
        })
        .catch(err => {
        console.log(err);
      })
    }
  },
  created() {
    this.getCharacters();
  }
}
</script>

<template>
 
  <AppHeader message="Yu-Gi-Ho"/>
  <main>
    <AppSearch @filter_archetype="getCardsList"/>
    <CharactersList/>
  </main>
</template>

<style lang="scss">
@use './style/general.scss';

main{
  padding-top: 20px;
}
</style>
