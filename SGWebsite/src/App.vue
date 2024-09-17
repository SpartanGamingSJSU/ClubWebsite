<script lang="ts">
  import { defineComponent } from 'vue';
  import Navbar from './components/Navbar.vue';
  import Footerbar from './components/Footerbar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Navbar,
      Footerbar,
    },
  });
</script>

<template>
  <div id="app" class="flex flex-col w-full h-full gap-32 font-Montserrat bg-body-orange">
    <Navbar />
    <router-view />
    <Footerbar />
  </div>
</template>