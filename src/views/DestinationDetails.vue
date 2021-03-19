<template>
  <div>
    <NavButtons />

    <div class=" md:mx-10 mx-0 my-10 content-container ">
      <div v-if="destination">
        <div class="">
          <div class="w-full bg-black h-96">
            <img
              class="object-cover w-full opacity-50 h-96"
              :src="destination.image"
              alt="{{destination.city}}"
            />
          </div>
          <div class="flex mx-5 ">
            <div
              class="flex-1 my-6 md:text-xl sm:text-md leading-relaxed uppercase "
            >
              <span class="block font-bold ">{{ destination.city }}</span>
              <span class="text-gray-500">{{
                destination.country
              }}</span>
              <span class="block text-gray-500"> {{ destination.date }}</span>
            </div>
            <p class="mt-14 md:text-md xs:text-sm text-gray-900 uppercase">
              <span class="block font-bold text-yellow-400"> Author </span>
              {{ destination.author.name }}
            </p>
            <img
              class=" w-20 h-20 mt-5 mr-4 rounded-full shadow-md"
              :src="destination.author.author_img"
            />
          </div>
        </div>
        <div>
          <h1
            class="w-full text-3xl font-bold text-center text-gray-900 uppercase"
          >
            The Road Not Taken
          </h1>
          <div class="text-gray-800 mx-5">
            <p class="my-5">
              Two roads diverged in a yellow wood, And sorry I could not travel
              both And be one traveler, long I stood And looked down one as far
              as I could To where it bent in the undergrowth; Then took the
              other, as just as fair, And having perhaps the better claim,
              Because it was grassy and wanted wear; Though as for that the
              passing there Had worn them really about the same, And both that
              morning equally lay In leaves no step had trodden black. Oh, I
              kept the first for another day! Yet knowing how way leads on to
              way, I doubted if I should ever come back. I shall be telling this
              with a sigh Somewhere ages and ages hence: Two roads diverged in a
              wood, and I— I took the one less traveled by, And that has made
              all the difference.
            </p>

            <p class="my-5">
              Two roads diverged in a yellow wood, And sorry I could not travel
              both And be one traveler, long I stood And looked down one as far
              as I could To where it bent in the undergrowth; Then took the
              other, as just as fair, And having perhaps the better claim,
              Because it was grassy and wanted wear; Though as for that the
              passing there Had worn them really about the same, And both that
              morning equally lay In leaves no step had trodden black. Oh, I
              kept the first for another day! Yet knowing how way leads on to
              way, I doubted if I should ever come back. I shall be telling this
              with a sigh Somewhere ages and ages hence: Two roads diverged in a
              wood, and I— I took the one less traveled by, And that has made
              all the difference.
            </p>

            <p>
              Two roads diverged in a yellow wood, And sorry I could not travel
              both And be one traveler, long I stood And looked down one as far
              as I could To where it bent in the undergrowth; Then took the
              other, as just as fair, And having perhaps the better claim,
              Because it was grassy and wanted wear; Though as for that the
              passing there Had worn them really about the same, And both that
              morning equally lay In leaves no step had trodden black. Oh, I
              kept the first for another day! Yet knowing how way leads on to
              way, I doubted if I should ever come back. I shall be telling this
              with a sigh Somewhere ages and ages hence: Two roads diverged in a
              wood, and I— I took the one less traveled by, And that has made
              all the difference.
            </p>
          </div>
        </div>
      </div>
      <div v-else>...loading destination details</div>
    </div>
  </div>
</template>

<script>
// this file holds the destination detail pages
import NavButtons from "../components/NavigationComponents/NavButtons.vue";

export default {
  components: {
    NavButtons,
  },
  name: "Details",
  props: {
    id: String,
  },

 

 


  computed: {
    destination() {
      

      console.log("destination", this.id);
      return this.$store.getters.singleDestination(this.id);
    },
  },
};
</script>

<style></style>
