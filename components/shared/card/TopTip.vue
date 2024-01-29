<template>
  <div class="w-full mx-auto">
    <div v-if="isShowHeading" class="flex mt-8">
      <!-- eslint-disable vue/no-v-html -->
      <h5 class="font-heavy text-deep-sapphire mb-4 text-h4-sm lg:text-h4 uppercase" v-html="heading" />
      <!--eslint-enable-->
    </div>
    <div class="content text-h5-sm text-deep-sapphire font-normal sm:text-h5">
      <span class="inline-block pr-4">
        <IconQuotationTop />
      </span>
      <slot>{{ content }}</slot>
      <span class="inline-block pl-4">
        <IconQuotationBottom />
      </span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import IconQuotationBottom from '~/assets/icons/QuotationBottom.svg?component'
import IconQuotationTop from '~/assets/icons/QuotationTop.svg?component'

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    default: '',
  },
})

/* Reactive props */
const heading = ref(props.heading)
const content = ref(props.content)

/* Computed props */
const isShowHeading = computed((): boolean => {
  return heading.value !== ''
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  content.value = props.content
})
</script>
