<template>
  <div class="shadow-card rounded-lg pl-12 pr-3 py-3 relative h-full lg:py-4">
    <IconLibertyBullet class="fill-cerulean w-5 h-5 absolute left-3 top-4" />
    <!-- eslint-disable vue/no-v-html -->
    <p v-html="text" />
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import IconLibertyBullet from '~/assets/icons/LibertyBullet.svg?component'

/* Default props */
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
})

/* Reactive props */
const text = ref(props.text)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  text.value = props.text
})
</script>
