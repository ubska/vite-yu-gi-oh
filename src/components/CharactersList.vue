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
    <section class="container">
        <div>
            <div  v-for="character in store.charactersList" :key="character.id" >
                <!-- componente di card -->
                 <SingleCharacter :info="character"/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *
</style>