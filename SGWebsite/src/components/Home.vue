<template>
    <div class="home">
      <h1>Spartan Gaming</h1>
      <p>Queue up with your fellow Spartans...</p>
      <router-link to="/schedule">View Schedule</router-link>
      <router-link to="/socials">Join Discord Server</router-link>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Home',
  });
  </script>
  
  <style scoped>
  /* Add your styles */
  </style>
  