<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center w-10 h-10 rounded-full transition duration-200 ease-in-out',
      buttonClass,
      { 'cursor-not-allowed': disabled }
    ]"
  >
    <slot :icon-class="iconClass">
      <IconFacebook :class="iconClass" />
    </slot>
  </component>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import { ButtonTagEnum } from '~/utils/types/enums/buttons.enum'
import IconFacebook from '~/assets/icons/Facebook.svg?component'

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
  disabled: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: '',
    required: false,
  },
})

/* Reactive props */
const tag = ref(props.tag)
const disabled = ref(props.disabled)

/* Computed Props */
/* const component = computed((): string => {
  return tag.value === '' ? ButtonTagEnum.NUXT_LINK : tag.value
}) */

const buttonClass = computed((): string => {
  return !disabled.value ? 'bg-white hover:bg-grey-400 active:bg-inactive' : 'bg-transparent'
})

const iconClass = computed((): string => {
  return !disabled.value ? 'fill-deep-sapphire' : 'fill-inactive'
})

/* Watcher */
watchEffect(() => {
  tag.value = props.tag
  disabled.value = props.disabled
})
</script>
