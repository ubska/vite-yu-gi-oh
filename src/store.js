import { reactive } from "vue";
import CharactersList from "./components/CharactersList.vue";

export const store = reactive({
    charactersList: [],
    apiURl:"https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0"
});