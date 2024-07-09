<script>
import SingleCharacter from './SingleCharacter.vue'

export default {
    name: 'CharactersList',
    components: {
        SingleCharacter,
    }
}
</script>

<template>
    <section class="container">
        <div>
            <div>
                <!-- componente di card -->
                 <SingleCharacter/>
            </div>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *
</style>