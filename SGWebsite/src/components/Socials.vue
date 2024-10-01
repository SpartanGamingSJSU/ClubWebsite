<script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'SocialsComponent',
  });
</script>

<template>
  <div id="socials">
    <div class="flex flex-col justify-center items-center">
      <img :src="'/BannerPictures/PagesBanner.png'" class="object-fill w-full max-h-[865px] opacity-90"/>
      <p class="absolute lg:text-8xl text-4xl text-center font-bold">
        Socials
      </p>
    </div>

    <div class="flex flex-col justify-center items-center text-center lg:text-4xl text-2xl font-semibold gap-24 lg:py-40 py-10 px-10 ">
      <div class="border-2 rounded-full px-6 py-3 transition ease-in duration-200 text-blue-500 border-blue-500 hover:text-white hover:bg-blue-400 hover:border-blue-400">
        <a href="https://discord.gg/fGufmzW" target="_blank"
          class="flex justify-center items-center gap-4">
          <img :src="'/icons/icons8-discord.svg'"/>
          Join Our Discord
        </a>
      </div>
      
      <div class="border-2 rounded-full px-6 py-3 transition ease-in duration-200 text-fuchsia-500 border-fuchsia-500 hover:text-white hover:bg-fuchsia-400 hover:border-fuchsia-400">
        <a href="https://www.instagram.com/sjsuspartangaming" target="_blank"
          class="flex justify-center items-center gap-4">
          <img :src="'/icons/icons8-instagram.svg'"/>
          Follow Our Instagram
        </a>
      </div>
      <div class="border-2 rounded-full px-6 py-3 transition ease-in duration-200 text-rose-500 border-rose-500 hover:text-white hover:bg-rose-400 hover:border-rose-400">
        <a href="mailto:sjsuspartangaming@gmail.com"
          class="flex justify-center items-center gap-4">
          <img :src="'/icons/icons8-mail.svg'" />
          Email Us Any Questions
        </a>
      </div>
      
      <div class="border-2 rounded-full px-6 py-3 transition ease-in duration-200 text-amber-500 border-amber-500 hover:text-white hover:bg-amber-400 hover:border-amber-400">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd08Gs1S8frwhcFCj0_DjjYtiZme6kCZ3omDIShwoL92vaikA/viewform"
          class="flex justify-center items-center gap-4">
          <img :src="'/icons/icons8-sign-up-64.png'" width="48"/>
          Become an Official Member
        </a>
      </div>
        
    </div>
  </div>
</template>