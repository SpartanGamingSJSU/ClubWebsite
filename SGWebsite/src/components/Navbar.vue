<script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'NavbarComponent',
    setup() {
      const menuOpen = ref(false);

      const toggleMenu = () => {
        menuOpen.value = !menuOpen.value;
      };

      return {
        menuOpen,
        toggleMenu,
      };
    },
  });
</script>

<template>
  <header class="fixed w-full z-50 bg-head-foot-orange lg:p-4 p-1 text-white">
    <nav class="flex justify-between items-center">
      <router-link to="/" @click="menuOpen = false;" class="pl-2 transition ease-in duration-200 hover:scale-105">
        <img :src="'./NavLogo.png'" class="w-24"/>
      </router-link>
      <div class="hidden lg:flex items-center font-bold gap-16 pr-4 text-3xl">
        <router-link to="/about" class="transition ease-in duration-200 hover:text-blue-500">
          About
        </router-link>
        <router-link to="/schedule" class="transition ease-in duration-200 hover:text-blue-500">
          Schedule
        </router-link>
        <router-link to="/socials" class="transition ease-in duration-200 hover:text-blue-500">
          Socials
        </router-link>
        <div class="text-2xl py-3 px-6 rounded-lg transition ease-in duration-200 bg-blue-500 hover:bg-blue-700">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd08Gs1S8frwhcFCj0_DjjYtiZme6kCZ3omDIShwoL92vaikA/viewform"
            target="_blank"
          >
            Join
          </a>
        </div>
      </div>

      <button @click="toggleMenu" class="lg:hidden w-10 pr-2 cursor-pointer transition ease-in duration-200 hover:scale-110">
        <img :src="'./icons/icons8-menu-48.png'"/>
      </button>
        
    </nav>


    <div 
      :class="menuOpen ? 'lg:hidden flex flex-col w-full font-semibold gap-4 px-8 py-4 text-2xl' : 'hidden'"
    >
      <router-link to="/about" @click="toggleMenu" class="transition ease-in duration-200 hover:text-blue-500">
        About
      </router-link>
      <router-link to="/schedule" @click="toggleMenu" class="transition ease-in duration-200 hover:text-blue-500">
        Schedule
      </router-link>
      <router-link to="/socials" @click="toggleMenu" class="transition ease-in duration-200 hover:text-blue-500">
        Socials
      </router-link>
      <a @click="toggleMenu" href="https://docs.google.com/forms/d/e/1FAIpQLSd08Gs1S8frwhcFCj0_DjjYtiZme6kCZ3omDIShwoL92vaikA/viewform"
        target="_blank"
        class="transition ease-in duration-200 hover:text-blue-500">
        Join
      </a>
    </div>
  </header>
</template>

  