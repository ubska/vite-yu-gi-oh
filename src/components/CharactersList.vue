<script>
import SingleCharacter from './SingleCharacter.vue'
import { store } from '../store';

export default {
    name: 'CharactersList',
    components: {
        SingleCharacter,
    },
     data() {
        return {
      store,
    }
  }
}
</script>

<template>
    <section>
        <div class="container">
            <div class="card" v-for="character in store.charactersList" :key="character.id" >
                <!-- componente di card -->
                 <SingleCharacter :info="character"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;

section{
     background-color: orange;
}
.container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    background-color: white;
    margin-top: 20px;
}
        .card{
            width: 200px;
            height: 300px;
            margin: 35px 10px;
           
        }
        
  

</style>