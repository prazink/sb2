<template>
  <LayoutGrid multirow>
    <div
      class="col-span-full my-4"
    >
      <div class="flex flex-wrap shadow-card rounded-lg relative h-full rounded-2xl items-center relative px-3 md:pb-12 bg-white">
        <div class="flex flex-col w-full mt-2 px-2 md:px-12 md:pt-6">
          <h2 class="text-deep-sapphire text-h3-sm my-1 text-left lg:text-h3">
            <span class="block font-heavy">{{ heading }}</span>
            <span class="text-cerulean text-h5 font-heavy">{{ subHeading }}</span>
          </h2>
        </div>
        <div class="flex flex-wrap space-y-4 w-auto mt-2 py-10 px-2 md:px-12 md:pb-0 md:pt-6">
          <slot name="content" />
        </div>
      </div>
    </div>
  </LayoutGrid>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  subHeading: {
    type: String,
    required: true,
  },
})

/* Reactive props */
const id = ref(props.id)
const heading = ref(props.heading)
const subHeading = ref(props.subHeading)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  id.value = props.id
  heading.value = props.heading
  subHeading.value = props.subHeading
})
</script>
