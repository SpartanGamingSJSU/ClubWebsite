<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Socials',
  });
</script>

<template>
  <div id="socials">
    <h1>Spartan Gaming</h1>
    <p>Queue up with your fellow Spartans...</p>
    <router-link to="/schedule">View Schedule</router-link>
    <router-link to="/socials">Join Discord Server</router-link>
  </div>
</template>