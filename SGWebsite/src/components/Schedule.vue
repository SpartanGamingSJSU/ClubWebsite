<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Schedule',
  });
</script>

<template>
  <div id="schedule" class="flex flex-col justify-center items-center text-slate-100 px-20">
    
    <div class="flex flex-col justify-center items-center w-[35%] py-40 gap-10">
      <p class="text-8xl text-center text-slate-100 font-bold">
        Schedule
      </p>
    </div>

    <div class="flex items-center justify-center p-40">
      <div class="flex flex-col justify-center items-center bg-orange-300 p-16 shadow-lg rounded-lg gap-4">
        <div class="border-4 border-orange-500 rounded-lg px-16 py-10">
          <h1 class="text-4xl font-bold text-black mb-4">Fall 2024</h1>
          <h2 class="text-3xl font-bold text-black mb-6">InHouse Schedule</h2>

          <div class="grid lg:grid-cols-2 gap-y-8 gap-x-20 text-black">
            <!-- Left Column -->
            <div>
              <h3 class="text-xl font-bold text-orange-600">MONDAYS</h3>
              <ul class="text-lg">
                <li>Roblox @9pm</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold text-orange-600">FRIDAYS</h3>
              <ul class="text-lg">
                <li>Variety Night @8pm</li>
              </ul>
            </div>

            <!-- Right Column -->
            <div>
              <h3 class="text-xl font-bold text-orange-600">SATURDAYS</h3>
              <ul class="text-lg">
                <li>Valorant @8pm</li>
              </ul>
            </div>
            <div>
              <h3 class="text-xl font-bold text-orange-600">SUNDAYS</h3>
              <ul class="text-lg">
                <li>League of Legends @8pm</li>
              </ul>
            </div>
          </div>

          <h3 class="text-2xl font-bold text-orange-600 mt-6">GUILDHOUSE MEETUPS</h3>
          <p class="text-lg text-black font-semibold">Tuesdays @6pm</p>
        </div>
          
      </div>
    </div>
  </div>
</template>