<script lang="ts">
  import { defineComponent } from 'vue';
  import NavbarComponent from './components/Navbar.vue';
  import FooterbarComponent from './components/Footerbar.vue';

  export default defineComponent({
    name: 'App',
    components: {
      NavbarComponent,
      FooterbarComponent,
    },
  });
</script>

<template>
  <div id="app" class="flex flex-col w-full h-full font-Montserrat bg-body-orange">
    <NavbarComponent />
    <router-view class="relative lg:py-20 py-16 text-slate-100"/>
    <FooterbarComponent />
  </div>
</template>