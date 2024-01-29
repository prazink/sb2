<template>
  <div
    :class="[
      'animate-pulse flex h-full bg-white shadow-card rounded-2xl',
      isHorizontal && !isExpanded ? 'flex-row' : 'flex-col',
    ]"
  >
    <div
      :class="[
        'relative aspect-video',
        isHorizontal ? 'w-5/12' : 'w-full'
      ]"
    >
      <div class="absolute p-2 z-1 w-full h-full">
        <div
          :class="[
            'bg-grey-200 w-full h-full rounded-xl',
            !isHorizontal && 'pb-0'
          ]"
        />
      </div>
    </div>
    <div
      :class="[
        'flex flex-col flex-1',
        isExpanded ? 'py-4 px-3 lg:px-4 lg:pt-4 lg:pb-6' : 'px-5 pt-5 pb-8 lg:pt-6 lg:pb-8 lg:px-8'
      ]"
    >
      <div class="bg-grey-200 w-full h-8" />
      <div class="bg-grey-200 w-4/5 h-7 mt-1" />
      <div class="bg-grey-200 w-2/5 h-7 mt-1" />
      <div v-if="isExpanded" class="flex items-center mt-4 lg:mt-8">
        <div class="relative w-10 aspect-square rounded-full overflow-hidden mr-4 bg-grey-200" />
        <div class="flex flex-col w-full">
          <div class="bg-grey-200 w-4/5 h-5" />
          <div class="bg-grey-200 w-3/5 h-5 mt-1" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  isExpanded: {
    type: Boolean,
    default: false,
  },
  isHorizontal: {
    type: Boolean,
    default: false,
  },
})

/* Reactive props */
const isExpanded = ref(props.isExpanded)
const isHorizontal = ref(props.isHorizontal)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  isExpanded.value = props.isExpanded
  isHorizontal.value = props.isHorizontal
})
</script>
