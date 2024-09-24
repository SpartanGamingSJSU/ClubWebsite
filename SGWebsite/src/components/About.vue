<script lang="ts">
  import { defineComponent } from 'vue';
  import StaffMember from './StaffMember.vue';

  export default defineComponent({
    name: 'About',
    components: {
      StaffMember,
    },
  });
</script>

<template>
  <div id="about" class="flex flex-col justify-center items-center text-slate-100 px-20">
    
    <div class="flex flex-col justify-center items-center w-[35%] py-40 gap-10">
      <p class="text-8xl text-center text-slate-100 font-bold">
        About
      </p>
    </div>

    <div class="flex flex-row justify-center items-center text-center w-[60%] py-40">
      <p class="text-5xl font-medium">
        Hello! We are Spartan Gaming, the biggest social gaming club at SJSU!
        Our goal is to bring students together through a shared passion for gaming.
      </p>
    </div>

    <div class="flex flex-col justify-center items-center text-center gap-10 py-40">
      <h3 class="text-7xl font-semibold">
        Meet Our Officers
      </h3>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 p-8">
        <StaffMember 
          staffName="Thao"
          photo="./SGLogo.png"
          position="President"
        />
        <StaffMember 
          staffName="George"
          photo="./SGLogo.png"
          position="Vice President"
        />
        <StaffMember 
          staffName="Suizo"
          photo="./SGLogo.png"
          position="Secretary"
        />
        <StaffMember 
          staffName="Michael"
          photo="./SGLogo.png"
          position="Treasurer"
        />
        <StaffMember 
          staffName="Brandon"
          photo="./SGLogo.png"
          position="Marketing"
        />
        <StaffMember 
          staffName="Pink"
          photo="./SGLogo.png"
          position="Marketing"
        />
      </div>
    </div>
  </div>
</template>