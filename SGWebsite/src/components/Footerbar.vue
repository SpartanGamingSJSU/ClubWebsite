<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'FooterbarComponent',
  });
</script>

<template>
  <footer class="bg-head-foot-orange p-4 text-white">
    <div class="flex lg:flex-row flex-col justify-center items-center gap-x-8 gap-y-2">
      <a href="https://tinyurl.com/277hrv5f" target="_blank" class="transition ease-in duration-200 font-medium hover:text-blue-500 hover:scale-105">
        Community Guidelines
      </a>
      <p class="hidden lg:flex">
        |
      </p>
      <p class="font-medium">© Copyright 2024 Spartan Gaming</p>
      <p class="hidden lg:flex">
        |
      </p>
      <p class="font-medium">All Rights Reserved</p>
    </div>
  </footer>
</template>