<template>
  <div>
    <div class="flex flex-col lg:flex-row lg:items-center">
      <div class="relative w-16 aspect-square border-2 border-solid border-white rounded-md overflow-hidden mb-6 lg:mb-0 lg:mr-6">
        <NuxtImg
          format="webp"
          width="64"
          :src="image.filename"
          :alt="image.alt"
          class="absolute z-1 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="flex flex-col">
        <span class="font-heavy text-xl leading-normal text-deep-sapphire">{{ name }}</span>
        <span class="text-body text-font-tundora mt-1">{{ description }}</span>
      </div>
    </div>
    <div v-if="hasContent" class="mt-4 lg:mt-5 text-body-sm text-font-gray">
      <slot />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, useSlots, watchEffect } from 'vue'
import type { AuthorProps } from '~/utils/types/aliases/author.alias'

const slots = useSlots()

/* Default props */
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  // #NOTE to use useSlots
  slotDefault: {
    type: String,
    default: '',
    required: false,
  },
}) as AuthorProps

/* Reactive props */
const name = ref(props.name)
const description = ref(props.description)
const image = ref(props.image)
const slotDefault = ref(props.slotDefault)

/* Computed props */
const hasContent = computed((): boolean => {
  return (slots !== null && (!!slots.default)) || (!!slotDefault.value.length)
})

/* Watcher */
watchEffect(() => {
  name.value = props.name
  description.value = props.description
  image.value = props.image
  slotDefault.value = props.slotDefault
})
</script>
