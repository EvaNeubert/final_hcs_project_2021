<template>
  <div class="grid grid-cols-2 ">
    <div
      class=" bg-white m-1 rounded shadow-md transition duration-1000 ease-out transform hover:scale-90"
      v-for="destination in destinations"
      :key="destination.id"
    >
      <router-link
        :to="{ name: 'DestinationDetails', params: { id: destination.id } }"
      >
        <div>
          <img class="object-cover " :src="destination.image" alt="character" />
          <div class="p-2">
            <span class=" font-bold">{{ destination.city }}</span>
            <span class="block text-sm text-gray-500">{{
              destination.country
            }}</span>
            <span class="block text-sm text-gray-500">{{
              destination.date
            }}</span>
            <div class="flex">
              <img
                class="flex-none w-12 h-12 mt-2 rounded-full shadow-md "
                :src="destination.author.author_img"
              />
              <p class="flex-1 text-xs text-gray-500 mt-8 ml-2">
                {{ destination.author.name }}
              </p>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>


export default {
  name: "DestinationCard",

  

  computed: {
    destinations() {
      return this.$store.getters.allDestinations;
    },
  },
};
</script>


