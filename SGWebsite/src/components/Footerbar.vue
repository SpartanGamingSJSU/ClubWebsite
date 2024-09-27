<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Footerbar',
  });
</script>

<template>
  <footer class="bg-head-foot-orange p-4">
    <div class="flex justify-center gap-x-10 text-md">
      <a href="https://tinyurl.com/277hrv5f" target="_blank" class="transition ease-in duration-200 font-medium hover:text-blue-500">
        Community Guidelines
      </a> |
      <p class="font-medium">© Copyright 2024 Spartan Gaming</p> |
      <p class="font-medium">Web Design by Howard Wei</p>
    </div>
  </footer>
</template>