<script lang="ts">
  import { defineComponent } from 'vue';
  import StaffMember from './StaffMember.vue';

  export default defineComponent({
    name: 'AboutComponent',
    components: {
      StaffMember,
    },
  });
</script>

<template>
  <div id="about">
    <div class="flex flex-col justify-center items-center">
      <img :src="'/BannerPictures/PagesBanner.svg'" class="object-fill w-full h-full opacity-90"/>
      <p class="absolute lg:text-8xl text-4xl text-center font-bold">
        About
      </p>
    </div>
    

    <div class="flex flex-col justify-center items-center lg:px-20 px-4 lg:py-40 py-10">
      <div class="text-center lg:w-[60%] lg:py-20 py-10">
        <p class="lg:text-4xl text-2xl font-medium">
          Hello! We are Spartan Gaming, the biggest social gaming club at SJSU!
          Our goal is to bring students together through a shared passion for gaming.
        </p>
      </div>

      <div class="flex flex-col justify-center items-center text-center gap-12 pt-20">
        <h3 class="lg:text-6xl text-3xl font-semibold">
          Meet Our Officers
        </h3>
        <div class="flex flex-wrap justify-center items-center gap-8 lg:px-48 px-10">
          <StaffMember 
            staffName="Thao"
            photo="./Officers/PresidentOfficer.png"
            position="President"
          />
          <StaffMember 
            staffName="George"
            photo="./Officers/VicePresidentOfficer.png"
            position="Vice President"
          />
          <StaffMember 
            staffName="Suizo"
            photo="./Officers/SecretaryOfficer.png"
            position="Secretary"
          />
          <StaffMember 
            staffName="Michael"
            photo="./Officers/TreasurerOfficer.png"
            position="Treasurer"
          />
          <StaffMember 
            staffName="Pink"
            photo="./Officers/MarketingOfficer.png"
            position="Marketing"
          />
        </div>
      </div>
    </div>
      
  </div>
</template>