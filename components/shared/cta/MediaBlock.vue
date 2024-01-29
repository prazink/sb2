<template>
  <LayoutWrapper>
    <LayoutGrid class="items-center">
      <div
        :class="[
          'col-span-full lg:col-span-5',
          flipRow ? 'order-1 lg:order-3' : 'order-1 lg:col-start-2',
        ]"
      >
        <Video v-if="hasVideo" :video-url="video" :video-poster="image" />

        <NuxtImg
          v-else-if="image.filename && image.alt"
          format="webp"
          :src="image.filename"
          :alt="image.alt"
          provider="storyblok"
          width="380"
          height="380"
          :class="[
            'block mx-auto w-[200px]',
            fullWidth ? 'sm:w-full' : 'sm:w-[380px]',
            'print:hidden',
          ]"
          loading="lazy"
        />
      </div>
      <div
        :class="[
          'lg:text-left',
          'col-span-full lg:col-span-5',
          flipRow ? 'order-2 lg:col-start-2' : 'order-2',
        ]"
      >
        <div class="content richtext">
          <div class="wysiwyg">
            <slot name="content" />
          </div>
          <div
            v-if="showCTA"
            class="
              mt-7
              lg:mt-10
              flex flex-wrap
              gap-4
              lg:gap-6
              justify-center
              lg:justify-start
            "
          >
            <StoryblokButton
              v-for="cta in ctas"
              :key="cta._uid"
              :link="cta.link"
              :variant="cta.type"
              :size="cta.size"
              :data-identifier="cta.dataIdentifier"
              :gtm-category="cta.gtm_category"
              :gtm-action="cta.gtm_action"
              :gtm-label="cta.gtm_label"
              :gtm-value="cta.gtm_value"
              @click="onClick(cta)"
            >
              {{ cta.label }}
            </StoryblokButton>
            <p v-if="disclaimer" class="text-[14px]">
              {{ disclaimer }}
            </p>
          </div>
        </div>
      </div>
    </LayoutGrid>
  </LayoutWrapper>
</template>

<script setup lang="ts">
import type { MediaBlockProps } from '../../../utils/types/aliases/cta.alias'

const emit = defineEmits(['click'])

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
  ctas: {
    type: Array,
    default () {
      return null
    },
  },
  flipRow: {
    type: Boolean,
    default: false,
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  video: {
    type: String,
    default: '',
  },
  disclaimer: {
    type: String,
    required: false,
    default: '',
  },
}) as MediaBlockProps

const ctas = ref(props.ctas)

/* Computed props */
const showCTA = computed(() => (props.ctas?.length ?? 0) > 0)
const hasVideo = computed(() => props.video !== '')

/* Method handlers */
const onClick = (cta: any) => {
  // Pass the emit function to the StoryblokButton click handler
  emit('click', cta)
}
</script>

<style lang="scss">
.content.richtext .wysiwyg {
  @media (max-width: 991px) {
    text-align: center;
  }
  > p {
    text-align: left !important;
  }

  //@media print {
  //  ul > li:last-child {
  //    display: none;
  //  }
  //}
}
</style>
