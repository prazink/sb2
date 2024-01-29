<template>
  <LayoutWrapper>
    <LayoutGrid multirow>
      <div class="text-center col-end-13 col-start-1 mx-auto">
        <Heading tag="h3" size="h3" :text="heading" class="text-deep-sapphire md:text-h3 mb-4 md:mb-5" />
        <p class="text-center text-body text-font-grey font-normal pb-6">
          {{ summary }}
        </p>
      </div>
      <div v-for="(item,index) in items" :key="index" class="col-span-12 md:col-span-4">
        <div class="relative bg-white shadow-card hover:shadow-card-hover transition-shadow duration-200 ease-in-out p-5 rounded-xl h-full ">
          <StoryblokLink v-if="getLink(item) !== ''" :link="getLink(item)">
            <h4 class="font-heavy text-h5 mb-5" style="color: #3A92CB">
              {{ item.content.title }}
            </h4>
          </StoryblokLink>
          <h4 v-else class="font-heavy text-h5 mb-5" style="color: #3A92CB">
            {{ item.content.title }}
          </h4>
          <p class="pb-16">
            {{ item.content.summary }}
          </p>
          <div v-if="item.content.cta" class="absolute bottom-4">
            <StoryblokButton
              v-for="cta in item.content.cta"
              :key="cta._uid"
              :link="cta.link"
              :variant="cta.type"
              size="small"
              class="max-w-full"
            >
              {{ cta.label }}
            </StoryblokButton>
          </div>
        </div>
      </div>
    </LayoutGrid>
  </LayoutWrapper>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import type { ValuePropsProps } from '~/utils/types/aliases/value-props.alias'

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: false,
  },
  items: {
    type: Array,
    required: true,
  },
}) as ValuePropsProps

/* Reactive props */
const heading = ref(props.heading)
const summary = ref(props.summary)
const items = ref(props.items)

/* Computed props */

/* Method handlers */
const getLink = (item: any): any => {
  if (item.content.cta.length > 0) {
    return item.content.cta[0].link
  }
  return ''
}

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  summary.value = props.summary
  items.value = props.items
})
</script>
