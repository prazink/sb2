<template>
  <div class="inline-block">
    <div class="w-full max-w-none md:max-w-[284px] rounded-lg shadow-card relative">
      <div class="w-full relative text-white mr-2">
        <span class="absolute top-[-6.1px] left-[21px]"><span
          class="
              relative
              gradient-secondary
              text-body-sm text-center
              uppercase
              font-extrabold
              block
              w-auto
              py-1
              px-4
              rounded-b-lg
              leading-normal
              before:absolute
              before:content-['']
              before:h-[6px]
              before:w-[6px]
              before:left-[-6px]
              before:top-0
              before:bg-deep-sapphire
              before:gradient-secondary
              after:bg-deep-sapphire
              after:h-[6px]
              after:w-[8px]
              after:left-[-8px]
              after:top-0
              after:absolute
              after:content-['']
              after:rounded-t-lg
            "
        >{{ tag }}</span></span>
      </div>
      <div
        class="mt-2 pt-10 pb-8 px-6"
      >
        <p class="text-deep-sapphire text-h5 font-extrabold">
          {{ content }}
        </p>
        <div v-if="cta" class="mt-4">
          <StoryblokButton
            :link="cta.link"
            :variant="cta.type"
            :size="cta.size"
          >
            {{ cta.label }}
          </StoryblokButton>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  tag: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  cta: {
    type: Object,
    default () {
      return {}
    },
  },
})

/* Reactive props */
const tag = ref(props.tag)
const content = ref(props.content)
const cta = ref(props.cta)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  tag.value = props.tag
  content.value = props.content
  cta.value = props.cta
})
</script>
