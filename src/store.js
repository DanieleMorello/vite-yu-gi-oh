// store.js
import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=15&offset=0",
  loading: true,
  cards: null,

  fetchCards(apiToFetch) {
    axios
      .get(apiToFetch)
      .then((response) => {
        console.log(response.data);
        this.cards = response.data.data;
        this.loading = false;
      })
      .catch((error) => {
        console.error(error.message);
      });
  },
});
