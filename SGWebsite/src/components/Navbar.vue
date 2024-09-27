<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Navbar',
  });
</script>

<template>
  <header class="bg-head-foot-orange p-4 text-white">
    <nav class="flex justify-between items-center">
      <router-link to="/" class="pl-2 transition ease-in duration-200 hover:scale-105">
        <img :src="'./NavLogo.png'" class="w-24"/>
      </router-link>
      <div class="flex items-center font-semibold lg:gap-20 gap-4 pr-4">
        <router-link to="/about" class="lg:text-4xl transition ease-in duration-200 hover:text-blue-500">
          About
        </router-link>
        <router-link to="/schedule" class="lg:text-4xl transition ease-in duration-200 hover:text-blue-500">
          Schedule
        </router-link>
        <router-link to="/socials" class="lg:text-4xl transition ease-in duration-200 hover:text-blue-500">
          Socials
        </router-link>
        <div class="lg:text-3xl lg:py-3 lg:px-6 py-1 px-2 rounded-lg transition ease-in duration-200 bg-blue-500 hover:bg-blue-700">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd08Gs1S8frwhcFCj0_DjjYtiZme6kCZ3omDIShwoL92vaikA/viewform" class="transition ease-in duration-200">
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

  