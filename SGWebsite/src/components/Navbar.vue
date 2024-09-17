<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Navbar',
  });
</script>

<template>
  <header class="bg-head-foot-orange text-white p-4">
    <nav class="flex justify-between px-8">
      <div>
        <router-link to="/" class="hover:text-blue-400">
          Logo Here
        </router-link>
      </div>
      <div class="flex font-bold text-4xl gap-x-16">
        <router-link to="/about" class="hover:text-blue-400">
          About
        </router-link>
        <router-link to="/schedule" class="hover:text-blue-400">
          Schedule
        </router-link>
        <router-link to="/socials" class="hover:text-blue-400">
          Socials
        </router-link>
        <div class="bg-blue-600 hover:bg-blue-600">
          <a href="/signup" class="hover:text-blue-400">
            Sign Up
          </a>
        </div>
        
      </div>
    </nav>
  </header>
</template>

  