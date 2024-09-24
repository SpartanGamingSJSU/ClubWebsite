<script lang="ts">
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'Home',
  });
</script>

<template>
  <div id="home" class="flex flex-col justify-center items-center text-slate-100 px-20">

    <div class="flex flex-col justify-center items-center py-40 px-72 gap-10">
      <p class="text-4xl text-center font-semibold">Queue up with your fellow Spartans in your favorite games. Online or in-person.</p>
      <button class="bg-blue-500 hover:bg-blue-700 rounded-lg font-medium py-3 px-6 transition ease-in duration-200">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd08Gs1S8frwhcFCj0_DjjYtiZme6kCZ3omDIShwoL92vaikA/viewform" class="text-3xl font-medium">
          Become a Member
        </a>
      </button>
    </div>

    <div class="flex flex-row justify-center items-center text-center gap-x-60 w-[80%] py-40">
      <div class="flex flex-col justify-center gap-10 px-40">
        <h3 class="text-6xl font-semibold">
          Find Your Video Game Haven
        </h3>
        <p class="text-4xl font-medium">
          We offer weekly inhouses for various multiplayer games.
        </p>
        <div class="flex justify-center items-center">
          <button class="bg-blue-500 hover:bg-blue-700 rounded-lg py-3 px-6 transition ease-in duration-200">
            <router-link to="/schedule" class="text-3xl font-medium">
              View Schedule
            </router-link>
          </button>
        </div>
      </div>

      <!--<div class="w-[70%]">
        <img :src="'/gamecollageplaceholder.png'"/>
      </div>-->
    </div>

    <div class="flex flex-col justify-center items-center text-center gap-10 w-[50%] py-40">
      <h3 class="text-6xl font-semibold">
        Meet New Friends
      </h3>
      <p class="text-4xl px-40 font-medium">
        Our incredible community of gamers are always eager to meet and share new experiences together.
      </p>
      <button class="bg-blue-500 hover:bg-blue-700 rounded-lg py-3 px-6 transition ease-in duration-200">
        <a href="https://discord.gg/fGufmzW" class="text-3xl font-medium">
          Join Discord Server
        </a>
      </button>
    </div>
  </div>
</template>