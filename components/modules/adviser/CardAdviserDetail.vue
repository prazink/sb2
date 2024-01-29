<template>
  <div class="py-10 lg:pt-0 lg:pb-10 lg:pl-10 max:px-10">
    <div class="w-full sm:max-w-[493px] rounded overflow-hidden shadow-card mx-auto">
      <div class="gradient-mask-bottom">
        <slot name="extras" />
      </div>
      <div class="px-6 py-4">
        <!-- eslint-disable vue/no-v-html -->
        <div class="text-black text-body-sm mb-2" v-html="appendMortgageBrokerLink" />
        <!--eslint-enable-->
        <p v-if="email">
          <a
            :href="`mailto:${email}`"
            data-identifier="hpt-email"
            class="text-body-sm text-deep-sapphire font-bold underline hover:no-underline mb-4 sm:text-body"
          >
            {{ email }} <br>
          </a>
        </p>
        <p v-if="phone">
          <span v-if="!showActivated" data-identifier="hpt-phone-cts">{{ phone.slice(0, 8) }}...</span>
          <span v-if="!showActivated" class="text-body-sm font-bold underline text-deep-sapphire font-normal hover:no-underline cursor-pointer" @click="handleOnActivateShow">
            Show
          </span>
          <a
            :href="`tel:${phone}`"
            data-identifier="hpt-phone"
            class="text-body-sm text-deep-sapphire font-normal"
            @click="handleOnClickPhone"
          >
            <span v-if="showActivated">{{ phone }}</span>
          </a>
        </p>
      </div>
      <div v-if="showSocial" class="px-6 pt-0 pb-2">
        <p class="font-bold text-[14px] mb-3">
          Follow {{ name }}:
        </p>
        <ButtonShare v-if="facebookUrl !== null" tag="a" :href="facebookUrl" target="_blank">
          <template #default="{ iconClass }">
            <IconShareFacebook :class="iconClass" />
          </template>
        </ButtonShare>
        <ButtonShare v-if="linkedinUrl !== null" tag="a" :href="linkedinUrl" target="_blank">
          <template #default="{ iconClass }">
            <IconShareLinkedIn :class="iconClass" />
          </template>
        </ButtonShare>
        <ButtonShare v-if="twitterUrl !== null" tag="a" :href="twitterUrl" target="_blank">
          <template #default="{ iconClass }">
            <IconShareInstagram :class="iconClass" />
          </template>
        </ButtonShare>
      </div>
      <div class="pl-6 pr-4 pt-4 md:pr-8 ">
        <h5 class="font-bold text-[14px]">
          {{ specialtiesHeading }}
        </h5>
        <ul class="flex-wrap flex my-4 text-body-sm">
          <li v-for="(specialty, index) in specialties" :key="index" class="w-full">
            <IconCircleCheck class="w-5 h-5 fill-success inline-block" />
            <template v-if="specialistLink">
              <a
                :href="specialistLink"
                class="no-underline"
              >
                <span class="relative top-1 sm:pl-2 pr-3 mt-4 text-font-tundora">{{ specialty }}</span>
              </a>
            </template>
            <template v-else>
              <span class="relative top-1 sm:pl-2 pr-3 mt-4 text-font-tundora">{{ specialty }}</span>
            </template>
          </li>
          <li class="w-full md:w-auto">
            <IconCircleCheck class="w-5 h-5 fill-success inline-block" />
            <span class="relative top-1 sm:pl-2 pr-3 mt-4 text-font-tundora">Liberty motor loans</span>
          </li>
        </ul>
      </div>
      <div class="flex flex-wrap justify-left px-6 mb-6 sm:mt-6 ">
        <Button
          variant="primary"
          size="small"
          tag="a"
          :href="bookUrl"
        >
          Book a call back
        </Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import IconShareFacebook from '~/assets/icons/ShareFacebook.svg?component'
import IconShareLinkedIn from '~/assets/icons/ShareLinkedIn.svg?component'
import IconShareInstagram from '~/assets/icons/ShareInstagram.svg?component'
import IconCircleCheck from '~/assets/icons/CircleCheck.svg?component'

/* Emit handlers */
const emit = defineEmits(['showNumber', 'clickPhone'])

/* Default props */
const props = defineProps({
  text: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  specialties: {
    type: Array,
    required: true,
  },
  bookUrl: {
    type: String,
    required: true,
  },
  facebookUrl: {
    type: String,
    default: '',
  },
  twitterUrl: {
    type: String,
    default: null,
  },
  linkedinUrl: {
    type: String,
    default: '',
  },
  listHeading: {
    type: String,
    default: '',
  },
  showSocial: {
    type: Boolean,
    default: true,
  },
})

/* Reactive props */
const text = ref(props.text)
const name = ref(props.name)
const phone = ref(props.phone)
const email = ref(props.email)
const specialties = ref(props.specialties)
const bookUrl = ref(props.bookUrl)
const facebookUrl = ref(props.facebookUrl)
const twitterUrl = ref(props.twitterUrl)
const linkedinUrl = ref(props.linkedinUrl)
const listHeading = ref(props.listHeading)
const showSocial = ref(props.showSocial)
const showActivated = ref(false)

/* Computed props */
const appendMortgageBrokerLink = computed((): string => {
  const pattern = /mortgage broker/g
  const inputString = text.value

  return inputString.replace(pattern, function (match) {
    return `<a href="/mortgage-broker" class="underline hover:no-underline">${match}</a>` // Replace with whatever you want
  })
})

const specialtiesHeading = computed((): string => {
  return name.value !== '' ? `${name.value} specialises in:` : listHeading.value
})

const adviserSlug = computed((): string => {
  return name.value.toLowerCase().trim().replace(/[^\w\s-]/g, '').replace(/[\s_-]+/g, '-').replace(/^-+|-+$/g, '')
})

const specialistLink = computed((): string => {
  // #NOTE Revert hidden links return specialist === 'SMSF loans' ? '/smsf-loans' : '';
  return ''
})

/* Method handlers */
const handleOnActivateShow = () => {
  showActivated.value = true
  emit('showNumber', adviserSlug)
}

const handleOnClickPhone = () => {
  emit('clickPhone', adviserSlug)
}

/* Watcher */
watchEffect(() => {
  text.value = props.text
  name.value = props.name
  phone.value = props.phone
  email.value = props.email
  specialties.value = props.specialties
  bookUrl.value = props.bookUrl
  facebookUrl.value = props.facebookUrl
  twitterUrl.value = props.twitterUrl
  linkedinUrl.value = props.linkedinUrl
  listHeading.value = props.listHeading
  showSocial.value = props.showSocial
})
</script>
