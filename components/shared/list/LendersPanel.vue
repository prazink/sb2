<template>
  <LayoutGrid>
    <div class="col-span-full lg:col-start-3 lg:col-end-11">
      <h3 class="text-center text-h4-sm text-deep-sapphire sm:text-h4 font-heavy" v-html="heading" />
      <p class="text-center text-body text-font-grey font-normal pt-6" v-html="sub_heading" />
      <div class="flex align-center justify-center flex-wrap flex-row py-8 sm:px-8 sm:pb-8 sm:pt-12">
        <div v-for="(accreditation, index) in accreditations" :key="index">
          <NuxtImg
            format="webp"
            provider="s3"
            quality="90"
            sizes="sm:120px"
            :src="convertAccreditationUrl(accreditation as string)"
            :alt="accreditation as string"
            loading="lazy"
            class="m-3 w-20 sm:w-28 sm:h-14 h-10"
          />
        </div>
      </div>
      <div v-if="showCTA" class="mt-10 lg:mt-8 flex flex-wrap items-center justify-center gap-4">
        <StoryblokButton
          v-for="cta in ctas"
          :key="cta._uid"
          :link="cta.link"
          :variant="cta.type"
          :size="cta.size"
        >
          {{ cta.label }}
        </StoryblokButton>
      </div>
    </div>
  </LayoutGrid>
</template>

<script lang="ts" setup>
import type { LenderPanelsProps } from '~/utils/types/aliases/adviser.alias'

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  sub_heading: {
    type: String,
    required: true,
  },
  ctas: {
    type: Array,
    default () {
      return []
    },
  },
  accreditations: {
    type: Array,
    required: true,
  },
  cta: {
    type: Boolean,
    default: false,
  },
}) as LenderPanelsProps

const ctas = ref(props.ctas)
const showCTA = computed(() => {
  return props.cta === true
})
const accreditationMappings: Record<string, string> = {
  bom: '/assets/images/lender-panel/bank-of-melb.jpg',
  // Add more mappings as needed
}

const convertAccreditationUrl = (accreditation: string): string => {
  const formattedAccreditation = accreditation.toLowerCase()
  return accreditationMappings[formattedAccreditation] || `/assets/images/lender-panel/${formattedAccreditation.replace(/-/g, '-')}.jpg`
}

</script>
