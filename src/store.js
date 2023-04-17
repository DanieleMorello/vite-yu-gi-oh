// store.js
import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
  apiUrl: "https://db.ygoprodeck.com/api/v7/cardinfo.php",
  fetchCards(apiToFetch) {
    axios
      .get(apiToFetch)
      .then((Response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  },
});
