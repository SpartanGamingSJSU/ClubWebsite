<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Socials',
  });
</script>

<template>
  <div id="socials" class="flex flex-col justify-center items-center text-slate-100 px-20">
    <div class="flex flex-col justify-center items-center w-[35%] py-40 gap-10">
      <p class="text-8xl text-center text-slate-100 font-bold">
        Socials
      </p>
    </div>

    <div class="flex flex-col justify-center items-center text-center text-4xl font-semibold gap-24 py-40">
      <div class="border-2 rounded-full px-6 py-3 transition ease-in duration-200 text-blue-500 border-blue-500 hover:text-white hover:bg-blue-500">
        <a href="https://discord.gg/fGufmzW" class="">
          Join Our Discord
        </a>
      </div>
      
      <div class="border-2 rounded-full px-6 py-3 transition ease-in duration-200 text-fuchsia-500 border-fuchsia-500 hover:text-white hover:bg-fuchsia-500">
        <a href="https://www.instagram.com/sjsuspartangaming">
          Follow Our Instagram
        </a>
      </div>
      <div class="border-2 rounded-full px-6 py-3 transition ease-in duration-200 text-rose-500 border-rose-500 hover:text-white hover:bg-rose-500">
        <a href="mailto:sjsuspartangaming@gmail.com">
          Email Us Any Questions
        </a>
      </div>
      
      <div class="border-2 rounded-full px-6 py-3 transition ease-in duration-200 text-amber-500 border-amber-500 hover:text-white hover:bg-amber-500">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd08Gs1S8frwhcFCj0_DjjYtiZme6kCZ3omDIShwoL92vaikA/viewform">
          Become an Official Member
        </a>
      </div>
        
    </div>
  </div>
</template>