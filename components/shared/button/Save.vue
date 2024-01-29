<template>
  <button
    type="button"
    :class="[
      'group inline-flex items-center gap-2.5 justify-center border border-transparent h-8 outline-none',
      'font-bold text-button-sm text-deep-sapphire',
      'hover:underline focus:underline active:underline',
      $attrs.class,
    ]"
    @click="!active ? handleAdd() : handleRemove()"
  >
    <div class="relative">
      <IconFavourite
        :class="[
          'relative z-2 w-8 h-8 stroke-cerulean transition-colors duration-200 ease-in-out',
          active ? 'fill-cerulean' : 'fill-transparent'
        ]"
      />
      <div class="absolute z-1 -inset-1 bg-grey-100 rounded-md opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 group-active:bg-grey-400 transition-[backgroundColor,opacity] duration-200 ease-in-out" />
    </div>
    <slot>
      {{ label }}
    </slot>
  </button>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import IconFavourite from '~/assets/icons/Favourite.svg?component'
import type { ButtonSaveProps } from '~/utils/types/aliases/buttons.alias'
import { ButtonSaveTypeEnum } from '~/utils/types/enums/buttons.enum'

/* Default props */
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    default: '',
  },
  active: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    required: true,
    validator (value: ButtonSaveTypeEnum) {
      return Object.values(ButtonSaveTypeEnum).includes(value)
    },
  },
}) as ButtonSaveProps

/* Reactive props */
const id = ref(props.id)
const label = ref(props.label)
const active = ref(props.active)
const type = ref(props.type)

/* Computed props */
/* const typeComputed = computed((): string => {
  return type.value[0].toUpperCase() + type.value.slice(1)
}) */

/* Methods */
const handleAdd = () => {
  // TODO
}

const handleRemove = () => {
  // TODO
}

/* Watcher */
watchEffect(() => {
  id.value = props.id
  label.value = props.label
  active.value = props.active
  type.value = props.type
})
</script>
