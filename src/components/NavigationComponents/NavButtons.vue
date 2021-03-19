<template>
  <button
    @click="gohome"
    class=" md:mx-8 mt-5 p-3 hover:text-gray-400 focus:outline-none"
  >
    <font-awesome-icon :icon="['fas', 'chevron-left']" class="mr-2" />See all
    posts
  </button>
</template>

<script>
//this file holds the navigation button to go back home
export default {
  name: "NavButtons",

  methods: {
    gohome() {
      this.$router.push("/");
    },
  },
};
</script>
