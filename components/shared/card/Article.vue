<template>
  <div
    class="card w-full flex flex-col md:flex-row md:flex-nowrap md:gap-x-4 text-base leading-normal shadow-card rounded-pill p-4 md:px-6"
  >
    <span v-if="date" class="font-heavy text-deep-sapphire">{{ date }}</span>
    <span class="text-font-gray">
      <component
        :is="tag"
        :link="tag === 'storyblok-link' ? link : null"
        :to="tag === 'nuxt-link' ? link : null"
        :href="tag === 'a' ? link : null"
        :target="tag === 'a' ? target : null"
      >
        <slot />
      </component>
    </span>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  link: {
    type: [Object, String],
    default () {
      return null
    },
  },
  date: {
    type: String,
    default: '',
  },
  target: {
    type: String,
    default: null,
  },
  slotDefault: {
    type: String,
    default: '',
    required: false,
  },
})

/* Reactive props */
const link = ref(props.link)
const date = ref(props.date)
const target = ref(props.target)

/* Computed props */
const tag = computed((): string => {
  let result: string = 'nuxt-link'

  if (!link.value) {
    result = 'div'
  }

  if (typeof link.value === 'object') {
    result = 'storyblok-link'
  }

  if (typeof link.value === 'string' && link.value.startsWith('http')) {
    result = 'a'
  }

  return result
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  link.value = props.link
  date.value = props.date
  target.value = props.target
})
</script>

<style lang="scss" scoped>
.card ::v-deep(a) {
  @apply underline hover:no-underline hover:text-persian-blue focus-visible:no-underline;
  @apply transition-colors duration-200 ease-in-out;
}
</style>
