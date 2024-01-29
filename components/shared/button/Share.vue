<template>
  <component
    :is="tag"
    :class="[
      'relative group',
      'inline-flex items-center justify-center w-6 h-6 m-1 transition-colors duration-200 ease-in-out',
      'text-deep-sapphire hover:text-button-hover active:text-button-pressed',
    ]"
    :href="href"
  >
    <slot :icon-class="iconClass" />
    <div class="absolute z-negative inset-0 bg-grey-100 rounded-md opacity-0 group-hover:opacity-100 group-focus:opacity-100 group-active:bg-grey-400 transition-[backgroundColor,opacity] duration-200 ease-in-out" />
  </component>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import { ButtonTagEnum } from '~/utils/types/enums/buttons.enum'

/* Default props */
const props = defineProps({
  tag: {
    type: String,
    validator (value: ButtonTagEnum) {
      // The value must match one of these strings
      return Object.values(ButtonTagEnum).includes(value)
    },
    default: ButtonTagEnum.BUTTON,
  },
  href: {
    type: String,
    default: '',
    required: false,
  },
})

/* Reactive props */
const tag = ref(props.tag)
const href = ref(props.href)

/* Computed Props */
/* const component = computed((): string => {
  return tag.value === '' ? ButtonTagEnum.BUTTON : tag.value
}) */

const iconClass = computed((): string => {
  return 'fill-current'
})

/* Methods */

/* Watcher */
watchEffect(() => {
  tag.value = props.tag
  href.value = props.href
})
</script>
