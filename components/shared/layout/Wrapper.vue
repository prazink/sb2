<template>
  <div :class="['max:container w-full mx-auto', padding]">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  padding: {
    type: String,
    default: 'px-4 md:px-8 lg:px-10',
  },
})

/* Reactive props */
const padding = ref(props.padding)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  padding.value = props.padding
})
</script>
