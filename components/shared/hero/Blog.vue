<template>
  <div class="max-w-[1440px] mx-auto" :class="[(hasDetails) ? 'lg:px-6' : '']">
    <div :class="containerClasses">
      <template v-if="isForListing">
        <LazyLayoutWrapper padding="md:px-8 lg:px-10">
          <LazyLayoutGrid>
            <div class="col-span-12 aspect-square w-full md:aspect-auto md:absolute md:right-0 md:top-0 md:w-5/12 md:h-full md:z-1 lg:rounded-tr-3xl lg:rounded-br-3xl md:overflow-hidden">
              <NuxtImg
                format="webp"
                :src="image.filename"
                :alt="image.alt"
                :class="[
                  'w-full sm:w-auto h-full object-cover',
                ]"
                loading="lazy"
              />
            </div>
            <div class="col-span-12 md:col-span-6 py-5 px-4 md:py-24 md:px-0">
              <h1 class="text-h1-sm lg:text-h1 font-heavy">
                {{ heading }}
              </h1>
              <h2 class="text-h5-sm lg:text-h5 mt-2.5">
                {{ description }}
              </h2>
              <slot name="extras" />
            </div>
          </LazyLayoutGrid>
        </LazyLayoutWrapper>
      </template>
      <template v-else-if="hasDetails">
        <div class="aspect-blog lg:w-7/12 bg-grey-100">
          <NuxtImg
            v-if="image && image.filename"
            format="webp"
            width="770"
            :src="image.filename"
            :alt="image.alt"
            :class="[
              'w-full h-full object-cover',
            ]"
            loading="lazy"
          />
        </div>
        <div class="flex-1 flex flex-col justify-center gradient-secondary text-white pt-5 pb-7 px-4 lg:p-10 xl:p-16">
          <h1 class="text-h2-sm lg:text-h2 font-heavy">
            {{ heading }}
          </h1>
          <h2 v-if="description" class="text-h5-sm pr-4 lg:text-h5 mt-2.5">
            {{ description }}
          </h2>
          <slot name="extras" />
        </div>
      </template>
      <template v-else>
        <div class="grid grid-cols-4 md:grid-cols-12 gap-x-2">
          <div class="col-span-12 aspect-hero w-full relative overflow-hidden py-24 h-auto lg:h-80 lg:aspect-auto lg:z-1 lg:rounded-3xl lg:min-h-[380px]">
            <div class="absolute top-0 right-0 block w-full h-full">
              <NuxtImg
                format="webp"
                :src="image.filename"
                :alt="image.alt"
                :class="[
                  'w-full h-full object-cover',
                ]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  isForListing: {
    type: Boolean,
    default: false,
  },
  hasDetails: {
    type: Boolean,
    default: false,
  },
})

/* Reactive props */
const heading = ref(props.heading)
const description = ref(props.description)
const image = ref(props.image)
const hasDetails = ref(props.hasDetails)
const isForListing = ref(props.isForListing)

/* Computed props */
const containerClasses = computed((): string => {
  let result: string = 'relative bg-white text-white lg:rounded-tl-3xl'

  if (isForListing.value && isForListing.value === true) {
    result = 'relative gradient-secondary text-white lg:rounded-3xl lg:min-h-[480px]'
  } else if (hasDetails.value && hasDetails.value === true) {
    result = 'flex flex-col lg:flex-row-reverse lg:items-stretch lg:gap-1 lg:rounded-3xl lg:overflow-hidden'
  }

  return result
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  description.value = props.description
  image.value = props.image
  hasDetails.value = props.hasDetails
})
</script>
