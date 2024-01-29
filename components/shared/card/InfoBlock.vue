<template>
  <div
    class="h-auto lg:h-full pt-5 px-5 pb-6 lg:pt-6 lg:px-7 lg:pb-7 mb-7 lg:mb-0 rounded-xl bg-white shadow-card flex flex-col justify-between"
  >
    <div class="mb-8">
      <NuxtImg
        v-if="image.filename"
        format="webp"
        :src="image.filename"
        :alt="image.alt"
        :class="{ 'block m-auto max-w-[250px]': imageFull, 'max-w-[87px]': !imageFull, 'mb-6': !imageFull }"
        loading="lazy"
      />
      <h3 class="text-deep-sapphire text-h5-sm font-heavy lg:text-h5 mb-4">
        {{ heading }}
      </h3>
      <p class="text-body-sm lg:text-body">
        {{ content }}
      </p>
    </div>
    <div class="flex flex-row justify-start gap-6">
      <StoryblokButton
        v-for="cta in ctas"
        :key="cta._uid"
        :link="cta.link"
        :variant="cta.type"
        :size="cta.size"
        :data-identifier="cta.dataIdentifier"
      >
        {{ cta.label }}
      </StoryblokButton>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import type { CardInfoBlockProps } from '~/utils/types/aliases/info-block.alias'

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  ctas: {
    type: Array,
    default () {
      return null
    },
  },
  image: {
    type: Object,
    default: null,
  },
  imageCenter: {
    type: Boolean,
    default: false,
  },
  imageFull: {
    type: Boolean,
    default: false,
  },
}) as CardInfoBlockProps

/* Reactive props */
const heading = ref(props.heading)
const content = ref(props.content)
const ctas = ref(props.ctas)
const image = ref(props.image)
const imageCenter = ref(props.imageCenter)
const imageFull = ref(props.imageFull)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  content.value = props.content
  ctas.value = props.ctas
  image.value = props.image
  imageCenter.value = props.imageCenter
  imageFull.value = props.imageFull
})
</script>
