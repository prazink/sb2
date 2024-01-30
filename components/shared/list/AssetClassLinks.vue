<template>
  <div class="border-t lg:border-t-0 border-grey-400 relative h-full">
    <div class="flex lg:flex-col h-full">
      <nuxt-img
        format="webp"
        :src="icon.filename"
        :alt="icon.alt"
        class="hidden lg:block mb-6 ml-5"
        loading="lazy"
        width="115"
        height="115"
      />
      <div
        :class="['border-l-0 lg:border-l-4 px-4 py-2 w-full h-full', borderClass]"
      >
        <h3 :class="['flex items-center lg:block text-h5 font-heavy py-4 md:py-0 relative pr-6 md:pr-0 cursor-pointer md:cursor-default', 'text-'+type]" @click="toggleItems">
          <nuxt-img
            format="webp"
            :src="icon.filename"
            :alt="icon.alt"
            class="inline-block lg:hidden w-12 h-12 mr-4"
            loading="lazy"
            width="48"
            height="48"
          />
          {{ heading }}
          <div class="block lg:hidden">
            <IconMinus v-if="isVisible" class="w-4 h-4 fill-deep-sapphire absolute right-0 top-1/2 -translate-y-1/2" />
            <IconPlus v-else class="w-4 h-4 fill-deep-sapphire absolute right-0 top-1/2 -translate-y-1/2" />
          </div>
        </h3>
        <transition
          name="accordion-item"
          @enter="startTransition"
          @after-enter="endTransition"
          @before-leave="startTransition"
          @after-leave="endTransition"
        >
          <div v-show="isVisible" class="flex flex-col overflow-hidden pl-16 lg:pl-0 pb-4 lg:pb-0">
            <StoryblokLink
              v-for="link in links"
              :key="link._uid"
              :link="link.target"
              class="text-body-sm text-font-tundora my-1 underline hover:no-underline focus:outline-none focus-visible:no-underline"
            >
              {{ link.label }}KK
            </StoryblokLink>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMediaQuery } from '@vueuse/core'
import IconPlus from '../../assets/icons/Plus.svg?inline'
import IconMinus from '../../assets/icons/Minus.svg?inline'
// import { WindowInnerWidthSizesEnum } from '~/utils/types/enums/window-sizes.enum'
import { CrossSellTypesEnum } from '~/utils/types/enums/cross-sell.enum'
import type { AssetClassLinksProps } from '~/utils/types/aliases/asset-class-links.alias'

const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
  links: {
    type: Array,
    default () {
      return null
    },
  },
  type: {
    type: String,
    default: CrossSellTypesEnum.LOAN_HOME,
    validator (val: CrossSellTypesEnum) {
      return Object.values(CrossSellTypesEnum).includes(val)
    },
  },
}) as AssetClassLinksProps

const isVisible = ref(false)
// const isMobile = computed(() => {
//   const windowSize = window.innerWidth

//   // Use the enum values for comparison
//   return windowSize <= WindowInnerWidthSizesEnum.FOUR_SIX_EIGHT
// })
// const { screen } = useMediaQuery

// const isMobile = computed(() => ['xs', 'sm', 'md'].includes(screen.value))
const isMobile = useMediaQuery('(max-width: 767px)')

const links = ref(props.links)

const borderClass = computed(() => 'border-' + props.type)

// const itemValue = (item: any) => {
//   return item.boolean_value !== '' ? item.boolean_value : item.text_value
// }

const toggleItems = () => {
  if (isMobile.value) {
    isVisible.value = !isVisible.value
  }
}

const resetAccordion = () => {
  isVisible.value = !isMobile.value
}

const startTransition = (el: any) => {
  el.style.height = el.scrollHeight + 'px'
}

const endTransition = (el: any) => {
  el.style.height = ''
}

watch(isMobile, resetAccordion)

// onMounted(resetAccordion)
onMounted(() => {
  resetAccordion()
})

</script>

<style lang="scss" scoped>
.accordion-item-enter-active, .accordion-item-leave-active {
  will-change: height;
  transition: height 0.2s ease;
}
.accordion-item-enter, .accordion-item-leave-to {
  height: 0 !important;
}
</style>
