<template>
  <div class="grid  md:grid-cols-3 sm:grid-cols-1 m-3">
    <DestinationCard
      @destinationSelected="cardSelected"
      :destination="destination"
    />

    <GoogleMap :markers="markers" :center="center" />
  </div>
</template>

<script>
// this file is the homepage and holds the destination overview and the Map

import DestinationCard from "../components/DestinationCard.vue";
import GoogleMap from "../components/GoogleMap.vue";

export default {
  components: {
    DestinationCard,
    GoogleMap,
  },

  methods: {
    cardSelected(destination_id) {
     
      this.selectedDestination = destination_id;
    },
  },

 

  computed: {
    
    destinations() {
      return this.$store.getters.allDestinations;
    },

    markers() {
      return this.$store.getters.allMarkers;
    },
  },
};
</script>

