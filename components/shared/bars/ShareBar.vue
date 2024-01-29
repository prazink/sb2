<template>
  <div
    class="flex flex-col items-center max-w-[65px]"
  >
    <span class="text-deep-sapphire text-body-sm mb-2.5">Share:</span>
    <ButtonShare
      v-if="facebookUrl"
      tag="a"
      :href="facebookUrl"
      target="_blank"
    >
      <template #default="{ iconClass }">
        <IconFacebook :class="iconClass" />
      </template>
    </ButtonShare>
    <ButtonShare
      v-if="twitterUrl"
      tag="a"
      :href="twitterUrl"
      class="mt-3"
      target="_blank"
    >
      <template #default="{ iconClass }">
        <IconTwitter :class="iconClass" />
      </template>
    </ButtonShare>
    <ButtonShare
      v-if="linkedInUrl"
      tag="a"
      :href="linkedInUrl"
      class="mt-3"
      target="_blank"
    >
      <template #default="{ iconClass }">
        <IconLinkedIn :class="iconClass" />
      </template>
    </ButtonShare>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import IconFacebook from '~/assets/icons/ShareFacebook.svg?component'
import IconTwitter from '~/assets/icons/ShareTwitter.svg?component'
import IconLinkedIn from '~/assets/icons/ShareLinkedIn.svg?component'

/* Default props */
const props = defineProps({
  pageUrl: {
    type: String,
    required: true,
  },
  customFacebookUrl: {
    type: String,
    default: null,
  },
  customTwitterUrl: {
    type: String,
    default: null,
  },
  customLinkedInUrl: {
    type: String,
    default: null,
  },
})

/* Reactive props */
const pageUrl = ref(props.pageUrl)
const customFacebookUrl = ref(props.customFacebookUrl)
const customTwitterUrl = ref(props.customTwitterUrl)
const customLinkedInUrl = ref(props.customLinkedInUrl)

/* Computed props */
const facebookUrl = computed((): string => {
  return customFacebookUrl.value !== null
    ? customFacebookUrl.value
    : `https://www.facebook.com/sharer.php?u=${pageUrl.value}`
})

const twitterUrl = computed((): string => {
  return customTwitterUrl.value !== null
    ? customTwitterUrl.value
    : `https://twitter.com/intent/tweet?url=${pageUrl.value}`
})

const linkedInUrl = computed((): string => {
  return customLinkedInUrl.value !== null
    ? customLinkedInUrl.value
    : `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl.value}`
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  pageUrl.value = props.pageUrl
  customFacebookUrl.value = props.customFacebookUrl
  customTwitterUrl.value = props.customTwitterUrl
  customLinkedInUrl.value = props.customLinkedInUrl
})
</script>
