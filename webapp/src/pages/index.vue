<template>
<h1>Movie Search</h1>
  <h2> Search using the names of movies:</h2>
  <input v-model="text" />
  <div></div>
  <v-btn @click="search()">Search</v-btn>
  <div></div>
  <span v-for="card in vueCards">
    <v-card
        width="600"
        title="{{card.title}}"
        content="{{card.popularity_summary}}"
        subtitle="{{card.movie_id}}">
        <!-- Add v-btn to link to poster url-->
    </v-card>

  </span>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      text: '',
      vueCards: []
    }
  },
  methods: {
      search: function(){
        //Clear the vuecards each time.
        this.vueCards.empty()
        let query = this.text
        console.log("searching")
        // Make promise here
        axios.get('localhost:8080/movie?' + query).then(response => {
          //Check api code to make sure it is 200
          //If 200, make sure the length is > 0, if 0, tell user nothing came back.
          this.vueCards = response.data
          //If 400, have error pop up.
        })
      }
  }
}
</script>

<style scoped>

</style>