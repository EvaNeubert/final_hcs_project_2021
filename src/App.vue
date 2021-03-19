<template>
  <div v-if="initialized">
    <NavMobile />
    <div
      class="h-screen absolute top-0 bg-white transition ease-in duration-700"
      :class="{ open: showNav }"
    >
      <div class="flex">
        <div
          id="navigation-icon"
          class="flex-1"
          v-if="mobileView"
          @click="showNav = !showNav"
        >
          <font-awesome-icon
            :icon="['fas', 'bars']"
            class="mt-6 mr-5 ml-4   text-xl cursor-pointer"
          />
        </div>

        <router-link v-if="mobileView" to="/">
          <img
            class=" flex-none w-8 h-8  m-4 "
            :src="require('/src/assets/images/logo.png')"
          />
        </router-link>
      </div>

      <NavigationBar v-if="!mobileView" />

      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>

      <Footer />
    </div>
  </div>

  <div v-else class="m-8 text-xl">loading data...</div>
</template>

<script>
import NavMobile from "./components/NavigationComponents/NavMobile.vue";
import NavigationBar from "./components/NavigationComponents/NavigationBar.vue";
import Footer from "./components/NavigationComponents/Footer.vue";

export default {
  components: {
    NavMobile,
    Footer,
    NavigationBar,
  },

  data() {
    return {
      mobileView: false,
      showNav: false,
    };
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    },
  },


  created() {
    this.$store.dispatch("init");
    this.handleView();
    window.addEventListener("resize", this.handleView);
  },

  computed: {
    initialized() {
      return this.$store.getters.initialized;
    },
  },
};
</script>
<style>
.open {
  transform: translateX(100px);
}
</style>
