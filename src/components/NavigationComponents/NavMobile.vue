<template>
  <nav class="w-full h-20 flex" id="nav">
    <ul class="ml-3 mt-5 leading-loose text-sm">
      <li>
        <router-link
          @click="showNav = !showNav"
          class="block text-gray-900  uppercase hover:text-gray-400"
          :to="{ name: 'Dashboard' }"
          >Home</router-link
        >
      </li>

      <li>
        <router-link
          @click="showNav = !showNav"
          class="block text-gray-900  uppercase hover:text-gray-400"
          :to="{ name: 'Contact' }"
          >Contact</router-link
        >
      </li>
      <li>
        <button
          class="text-gray-900 uppercase  rounded hover:text-gray-400 focus:outline-none"
        >
          New Post
        </button>
      </li>
      <li>
        <button
          class="text-gray-900 uppercase mr-5 rounded  hover:text-gray-400 focus:outline-none  "
        >
          <font-awesome-icon :icon="['fas', 'sign-in-alt']" class="" />Login
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "MobileNav",
};
</script>

<style></style>
