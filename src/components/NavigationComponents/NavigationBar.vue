<template>
  <nav id="nav" class="w-full h-20 flex ">
    <router-link class="flex flex-1" to="/">
      <img
        class=" flex-none w-10 h-10  m-7 "
        :src="require('/src/assets/images/logo.png')"
      />

      <p class="text-gray-900 text-xl uppercase mt-11">explora</p>
    </router-link>
    <router-link
      id="colored-link"
      class="text-gray-900 mt-12 mr-16 uppercase hover:text-gray-400"
      :to="{ name: 'Contact' }"
      >Contact</router-link
    >

    <button
      class="focus:outline-none  text-gray-900 uppercase mx-5 rounded mt-5 mt-10 px-2 py-2 hover:text-gray-400"
    >
      Create new Post
    </button>
    <button
      class="focus:outline-none text-gray-900 uppercase mr-5 rounded mt-5 mt-10 px-2 py-2 hover:text-gray-400"
    >
      <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="mx-2" />Login
    </button>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
#nav a.router-link-exact-active {
  color: #fbbf24;
}
</style>
