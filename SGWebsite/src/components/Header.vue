<template>
    <header class="bg-gray-800 text-white p-4">
      <nav>
        <ul class="flex justify-around">
          <li><router-link to="/" class="hover:text-blue-400">Home</router-link></li>
          <li><router-link to="/about" class="hover:text-blue-400">About</router-link></li>
          <li><router-link to="/schedule" class="hover:text-blue-400">Schedule</router-link></li>
          <li><router-link to="/socials" class="hover:text-blue-400">Socials</router-link></li>
          <li><a href="/signup" class="hover:text-blue-400">Sign Up</a></li>
        </ul>
      </nav>
    </header>
</template>
  
<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Header',
  });
</script>
  