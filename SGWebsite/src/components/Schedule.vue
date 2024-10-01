<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'ScheduleComponent',
  });
</script>

<template>
  <div id="schedule">
    <div class="flex flex-col justify-center items-center">
      <img :src="'/BannerPictures/PagesBanner.svg'" class="object-fill w-full h-full opacity-90"/>
      <p class="absolute lg:text-8xl text-4xl text-center font-bold">
        Schedule
      </p>
    </div>

    <div class="flex items-center justify-center lg:py-40 py-10 px-20">
      <div class="flex flex-col justify-center items-center bg-orange-300 lg:px-12 lg:py-8 px-6 py-4 shadow-lg rounded-lg gap-4">
        <div class="border-4 border-orange-500 rounded-lg lg:px-16 px-8 lg:py-10 py-5">
          <h1 class="lg:text-4xl text-xl font-bold text-black mb-4">Fall 2024</h1>
          <h2 class="lg:text-3xl text-lg font-bold text-black mb-6">InHouse Schedule</h2>

          <div class="grid lg:grid-cols-2 gap-y-8 gap-x-20 text-black">
            <!-- Left Column -->
            <div>
              <h3 class="lg:text-xl font-bold text-orange-600">MONDAYS</h3>
              <div class="lg:text-lg text-sm font-medium">
                Roblox @8pm
              </div>
            </div>
            <div>
              <h3 class="lg:text-xl font-bold text-orange-600">FRIDAYS</h3>
              <div class="lg:text-lg text-sm font-medium">
                Variety Night @8pm
              </div>
            </div>

            <!-- Right Column -->
            <div>
              <h3 class="lg:text-xl font-bold text-orange-600">SATURDAYS</h3>
              <div class="lg:text-lg text-sm font-medium">
                Valorant @8pm
              </div>
            </div>
            <div>
              <h3 class="lg:text-xl font-bold text-orange-600">SUNDAYS</h3>
              <div class="lg:text-lg text-sm font-medium">
                League of Legends @8pm
              </div>
            </div>
          </div>

          <h3 class="lg:text-2xl font-bold text-orange-600 mt-6">GUILDHOUSE MEETUPS</h3>
          <p class="lg:text-lg text-sm text-black font-semibold">Tuesdays @6pm</p>
        </div>
          
      </div>
    </div>
  </div>
</template>