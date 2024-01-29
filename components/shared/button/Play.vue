<template>
  <button
    type="button"
    aria-label="Play video"
    class="inline-flex items-center justify-center rounded-full bg-white hover:bg-grey-100 active:bg-grey-400 text-deep-sapphire shadow-card hover:shadow-card-hover transition-[background-color,box-shadow] will-change-[background-color,box-shadow] duration-200 ease-in-out"
  >
    <slot :icon-class="iconClass">
      <IconPlay :class="iconClass" />
    </slot>
  </button>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import IconPlay from '~/assets/icons/Play.svg?component'

/* Default props */
const props = defineProps({
  iconSize: {
    type: String,
    default: 'w-full h-full',
  },
  slotDefault: {
    type: String,
    default: '',
    required: false,
  },
  enableLoader: {
    type: Boolean,
    default: false,
    required: false,
  },
})

/* Reactive props */
const iconSize = ref(props.iconSize)

/* Computed props */
const iconClass = computed((): string => {
  return `fill-current ${iconSize.value}`
})

/* Watcher */
watchEffect(() => {
  iconSize.value = props.iconSize
})

</script>
