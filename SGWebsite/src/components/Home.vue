<script lang="ts">
  import { defineComponent, onBeforeUnmount, onMounted, ref } from 'vue';
  export default defineComponent({
    name: 'HomeComponent',
    setup() {
      // Carousel images
      const images = ref([
        './BannerPictures/BannerPicture1.png',
        './BannerPictures/BannerPicture2.png',
        './BannerPictures/BannerPicture3.png',
        './BannerPictures/BannerPicture4.png',
        './BannerPictures/BannerPicture5.png',
        './BannerPictures/BannerPicture6.png',
        './BannerPictures/BannerPicture7.png',
        './BannerPictures/BannerPicture8.png',
        './BannerPictures/BannerPicture9.png',
        './BannerPictures/BannerPicture10.png',
        './BannerPictures/BannerPicture11.png',
        './BannerPictures/BannerPicture12.png',
        './BannerPictures/BannerPicture13.png',
        './BannerPictures/BannerPicture14.png',
        './BannerPictures/BannerPicture15.png',
        './BannerPictures/BannerPicture16.png',
      ]);

      const currentIndex = ref(0);
      let intervalId: number | undefined;
      const slideDirection = ref('slide-left'); // Track the slide direction

      const nextSlide = () => {
        slideDirection.value = 'slide-left'; // Slide to the left for next image
        currentIndex.value = (currentIndex.value + 1) % images.value.length;
      };

      // Auto-slide every 7 seconds
      onMounted(() => {
        intervalId = window.setInterval(nextSlide, 7000); // Change every 7 seconds
      });

      // Clear the interval when the component unmounts
      onBeforeUnmount(() => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      });

      return {
        images,
        currentIndex,
        slideDirection,
        nextSlide,
      };

      /* current fade transitions are buggy
      const currentIndex = ref(0);
      let intervalId: number | undefined;
      const fadeTransition = ref(true); // State for triggering fade

      const nextSlide = () => {
        fadeTransition.value = false; // Trigger the fade-out effect
        setTimeout(() => {
          currentIndex.value = (currentIndex.value + 1) % images.value.length;
          fadeTransition.value = true; // Trigger the fade-in effect after the image has been changed
        }, 700); // Time matches the fade-out duration
      };

      // Auto-slide every 6 seconds
      onMounted(() => {
        intervalId = window.setInterval(nextSlide, 7000); // Change every 7 seconds
      });

      // Clear the interval when component unmounts
      onBeforeUnmount(() => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      });

      return {
        images,
        currentIndex,
        fadeTransition,
        nextSlide,
      };*/
    }
  });
</script>

<template>
  <div id="home">
    <!-- Carousel Section -->
    <div class="relative flex flex-col justify-center items-center">
      <transition name="slideDirection" mode="out-in">
        <img :src="images[currentIndex]" class="object-contain w-full h-full opacity-80" :key="currentIndex"/>
      </transition>

      <div class="absolute flex flex-col justify-center items-center lg:w-[60%] w-[90%] lg:py-30 py-10 lg:gap-8 gap-2">
        <p class="lg:text-4xl text-lg text-center font-semibold">
          Queue up with your fellow Spartans in your favorite games. Online or in-person.
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 rounded-lg font-medium lg:py-3 lg:px-6 py-2 px-4 transition ease-in duration-200">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSd08Gs1S8frwhcFCj0_DjjYtiZme6kCZ3omDIShwoL92vaikA/viewform"
            target="_blank"
            class="lg:text-2xl font-medium">
            Become a Member
          </a>
        </button>
      </div>
    </div>


    <div class="flex flex-col justify-center items-center lg:px-20 px-8">
      <div class="flex lg:flex-row flex-col justify-center items-center lg:gap-36 gap-12 lg:px-10 lg:py-40 pt-10 pb-20">
        
        <div class="xl:w-[60%] lg:w-[90%] flex flex-col justify-center items-center gap-y-4 xl:px-10">
          <h3 class="lg:text-5xl text-2xl font-semibold">
            Find Your Video Game Haven
          </h3>
          <p class="lg:text-3xl text-lg font-medium">
            We offer weekly inhouses for various multiplayer games from all genres.
          </p>
          <div class="flex justify-center items-center">
            <button class="bg-blue-500 hover:bg-blue-700 rounded-lg lg:py-3 lg:px-6 py-2 px-4 transition ease-in duration-200">
              <router-link to="/schedule" class="lg:text-3xl font-medium">
                View Schedule
              </router-link>
            </button>
          </div>
        </div>

        <div class="flex flex-wrap justify-center items-center lg:gap-12 gap-4">
          <img :src="'/icons/lol-logo.png'" class="lg:w-32 w-24 transition ease-in duration hover:scale-110"/>
          <img :src="'/icons/valorant-logo.png'" class="lg:w-32 w-24 transition ease-in duration hover:scale-110"/>
          <img :src="'/icons/roblox-logo.png'" class="lg:w-32 w-24 transition ease-in duration hover:scale-110"/>
          <img :src="'/icons/super-smash-bros-logo.png'" class="lg:w-24 w-20 m-2 transition ease-in duration hover:scale-110"/>
          <img :src="'/icons/counter-strike-2-logo.png'" class="lg:w-24 w-20 m-2 transition ease-in duration hover:scale-110"/>
          <img :src="'/icons/fortnite-logo.svg'" class="lg:w-24 w-20 m-2 transition ease-in duration hover:scale-110"/>
          <img :src="'/icons/lethal-company-logo.jpg'" class="lg:w-24 w-20 m-2 transition ease-in duration hover:scale-110"/>
          <img :src="'/icons/fall-guys-logo.png'" class="lg:w-32 w-24 transition ease-in duration hover:scale-110"/>
        </div>
      
      </div>

      <div class="flex flex-col justify-center items-center text-center gap-10 lg:w-[60%] lg:py-40 py-8">
        <h3 class="lg:text-6xl text-3xl font-semibold">
          Meet New Friends
        </h3>
        <p class="lg:text-4xl text-2xl font-medium">
          Our incredible community of gamers are always eager to meet and share new experiences together.
        </p>
        <button class="bg-blue-500 hover:bg-blue-700 rounded-lg lg:py-3 lg:px-6 py-2 px-4 transition ease-in duration-200">
          <a href="https://discord.gg/fGufmzW"
            target="_blank"
            class="lg:text-3xl font-medium">
            Join Discord Server
          </a>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* Slide left with smooth animation */
  .slide-left-enter-active, .slide-left-leave-active {
    transition: transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1) ease-in; /* Smooth cubic-bezier curve */
  }
  .slide-left-enter-from {
    transform: translateX(100%);
  }
  .slide-left-leave-to {
    transform: translateX(-100%);
  }

  /* current fade transitions are a little buggy
  .fade-enter-active, .fade-leave-active {
    transition: opacity 700ms ease-in;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }*/
</style>