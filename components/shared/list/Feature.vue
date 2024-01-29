<template>
  <div class="border-t md:border-0 border-grey-400 print:border-0 print:bg-white">
    <h3 class="text-xl text-deep-sapphire font-heavy mb-3 pt-3 md:pt-0 relative pr-6 md:pr-0 cursor-pointer md:cursor-default print:pt-2 print:mb-2" @click="handleOnToggleItems">
      <!-- eslint-disable vue/no-v-html -->
      <span class="print:text-body" v-html="heading" />
      <div class="block md:hidden print:hidden">
        <IconMinus v-if="isVisible" class="w-4 h-4 fill-deep-sapphire absolute right-0 top-1/2 -translate-y-1/2" />
        <IconPlus v-else class="w-4 h-4 fill-deep-sapphire absolute right-0 top-1/2 -translate-y-1/2" />
      </div>
    </h3>
    <div v-if="isPrinting">
      <div v-for="(item, index) in listItems" :key="index" class="flex justify-between items-center py-1 border-b border-b-grey-400 hidden print:flex">
        <!-- eslint-disable vue/no-v-html -->
        <div class="text-xs" v-html="item.text" />
        <div class="text-right">
          <IconCircleCheck v-if="handleOnGetItemValue(item) === 'true'" class="w-5 h-5 fill-success inline-block" />
          <IconCircleMinus v-else-if="handleOnGetItemValue(item) === 'false'" class="w-5 h-5 fill-error inline-block" />
          <template v-else>
            <!-- eslint-disable vue/no-v-html -->
            <span class="text-xs" v-html="handleOnGetItemValue(item)" />
          </template>
        </div>
      </div>
    </div>
    <div v-if="isMobile" class="print:hidden">
      <transition
        name="accordion-item"
        @enter="handleOnStartTransition"
        @after-enter="handleOnEndTransition"
        @before-leave="handleOnStartTransition"
        @after-leave="handleOnEndTransition"
      >
        <div v-show="isVisible" class="overflow-hidden">
          <div v-for="(item, index) in listItems" :key="index" class="flex justify-between items-center py-2 border-b border-b-grey-400">
            <!-- eslint-disable vue/no-v-html -->
            <div class="text-base" v-html="item.text" />
            <div class="text-right">
              <IconCircleCheck v-if="handleOnGetItemValue(item) === 'true'" class="w-5 h-5 fill-success inline-block" />
              <IconCircleMinus v-else-if="handleOnGetItemValue(item) === 'false'" class="w-5 h-5 fill-error inline-block" />
              <template v-else>
                <!-- eslint-disable vue/no-v-html -->
                <span v-html="handleOnGetItemValue(item)" />
              </template>
            </div>
          </div>
        </div>
      </transition>
    </div>
    <div v-else class="print:hidden">
      <div v-for="(item, index) in listItems" :key="index" class="flex justify-between items-center py-2 border-b border-b-grey-400">
        <!-- eslint-disable vue/no-v-html -->
        <div class="text-base" v-html="item.text" />
        <div class="text-right">
          <IconCircleCheck v-if="handleOnGetItemValue(item) === 'true'" class="w-5 h-5 fill-success inline-block" />
          <IconCircleMinus v-else-if="handleOnGetItemValue(item) === 'false'" class="w-5 h-5 fill-error inline-block" />
          <template v-else>
            <!-- eslint-disable vue/no-v-html -->
            <span v-html="handleOnGetItemValue(item)" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect, onMounted, onBeforeUnmount } from 'vue'
import IconCircleCheck from '~/assets/icons/CircleCheck.svg?component'
import IconCircleMinus from '~/assets/icons/CircleMinus.svg?component'
import IconPlus from '~/assets/icons/Plus.svg?component'
import IconMinus from '~/assets/icons/Minus.svg?component'
import { ProductFeatureListItemEnum } from '~/utils/types/enums/products.enum'
import { WindowInnerWidthSizesEnum } from '~/utils/types/enums/window-sizes.enum'
import type { ProductFeatureListItemProps, ProductFeatureListItem } from '~/utils/types/aliases/product.alias'

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  listItems: {
    type: Array,
    required: true,
    validate: (value: typeof ProductFeatureListItemEnum) => {
      return Object.values(ProductFeatureListItemEnum).every(key => key in value)
    },
  },
}) as ProductFeatureListItemProps

/* Reactive props */
const heading = ref(props.heading)
const listItems = ref(props.listItems)
const isVisible = ref(false)
const isMobile = ref(false)
const isPrinting = ref(false)

/* Computed props */

/* Method handlers */
const handleOnResetAccordion = () => {
  isVisible.value = !isMobile.value
}

const handleOnStartTransition = (el: any) => {
  el.style.height = el.scrollHeight + 'px'
}

const handleOnEndTransition = (el: any) => {
  el.style.height = ''
}

const handleOnToggleItems = () => {
  if (isMobile.value) {
    isVisible.value = !isVisible.value
  }
}

const handleOnGetItemValue = (item: ProductFeatureListItem) => {
  if (item.booleanValue !== '') {
    return item.booleanValue
  }
  return item.textValue
}

const handleOnResize = () => {
  isMobile.value = window.innerWidth < WindowInnerWidthSizesEnum.SEVEN_SIX_EIGHT
}

const handleOnResetPrint = () => {
  isPrinting.value = false
}

const handleOnTriggerPrint = () => {
  isPrinting.value = true
}

/* Events */
onMounted(() => {
  handleOnResetAccordion()
  handleOnResize()
  window.addEventListener('resize', handleOnResize)
  window.addEventListener('beforeprint', handleOnTriggerPrint)
  window.addEventListener('afterprint', handleOnResetPrint)

  if (navigator.userAgent.includes('Firefox')) {
    setTimeout(() => {
      isPrinting.value = true
    }, 3000)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleOnResize)
  window.removeEventListener('beforeprint', handleOnTriggerPrint)
  window.removeEventListener('afterprint', handleOnResetPrint)
})

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  listItems.value = props.listItems
})
</script>
