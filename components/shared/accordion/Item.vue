<template>
  <li v-auto-animate>
    <div @click="toggle">
      <h4 class="text-body md:text-h5 font-bold text-font-gray">
        <button
          type="button"
          class="relative pr-8 py-3 px-0 sm:py-5 sm:pl-5 w-full font-medium text-gray-500 text-left"
        >
          {{ heading }}
          <IconMinus
            v-if="isOpen"
            class="w-5 fill-deep-sapphire absolute right-0 top-1/2 -translate-y-1/2"
          />
          <IconPlus
            v-else
            class="w-5 fill-deep-sapphire absolute right-0 top-1/2 -translate-y-1/2"
          />
        </button>
      </h4>
    </div>
    <div v-show="isOpen" class="description overflow-hidden">
      <div class="sm:px-5 sm:pb-5">
        <slot name="body" />
      </div>
    </div>
  </li>
</template>

<script setup>
import IconPlus from '../../../assets/icons/Plus.svg?component'
import IconMinus from '../../../assets/icons/Minus.svg?component'
import { vAutoAnimate } from '@formkit/auto-animate'

// import { inject, ref, onUnmounted } from 'vue'

const Accordion = inject('Accordion')

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
})

const index = ref(Accordion ? Accordion.count++ : 0)
const isOpenInternal = ref(false)

const isOpen = computed(() => {
  return Accordion
    ? Accordion.count > 0 && Accordion.current === index.value
    : isOpenInternal.value
})

onUnmounted(() => {
  if (Accordion) {
    Accordion.count--
  }
})

function toggle() {
  if (Accordion) {
    Accordion.current = isOpen.value ? null : index.value
  }
  isOpenInternal.value = !isOpenInternal.value
}
</script>
