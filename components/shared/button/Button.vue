<template>
  <component
    :is="tag"
    :class="[
      'inline-flex items-center justify-center rounded-lg transition-colors duration-200 ease-in-out',
      buttonSize,
      buttonStyle,
      disabled ? buttonDisabledStyle : buttonEnabledStyle,
      { 'cursor-not-allowed': disabled },
      {'button-animation': isAnimated },
      'print:hidden',
    ]"
    :disabled="disabled"
    :to="tag === 'nuxt-link' ? `/${to}` : null"
    :target="target"
    :data-identifier="dataIdentifierComputed"
    @click="handleOnClick"
  >
    <slot>Button</slot>
    <slot name="icon" :icon-class="iconClass" />
  </component>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect, useSlots } from 'vue'
import { ButtonVariantEnum, ButtonSizeEnum, ButtonTagEnum } from '../../../utils/types/enums/buttons.enum'
import type { ButtonDefaultProps, ButtonEnabledStyleProps } from '../../../utils/types/aliases/buttons.alias'

/* Emit handlers */
const emit = defineEmits(['click'])

/* Slots */
const slots = useSlots()

/* Default props */
const props = defineProps({
  tag: {
    type: String,
    required: false,
    default: ButtonTagEnum.BUTTON,
    validator: (tag: ButtonTagEnum) => {
      return Object.values(ButtonTagEnum).includes(tag)
    },
  },
  inverted: {
    type: Boolean,
    default: false,
  },
  bold: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  variant: {
    type: String,
    default: ButtonVariantEnum.PRIMARY,
    validator: (value: ButtonVariantEnum) => {
      return Object.values(ButtonVariantEnum).includes(value)
    },
  },
  size: {
    type: String,
    default: 'medium',
    validator: (value: ButtonSizeEnum) => {
      return Object.values(ButtonSizeEnum).includes(value)
    },
  },
  to: {
    types: [String, null],
    default: null,
  },
  dataIdentifier: {
    type: String,
    default: '',
  },
  isAnimated: {
    type: Boolean,
    default: false,
  },
  target: {
    type: String,
    default: null,
  },
}) as ButtonDefaultProps

/* Reactive props */
const tag = ref(props.tag)
const inverted = ref(props.inverted)
const bold = ref(props.bold)
const disabled = ref(props.disabled)
const variant = ref(props.variant)
const size = ref(props.size)
const to = ref(props.to)
const dataIdentifier = ref(props.dataIdentifier)
const isAnimated = ref(props.isAnimated)
const target = ref(props.target)

/* Computed props */
/* const component = computed((): string => {
  const result = tag.value === '' ? 'nuxt-link' : tag.value
  return result
}) */

const hasIcon = computed((): boolean => {
  return !!slots.icon // #Notes $scopedSlots.icon replacement
})

const buttonStyle = computed((): string => {
  let result: string = ''
  switch (variant.value) {
    case ButtonVariantEnum.SECONDARY:
      result = 'border-2'
      break
    case ButtonVariantEnum.TERTIARY:
      result = 'underline'
      break
    case ButtonVariantEnum.CERULEAN:
    case ButtonVariantEnum.GREEN:
      result = 'border-none'
      break
    default:
      result = inverted.value ? 'text-deep-sapphire' : 'text-white'
      break
  }

  return result
})

const buttonEnabledStyle = computed((): ButtonEnabledStyleProps => {
  const classes: ButtonEnabledStyleProps = {
    'font-bold': bold.value,
    'hover:underline focus:underline active:underline': true,
  }

  switch (variant.value) {
    case ButtonVariantEnum.SECONDARY:
      classes['text-white'] = inverted.value
      classes['border-white'] = inverted.value
      classes['text-deep-sapphire'] = !inverted.value
      classes['border-deep-sapphire'] = !inverted.value
      classes['active:bg-white active:bg-opacity-10'] = inverted.value
      break
    case ButtonVariantEnum.TERTIARY:
      classes['text-button'] = !inverted.value
      classes['text-button-hover'] = !inverted.value
      classes['focus:text-button-hover'] = !inverted.value
      classes['active:text-button-pressed'] = !inverted.value
      break
    case ButtonVariantEnum.CERULEAN:
      classes['bg-cerulean'] = inverted.value ? true : !inverted.value
      classes['text-white'] = inverted.value ? true : !inverted.value
      classes['border-button'] = inverted.value ? true : !inverted.value
      classes['active:bg-cerulean active:bg-opacity-10'] = inverted.value ? true : !inverted.value
      break
    case ButtonVariantEnum.GREEN:
      classes['gradient-green'] = !inverted.value
      classes['text-white'] = !inverted.value
      classes['border-button'] = !inverted.value
      classes['active:gradient-green active:bg-opacity-10'] = !inverted.value
      break
    default:
      classes['bg-white hover:bg-grey-300 focus:bg-grey-300 active:bg-grey-400'] = inverted.value
      classes['bg-button hover:bg-button-hover focus:bg-button-hover active:bg-button-pressed'] = !inverted.value
      break
  }

  return classes
})

const buttonDisabledStyle = computed((): string => {
  let result: string = 'bg-inactive'

  if (variant.value === ButtonVariantEnum.SECONDARY) {
    result = 'text-inactive border-inactive'
  } else if (variant.value === ButtonVariantEnum.TERTIARY) {
    result = 'text-inactive'
  }

  return result
})

const buttonSize = computed((): string[] => {
  const computedSize = size.value || ButtonSizeEnum.MEDIUM
  const sizeClass: string[] = []

  switch (computedSize) {
    case ButtonSizeEnum.SMALL: // size:small
      // default for all variants
      sizeClass.push('text-button-sm')

      if (variant.value === ButtonVariantEnum.TERTIARY) { // variant: tertiary
        sizeClass.push('p-0')
      } else {
        // variant: primary + secondary
        sizeClass.push('h-[38px] py-2')
        sizeClass.push(hasIcon.value ? 'pl-4 pr-2' : 'px-4')
      }
      break
    case ButtonSizeEnum.MEDIUM:
      // default for all variants
      sizeClass.push('text-button-md')

      if (variant.value === ButtonVariantEnum.TERTIARY) { // variant: tertiary
        sizeClass.push('p-0')
      } else {
        // variant: primary + secondary
        sizeClass.push('h-12 py-2.5')
        sizeClass.push(hasIcon.value ? 'pl-5 pr-3' : 'px-5')
      }
      break
  }

  return sizeClass
})

const iconClass = computed((): string => {
  return 'fill-current w-6 h-6'
})

const dataIdentifierComputed = computed((): string | null => {
  if (dataIdentifier.value) {
    return `hpt-${dataIdentifier.value.toLowerCase().replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, '-')}`
  }

  return null
})

/* Methods */
const handleOnClick = () => {
  emit('click')
}

/* Watcher */
watchEffect(() => {
  tag.value = props.tag
  inverted.value = props.inverted
  bold.value = props.bold
  disabled.value = props.disabled
  variant.value = props.variant
  size.value = props.size
  to.value = props.to
  dataIdentifier.value = props.dataIdentifier
  isAnimated.value = props.isAnimated
  target.value = props.target
})
</script>
<style lang="scss" scoped>
.button-animation {
  //animation-name: borderPulse;
  //animation-duration: 2s;
  animation-name: de-text-pop-up;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes borderPulse {
  0% {
    box-shadow: inset 0px 0px 0px 5px rgba(255, 255, 255,.4), 0px 0px 0px 0px rgba(255,255,255,1);
  }
  50% {
    box-shadow: inset 0px 0px 0px 3px rgba(117, 117, 255,.2), 0px 0px 0px 10px rgba(255,255,255,0);
  }
  100% {
    box-shadow: inset 0px 0px 0px 3px rgba(117, 117, 255,.2), 0px 0px 0px 10px rgba(255,255,255,0);
  }
}

@keyframes de-text-pop-up {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    box-shadow: none;
  }
  50% {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    //box-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc, 0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 30px 20px rgba(0, 0, 0, 0.4);
    box-shadow: 0 30px 20px rgba(0, 0, 0, 0.3);
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    box-shadow: none;
  }
}
</style>
