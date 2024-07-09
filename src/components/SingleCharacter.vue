<script>
export default {
    name: 'SingleCharacter',
    props: ['info'],
}
</script>

<template>
    <div>
        <img :src="info.card_images" :alt="info.name">
        <h4>{{ info.name }}</h4>
        <div>{{info.archetype}}</div>
    </div>
</template>

<style scoped lang="scss">
@use '../style/general.scss' as *
</style>