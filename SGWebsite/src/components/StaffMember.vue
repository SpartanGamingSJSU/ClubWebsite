<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'StaffMember',
        props: {
            staffName: String,
            photo: String,
            position: String,
        },
        setup() {
            const onImageError = (event: Event) => {
                const target = event.target as HTMLImageElement;
                target.src = './Officers/DefaultOfficer.png'
            };

            return {
                onImageError,
            };
        }
    });
</script>

<template>
    <div class="border-2 flex justify-center items-center gap-8 py-3 px-6 rounded-2xl transition ease-in duration-200 hover:scale-105">
        <img :src="photo" width="100" height="100" class="rounded-full" @error="onImageError"/>
        <div>
            <h1 class="font-semibold text-2xl">
                {{ staffName }}
            </h1>
            <p class="font-medium italic text-lg">
                {{ position }}
            </p>
        </div>
    </div>
</template>