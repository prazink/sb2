<template>
  <component
    :is="tag"
    :class="[
      sizeClasses
    ]"
    class="font-nexa"
  >
    {{ text ? text : "Empty" }}
  </component>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import { HeadingEnum } from '~/utils/types/enums/headings.enum'

/* Default props */
const props = defineProps({
  tag: {
    type: String,
    default: HeadingEnum.H1,
    validator (value: HeadingEnum) {
      return Object.values(HeadingEnum).includes(value)
    },
  },
  size: {
    type: String,
    default: HeadingEnum.H1,
    validator (value: HeadingEnum) {
      return Object.values(HeadingEnum).includes(value)
    },
  },
  text: {
    type: String,
    required: true,
    default: 'Empty',
  },
})

/* Reactive props */
const tag = ref(props.tag)
const size = ref(props.size)
const text = ref(props.text)

/* Computed props */
const sizeClasses = computed((): string => {
  return `font-heavy text-${size.value}-sm md:text-${size.value}`
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  tag.value = props.tag
  size.value = props.size
  text.value = props.text
})
</script>
