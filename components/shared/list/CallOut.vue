<template>
  <LayoutWrapper>
    <LayoutGrid class="mb-5 lg:mb-10">
      <div class="col-span-full lg:col-span-8 lg:col-start-3 text-center">
        <h3 class="text-deep-sapphire font-heavy text-h4 md:text-h3 mb-4 md:mb-5">
          {{ heading }}
        </h3>
        <p class="text-lg md:text-2xl">
          {{ subheading }}
        </p>
      </div>
    </LayoutGrid>
    <LayoutGrid>
      <div class="col-span-full lg:col-span-10 lg:col-start-2">
        <LayoutGrid
          columns="grid-cols-1 md:grid-cols-2"
          gutters="gap-5 md:gap-10"
          multirow
        >
          <div v-for="(item, index) in items" :key="index" class="col-span-1">
            <CardCallOut :text="item" />
          </div>
        </LayoutGrid>
      </div>
    </LayoutGrid>
    <LayoutGrid class="mt-10 lg:mt-12">
      <div class="col-span-full lg:col-span-6 lg:col-start-4 text-center">
        <div class="mb-6 md:mb-8 text-base md:text-body description">
          <slot name="description" />
        </div>
        <StoryblokButton
          v-for="cta in ctas"
          :key="cta._uid"
          :link="cta.link"
          :variant="cta.type"
          :size="cta.size"
          :data-identifier="cta.data_identifier"
          @click="handleOnClick"
        >
          {{ cta.label }}
        </StoryblokButton>
      </div>
    </LayoutGrid>
  </LayoutWrapper>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    default: '',
  },
  items: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  ctas: {
    type: Array,
    default () {
      return []
    },
  },
}) as any

/* Reactive props */
const heading = ref(props.heading)
const subheading = ref(props.subheading)
const items = ref(props.items)
const description = ref(props.description)
const ctas = ref(props.ctas)

/* Computed props */

/* Method handlers */
const handleOnClick = () => {

}

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  subheading.value = props.subheading
  items.value = props.items
  description.value = props.description
  ctas.value = props.ctas
})

</script>
