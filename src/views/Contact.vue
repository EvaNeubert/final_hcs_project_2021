<template>
  <div class="contact md:m-20 m-10  ">


    <div class=" grid md:grid-cols-2 sm:grid-cols-1">
        <div class=" md:border-r-2  p-5">
        <h2 class="text-2xl uppercase text-gray-900 pb-10">Learn more about the project</h2>
        <p class="break-word text-gray-800"> This is the final project for the Fullstack Course Programm of the Hamburg Coding School.
          Working on this project has been challenging and fun. I am excited to continue the bonus tasks 
          for practice. I think a learned a lot trying to figure out the tasks, looking for solutions and 
          improving them. I hope you like the outcome. </p>
          <div class="bg-gray-900 md:mr-10 md:ml-10 sm:mr-auto sm:ml-auto w-40 h-40 rounded-full shadow-md transition duration-1000 ease-out transform hover:scale-90">
            <p class="m-3 pr-2 pt-8 transform rotate-17 text-white font-bold text-center uppercase"> Project for Hamburg Coding School</p> </div>
              
      </div>
      
      <div class=" mt-10 ml-auto mr-auto text-center">
        <img
          class="  w-40 h-40 rounded-full ml-2 shadow-md  "
          :src="require('/src/assets/images/profile.jpeg')"
        />

        <p class="text-md text-gray-600 uppercase pt-3 leading-relaxed">
          <span class="block text-gray-900"> Eva Neubert </span>
          <span class="block">Milchstraße 42 </span>
          <span class="block"> 21345 Welt</span>
          <span class="block">person@planet.com</span>
          <span>778 703 0038</span>
        </p>
   
      </div>

    
    </div>
  </div>
</template>
