<template>
  <div class="bg-grey-100">
    <LayoutWrapper>
      <div
        :class="[
          'content',
          'relative py-2',
          'text-font-tundora text-[15px] leading-normal',
          'flex gap-3 items-center justify-center pr-10 lg:px-10',
        ]"
      >
        <IconWarning class="fill-deep-sapphire w-5 h-5 shrink-0" />
        <slot />
        <button
          type="button"
          :class="[
            'absolute top-0 -right-1 lg:-right-2 w-10 h-10 flex items-center justify-center',
            'text-button hover:text-button-hover focus:text-button-hover active:text-button-pressed'
          ]"
          aria-label="Close alert"
          @click="close"
        >
          <IconClose class="fill-current w-6 h-6" />
        </button>
      </div>
    </LayoutWrapper>
  </div>
</template>
<script lang="ts" setup>
import IconWarning from '../../assets/icons/Warning.svg?component'
import IconClose from '../../assets/icons/Close.svg?component'

const emit = defineEmits(['close'])

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  // #NOTE to use useSlots
  slotDefault: {
    type: String,
    default: '',
    required: false,
  },
})

function close () {
  emit('close')
}
</script>

<style lang="scss" scoped>
.content:deep(a) {
  @apply underline hover:no-underline focus-visible:no-underline;
}
</style>
