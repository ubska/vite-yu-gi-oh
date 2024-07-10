<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'AppSearch',
    data() {
        return {
            store
        }
    },
    methods: {
        getArchetypeList() {
            axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((response) => {
                this.store.archetypeArray = response.data;

            })
        }
    },
    created() {
        this.getArchetypeList();
    }
}
</script>

<template>
    <div class="container">
        <select @change="$emit('filter_archetype')">
            <option value="" selected>Select archetype</option>
                    <option v-for="archetype, index in this.store.archetypeArray" :key="index" :value="archetype">
                        {{archetype.archetype_name}}
            </option>
        </select>
    </div>
</template>

<style lang="scss">
@use '../style/general.scss' as *;
@use '../style/partials/mixins' as *;
</style>