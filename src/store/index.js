import { createStore } from "vuex";

export default createStore({
  // initial state of app

  state: {
    initialized: false,
    destinations: [],
    clickedDestinationId: 2,
  },

  getters: {
    initialized: (state) => state.initialized,

    allDestinations: (state) => {
      return state.destinations.sort((a, b) => (a.date < b.date ? -1 : 1));
    },

    singleDestination: (state) => (id) => {
      return state.destinations.find((item) => item.id == id);
    },
    currentClickedDestinationId: (state) => state.clickedDestinationId,

    allMarkers: (state) => {
      return state.destinations.map((item) => {
        return {
          id: item.id,
          country: item.country,
          city: item.city,
          date: item.date,
          image: item.image,
          position: {
            lat: item.coordinates.lat,
            lng: item.coordinates.lng,
          },
          authorname: item.author.name,
          authorimage: item.author.author_img,
        };
      });
    },
  },

  // update the store by committing mutations
  mutations: {
    initialized: (state, data) => {
      state.initialized = data;
    },

    destinations_loaded: (state, data) => {
      console.log("destinations_loaded", data);
      state.destinations = data;
    },

    setCurrentDestinationId: (state, data) => {
      state.clickedDestinationId = data;
    },
  },

  // interact with the backend by dispatching actions
  actions: {
    async init({ state, commit }) {
      if (state.initialized) {
        return;
      }

      fetch("http://localhost:3000/destinations")
        .then((res) => res.json())
        .then((data) => {
          commit("destinations_loaded", data);
          commit("initialized", true);
        })
        .catch((err) => console.log(err.message));
    },
  },

  modules: {},
});
