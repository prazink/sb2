<template>
  <component
    :is="tag"
    :class="[
      'relative inline-flex items-center border overflow-hidden hover:underline transition-colors will-change-colors duration-200 ease-in-out',
      'whitespace-nowrap shrink-0',
      variant === 'primary' && 'py-2 px-4 h-[38px] rounded-3xl text-button-sm',
      (variant === 'primary' && !isActive) && 'bg-white text-deep-sapphire border-cerulean',
      (variant === 'primary' && isActive) && 'text-white border-transparent',
      variant === 'secondary' && 'py-1 px-3 h-[28px] rounded-full text-sm leading-tighter border-transparent',
      (variant === 'secondary' && !isActive) && 'bg-grey-100 text-deep-sapphire hover:border-cerulean',
      (variant === 'secondary' && isActive) && 'text-white',
      (variant === 'tertiary') && 'bg-white text-deep-sapphire border-cerulean',
      variant === 'tertiary' && 'py-1 px-3 h-[28px] rounded-full text-sm leading-tighter',
      tag === 'span' && 'pointer-events-none'
    ]"
    :to="tag === 'nuxt-link' ? `${to}` : null"
    :href="tag === 'a' ? `${to}` : null"
  >
    <div
      :class="[
        'absolute inset-0 gradient-secondary pointer-events-none transition-opacity will-change-opacity duration-200 ease-in-out overflow-hidden',
        isActive ? 'opacity-100' : 'opacity-0',
        variant === 'primary' && 'rounded-3xl',
        variant === 'secondary' && 'rounded-8',
      ]"
    />
    <span class="relative z-1">
      <slot>{{ label }}</slot>
    </span>
  </component>
</template>
<script lang="ts" setup>
import { ref, watchEffect, onMounted } from 'vue'
import { ButtonTagEnum, ButtonVariantEnum } from '~/utils/types/enums/buttons.enum'

/* Default props */
const props = defineProps({
  tag: {
    type: String,
    validator (value: ButtonTagEnum) {
      // The value must match one of these strings
      return Object.values(ButtonTagEnum).concat('span' as any).includes(value)
    },
    default: ButtonTagEnum.BUTTON,
  },
  label: {
    type: String,
    default: 'All',
  },
  variant: {
    type: String,
    default: 'primary',
    validator (value: ButtonVariantEnum) {
      return Object.values(ButtonVariantEnum).includes(value)
    },
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    default: null,
  },
})

/* Reactive props */
const tag = ref(props.tag)
const label = ref(props.label)
const variant = ref(props.variant)
const isActive = ref(props.isActive)
const to = ref(props.to)

/* Computed props */

/* Methods */
const updateActiveState = () => {
  if (tag.value && to.value && to.value.includes('#')) {
    const currentUrl = window.location.href
    const currentAnchor = currentUrl.split('#')[1]

    isActive.value = currentAnchor === to.value.split('#')[1]
  }
}

/* Watcher */
watchEffect(() => {
  tag.value = props.tag
  label.value = props.label
  variant.value = props.variant
  isActive.value = props.isActive
  to.value = props.to
})

/* Events */
onMounted(() => {
  updateActiveState()
})
</script>
