<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Home',
  });
</script>

<template>
  <div id="home" class="bg-amber-500">
    <h1>Spartan Gaming</h1>
    <p>Queue up with your fellow Spartans...</p>
    <router-link to="/schedule">View Schedule</router-link>
    <router-link to="/socials">Join Discord Server</router-link>
  </div>
</template>