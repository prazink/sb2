<template>
  <div
    :class="[
      'relative bg-deep-sapphire bg-opacity-20 flex items-center gap-3 shadow-card rounded-pill p-2.5',
      vertical ? 'flex-col mt-5' : 'flex-wrap'
    ]"
  >
    <div v-if="vertical" class="animate-pulse bg-deep-sapphire bg-opacity-30 w-full h-[162px] rounded" />
    <div v-else class="animate-pulse bg-deep-sapphire bg-opacity-30 aspect-square w-[70px] rounded overflow-hidden" />
    <div
      :class="[
        'flex flex-col',
        vertical ? 'w-full' : 'flex-1'
      ]"
    >
      <div class="animate-pulse bg-deep-sapphire bg-opacity-30 w-36 h-4 mb-2" />
      <div class="animate-pulse bg-deep-sapphire bg-opacity-30 w-full h-6" />
      <div v-if="!vertical" class="animate-pulse bg-deep-sapphire bg-opacity-30 w-20 h-5 mt-1" />
    </div>
    <div class="flex items-center gap-3 w-full">
      <div :class="['animate-pulse bg-deep-sapphire bg-opacity-30 h-[38px]', vertical ? 'w-32' : 'w-full']" />
      <div v-if="vertical" class="bar w-20 h-5" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  vertical: {
    type: Boolean,
    default: false,
  },
}) as { vertical: boolean }

/* Reactive props */
const vertical = ref(props.vertical)

/* Watcher */
watchEffect(() => {
  vertical.value = props.vertical
})
</script>
