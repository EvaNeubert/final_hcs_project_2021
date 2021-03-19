<template>
  <div
    class="responsive-map pb-2 m-1 grid grid-cols-1 md:col-span-2 sm:col-span-1  "
  >
    <GMapMap :center="center" :zoom="3" map-type-id="terrain" >
      <GMapCluster :minimumClusterSize="3">
        <GMapMarker
       
          :key="marker.id"
          v-for="marker in markers"
          :position="marker.position"
          :clickable="true"
          :draggable="true"
          @click="openInfoWindow(marker.id)"
        >
          <GMapInfoWindow
            :opened="clickedDestination == marker.id ? true : false"
            :options="{
              pixelOffset: {
                width: 10,
                height: 1,
              },
             
            }"
          >
            <div
              class=" border border-yellow-400 rounded-md  w-58 h-30  p-4 m-2"
            >
              <router-link
                class=" text-gray-700 "
                :to="{ name: 'DestinationDetails', params: { id: marker.id } }"
              >
                <p class="uppercase  text-md tracking-wider text-center">
                  {{ marker.city }} |

                  {{ marker.country }} | {{ marker.date }}
                </p>

                <div class="flex pt-2">
                  <img
                    class="flex-none shadow-md w-12 h-12 rounded-full shadow-md "
                    :src="marker.authorimage"
                  />
                  <p class="flex-1 text-sm text-gray-500 pt-5 pl-2">
                    {{ marker.authorname }}
                  </p>
                </div>
              </router-link>
            </div>
          </GMapInfoWindow>
        </GMapMarker>
      </GMapCluster>
    </GMapMap>
  </div>
</template>

<script>
// this file contains the gmail setup
export default {
  name: "GoogleMap",
  props: {
    markers: Array,
    destinations: Array,
  },
  data() {
    return {
      center: { lat: 59.93428, lng: 30.335098 },
    };
  },

  computed: {
    clickedDestination() {
      return this.$store.getters.currentClickedDestinationId;
    },
  },

  methods: {
    openInfoWindow(id) {
      this.$store.commit("setCurrentDestinationId", id);
    },
  },
};
</script>
<style>
@media only screen and (max-width: 768px) {
  .responsive-map {
    height: 400px;
  }
}

@media only screen and (min-width: 769px) {
  .responsive-map {
    height: 100%;
  }
}

@media only screen and (min-width: 992px) {
  .responsive-map {
    height: 100%;
  }
}

@media only screen and (min-width: 1260px) {
  .responsive-map {
    height: 100%;
  }
}
</style>
