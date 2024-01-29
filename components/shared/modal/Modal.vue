<template>
  <transition name="fade" appear>
    <div class="fixed inset-0 flex flex-row justify-center items-center bg-deep-sapphire bg-opacity-90 cursor-pointer z-50" @click="handleOnClose">
      <div :class="['relative max-w-[1000px] max-h-full rounded-xl bg-white text-body text-font-gray cursor-auto', modalPadding, modalClasses]" @click.stop>
        <div class="relative">
          <slot name="heading">
            <h3 class="font-heavy text-h5-sm lg:text-h5 text-deep-sapphire mb-5">
              {{ heading }}
            </h3>
          </slot>
          <slot>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid illum nesciunt ipsum provident, expedita molestiae officiis id nisi, soluta eveniet odit deleniti porro a saepe molestias? Quo, consequatur non! Qui?</p>
          </slot>

          <div class="absolute top-0 right-0">
            <SharedButtonDefault
              tag="button"
              variant="tertiary"
              size="medium"
              type="button"
              @click="handleOnClose"
            >
              {{ closeCtaLabel }}
              <template #icon="{ iconClass }">
                <IconClose :class="iconClass" />
              </template>
            </SharedButtonDefault>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import IconClose from '~/assets/icons/Close.svg?component'

/* Emit handlers */
const emit = defineEmits(['modalClose'])

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    default: '',
  },
  closeCtaLabel: {
    type: String,
    default: '',
  },
  modalClasses: {
    type: String,
    required: false,
    default: '',
  },
  modalPadding: {
    type: String,
    required: false,
    default () {
      return 'py-7 px-7'
    },
  },
  slotDefault: {
    type: String,
    required: false,
    default: '',
  },
})

/* Reactive props */
const heading = ref(props.heading)
const closeCtaLabel = ref(props.closeCtaLabel)
const modalClasses = ref(props.modalClasses)
const modalPadding = ref(props.modalPadding)

/* Computed props */

/* Method handlers */
const handleOnClose = () => {
  emit('modalClose')
}

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  closeCtaLabel.value = props.closeCtaLabel
  modalClasses.value = props.modalClasses
  modalPadding.value = props.modalPadding
})
</script>
