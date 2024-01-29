<template>
  <div role="button" class="w-full rounded-md bg-white shadow-card pt-2 pr-2 pb-5 md:pb-12 pl-2 mt-10 cursor-pointer group" @click="handleOnOpenCard">
    <div :class="['relative w-full h-[200px] rounded-md mb-6 bg-center bg-cover', backgroundImageClass]">
      <NuxtImg
        format="webp"
        width="266"
        :src="image.filename"
        :alt="image.alt"
        class="absolute bottom-0 left-1/2 -translate-x-1/2"
        loading="lazy"
      />
    </div>
    <div class="px-2 md:px-0">
      <div v-if="showTag" class="flex justify-start md:justify-center mb-3">
        <ButtonFilter v-for="item in tags" :key="item" tag="span" variant="secondary" class="mx-1">
          {{ item.toUpperCase() }}
        </ButtonFilter>
      </div>
      <div class="text-left md:text-center">
        <p class="text-h5-sm md:text-h5 text-deep-sapphire font-heavy group-hover:underline">
          {{ name }}
        </p>
        <p class="text-[0.75rem] leading-[1.6] italic text-font-gray">
          &#40;{{ pronouns }}&#41;
        </p>
        <p class="text-sm text-font-gray">
          {{ title }}
        </p>
      </div>
      <transition
        enter-active-class="enter-active"
        leave-active-class="leave-active"
        @before-enter="handleTransitionOnBeforeEnter"
        @enter="handleTransitionOnEnter"
        @after-enter="handleTransitionOnAfterEnter"
        @before-leave="handleTransitionOnBeforeLeave"
        @leave="handleTransitionOnLeave"
        @after-leave="handleTransitionOnAfterLeave"
      >
        <div v-if="accordionSize && isOpen" class="text-sm text-font-gray mt-3">
          <!-- eslint-disable vue/no-v-html -->
          <p class="font-bold mb-3" v-html="descriptionHeadline" />
          <!--eslint-enable-->
          <p class="mb-2">
            {{ descriptionBody }}
          </p>
          <Button
            tag="button"
            variant="tertiary"
            size="medium"
            @on-click="handleOnCloseCard"
          >
            Close
            <template #icon="{ iconClass }">
              <IconClose :class="iconClass" />
            </template>
          </Button>
        </div>
      </transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect, computed } from 'vue'
import type { MeetTheTeamProps } from '~/utils/types/aliases/meet-the-team.alias'
import { WindowInnerWidthSizesEnum } from '~/utils/types/enums/window-sizes.enum'
import IconClose from '~/assets/icons/Close.svg?component'

/* Emit handlers */
const emit = defineEmits(['cardClick'])

/* Default props */
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  pronouns: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  descriptionHeadline: {
    type: String,
    required: true,
  },
  descriptionBody: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
  showTag: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: Array,
    default () {
      return []
    },
  },
}) as MeetTheTeamProps

/* Reactive props */
const name = ref(props.name)
const pronouns = ref(props.pronouns)
const title = ref(props.title)
const descriptionHeadline = ref(props.descriptionHeadline)
const descriptionBody = ref(props.descriptionBody)
const image = ref(props.image)
const backgroundImage = ref(props.backgroundImage)
const showTag = ref(props.showTag)
const tags = ref(props.tags)
const windowWidth = ref(0)
const isOpen = ref(false)

/* Computed props */
const backgroundImageClass = computed((): string => {
  return `bg-mtt-gradient-${(backgroundImage.value ?? '1')}`
})

const accordionSize = computed((): boolean => {
  return windowWidth.value < WindowInnerWidthSizesEnum.SEVEN_SIX_EIGHT
})

/* Method handlers */
const handleOnUpdateWindowWidth = () => {
  windowWidth.value = window.innerWidth
  if (!accordionSize.value) {
    isOpen.value = false
  }
}

const handleOnOpenCard = () => {
  emit('cardClick')
  if (window.innerWidth < WindowInnerWidthSizesEnum.ONE_ZERO_TWO_FOUR) {
    isOpen.value = !isOpen.value
  }
}

const handleOnCloseCard = () => {
  if (window.innerWidth < WindowInnerWidthSizesEnum.ONE_ZERO_TWO_FOUR) {
    isOpen.value = false
  }
}

const handleTransitionOnBeforeEnter = (element: any) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = '0px'
    }

    element.style.display = null
  })
}

const handleTransitionOnEnter = (element: any) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`
    })
  })
}

const handleTransitionOnAfterEnter = (element: any) => {
  element.style.height = null
}

const handleTransitionOnBeforeLeave = (element: any) => {
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = `${element.offsetHeight}px`
    }
  })
}

const handleTransitionOnLeave = (element: any) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = '0px'
    })
  })
}

const handleTransitionOnAfterLeave = (element: any) => {
  element.style.height = null
}

/* Life Cycle Events */
onMounted(() => {
  handleOnUpdateWindowWidth()
})

/* Watcher */
watchEffect(() => {
  name.value = props.name
  pronouns.value = props.pronouns
  title.value = props.title
  descriptionHeadline.value = props.descriptionHeadline
  descriptionBody.value = props.descriptionBody
  image.value = props.image
  backgroundImage.value = props.backgroundImage
  showTag.value = props.showTag
  tags.value = props.tags
})
</script>
<style type="css" scoped>
.enter-active,
.leave-active {
  overflow: hidden;
  transition: height 200ms linear;
}
</style>
