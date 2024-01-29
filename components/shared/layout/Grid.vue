<template>
  <div
    :class="[
      'grid',
      columns,
      gutters
    ]"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  columns: {
    type: String,
    default: 'grid-cols-4 md:grid-cols-12',
  },
  gutters: {
    type: String,
    default: 'gap-4 lg:gap-8 max:gap-10',
  },
})

/* Reactive props */
const columns = ref(props.columns)
const gutters = ref(props.gutters)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  columns.value = props.columns
  gutters.value = props.gutters
})
</script>
