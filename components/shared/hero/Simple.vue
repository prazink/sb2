<template>
  <div class="overflow-hidden pb-16 -mb-16">
    <div class="max-w-[1440px] mx-auto lg:px-6 relative">
      <div class="relative overflow-hidden lg:rounded-3xl gradient-secondary text-white flex items-center min-h-[160px] lg:min-h-[288px]">
        <LayoutGrid class="w-full py-10 lg:py-20">
          <div v-if="heading || subHeading" class="col-span-full lg:col-span-8 lg:col-start-3 text-center">
            <h1 v-if="heading" class="font-heavy text-h1-sm lg:text-h1">
              {{ heading }}
            </h1>
            <h2 v-if="subHeading" class="px-3 text-h5-sm lg:text-h5 mt-2 lg:mt-2.5">
              {{ subHeading }}
            </h2>
          </div>
          <slot />
        </LayoutGrid>
      </div>
      <img
        ref="top-left"
        src="/img/cloud.png"
        class="absolute -left-44 top-0 mt-5 cloud-animation z-10 hidden lg:block"
        alt=""
        loading="lazy"
        width="297"
        height="180"
      >
      <img
        ref="bottom-right"
        src="/img/cloud.png"
        class="absolute -right-28 bottom-0 cloud-animation z-10 hidden lg:block"
        alt=""
        loading="lazy"
        width="297"
        height="180"
      >
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    default: '',
  },
  subHeading: {
    type: String,
    default: '',
  },
})

/* Reactive props */
const heading = ref(props.heading)
const subHeading = ref(props.subHeading)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  subHeading.value = props.subHeading
})
</script>
