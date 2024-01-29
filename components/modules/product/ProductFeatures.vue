<template>
  <LayoutWrapper class="print:bg-white">
    <LayoutGrid>
      <div class="col-end-13 col-start-1 lg:col-start-3 lg:col-end-11">
        <LayoutGrid class="gap-y-0 lg:gap-y-8 print:bg-white">
          <div class="text-center col-end-13 col-start-1 lg:col-start-2 lg:col-end-12 mx-auto">
            <h3 class="text-deep-sapphire font-heavy text-h4-sm md:text-h3 mb-6 md:mb-5 print:text-h5">
              {{ heading }}
            </h3>
          </div>
          <div class="col-span-12 md:columns-2 md:gap-10 print:bg-white">
            <ListFeature :heading="featuresHeading" :list-items="features" class="md:mb-11 list print:bg-white" />
            <ListFeature v-if="loanVariables.length > 0" :heading="variablesHeading" :list-items="loanVariables" class="md:mb-11 list print:bg-white" />
            <ListFeature :heading="feesHeading" :list-items="fees" class="list print:bg-white" />
          </div>
        </LayoutGrid>
      </div>
    </LayoutGrid>
  </LayoutWrapper>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import type { ProductFeatureProps } from '~/utils/types/aliases/product.alias'

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    default: '',
  },
  featuresHeading: {
    type: String,
    required: true,
  },
  variablesHeading: {
    type: String,
    required: true,
  },
  feesHeading: {
    type: String,
    required: true,
  },
  features: {
    type: Array,
    required: true,
  },
  loanVariables: {
    type: Array,
    required: true,
  },
  fees: {
    type: Array,
    required: true,
  },
  cta: {
    type: Object,
    default () {
      return {}
    },
  },
  isPrinting: {
    type: Boolean,
    default: false,
  },
}) as ProductFeatureProps

/* Reactive props */
const heading = ref(props.heading)
const featuresHeading = ref(props.featuresHeading)
const variablesHeading = ref(props.featuresHeading)
const feesHeading = ref(props.feesHeading)
const features = ref(props.features)
const loanVariables = ref(props.loanVariables)
const fees = ref(props.fees)
const cta = ref(props.cta)
const isPrinting = ref(props.isPrinting)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  featuresHeading.value = props.featuresHeading
  variablesHeading.value = props.variablesHeading
  feesHeading.value = props.feesHeading
  features.value = props.features
  loanVariables.value = props.loanVariables
  fees.value = props.fees
  cta.value = props.cta
  isPrinting.value = props.isPrinting
})
</script>
