<template>
  <div class="mt-10 mb-16">
    <LayoutWrapper>
      <LayoutGrid>
        <div class="col-span-12 lg:col-span-10 lg:col-start-2 flex flex-row justify-start flex-wrap gap-10">
          <CardMeetTheTeam
            v-for="(item, index) in items"
            :key="index"
            :name="item.name"
            :pronouns="item.pronouns"
            :title="item.title"
            :description-headline="item.descriptionHeadline"
            :description-body="item.descriptionBody"
            :image="item.image"
            :background-image="item.backgroundImage"
            :class="[
              'w-full md:w-[calc(((100%-40px)/2))] lg:w-[calc(((100%-(2*40px))/3))]'
            ]"
            :show-tag="showTag"
            :tags="item.filters"
            @card-click="handleOnSelectTeamMember(index)"
          />
        </div>
      </LayoutGrid>
    </LayoutWrapper>
    <Modal
      v-if="modalSize && modalOpen && selectedTeamMemberIndex !== null"
      :no-header="true"
      modal-classes="w-[600px]"
      close-cta-label="Close"
      heading="Test heading"
      @modal-close="modalOpen = false"
    >
      <div class="flex flex-col justify-between">
        <div class="flex flex-col justify-start">
          <div class="flex flex-row justify-start items-center mb-7">
            <div :class="['relative w-[170px] h-[112px] rounded-md mt-6 mr-6 flex-shrink-0 bg-center bg-cover', backgroundImageClass]">
              <NuxtImg
                format="webp"
                width="150"
                :src="selectedTeamMember.image.filename"
                :alt="selectedTeamMember.image.alt"
                class="absolute bottom-0 left-1/2 -translate-x-1/2"
                loading="lazy"
              />
            </div>
            <div>
              <p class="text-h5 text-deep-sapphire font-heavy">
                {{ selectedTeamMember.name }}
              </p>
              <p class="text-[0.75rem] leading-[1.6] italic text-font-gray">
                &#40;{{ selectedTeamMember.pronouns }}&#41;
              </p>
              <p class="text-sm text-font-gray">
                {{ selectedTeamMember.title }}
              </p>
            </div>
          </div>
          <div>
            <!-- eslint-disable vue/no-v-html -->
            <p class="text-body-sm font-bold mb-3" v-html=" selectedTeamMember.descriptionHeadline" />
            <p class="text-body-sm">
              {{ selectedTeamMember.descriptionBody }}
            </p>
          </div>
        </div>
        <div v-if="items.length > 1" class="flex flex-row justify-between mt-20">
          <button type="button" class="flex items-center group" @click="handleOnPreviousTeamMember">
            <span class="block border border-cerulean rounded-full p-5 group-hover:bg-grey-100 group-active:bg-interaction-ice-pressed">
              <IconChevronLeft class="fill-deep-sapphire w-4 h-4 pointer-events-none" />
            </span>
            <span class="text-sm text-font-tundora ml-4">Previous</span>
          </button>

          <button type="button" class="flex items-center group" @click="handleOnNextTeamMember">
            <span class="text-sm text-font-tundora mr-4">Next</span>
            <span class="block border border-cerulean rounded-full p-5 hover:bg-grey-100 group-active:bg-interaction-ice-pressed">
              <IconChevronRight class="fill-deep-sapphire w-4 h-4 pointer-events-none" />
            </span>
          </button>
        </div>
      </div>
    </Modal>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect, computed } from 'vue'
import { WindowInnerWidthSizesEnum } from '~/utils/types/enums/window-sizes.enum'
import type { TeamsProps } from '~/utils/types/aliases/meet-the-team.alias'
import IconChevronLeft from '~/assets/icons/ChevronLeft.svg?component'
import IconChevronRight from '~/assets/icons/ChevronRight.svg?component'

/* #NOTE window mixins */

/* Default props */
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  showTag: {
    type: Boolean,
    default: false,
  },
}) as TeamsProps

/* Reactive props */
const items = ref(props.items)
const showTag = ref(props.showTag)
const windowWidth = ref(0)
const modalOpen = ref(false)
const selectedTeamMemberIndex = ref(null as null|number)

/* Computed props */
const modalSize = computed((): boolean => {
  return windowWidth.value > WindowInnerWidthSizesEnum.SEVEN_SIX_EIGHT
})

const selectedTeamMember = computed((): any => {
  return selectedTeamMemberIndex.value !== null && items.value[selectedTeamMemberIndex.value]
})

const isFirstTeamMember = computed((): boolean => {
  return selectedTeamMemberIndex.value === 0
})

const isLastTeamMember = computed((): boolean => {
  return selectedTeamMemberIndex.value === (items.value.length - 1)
})

const backgroundImageClass = computed((): string => {
  return `bg-mtt-gradient-${(selectedTeamMember.value.backgroundImage ?? '1')}`
})

/* Method handlers */
/* const handleOnUpdateWindowWidth = () => {
  this.windowWidth = window.innerWidth
  if (!this.accordionSize) { #NOTE no accordionSize prop present
    this.isOpen = false
  }
} */
/* const handleOnResize = () => {
  // handleOnUpdateWindowWidth()
} */

const handleOnSelectTeamMember = (index: number) => {
  if (modalSize.value) {
    selectedTeamMemberIndex.value = index
    modalOpen.value = true
  }
}

const handleOnPreviousTeamMember = () => {
  if (isFirstTeamMember.value) {
    selectedTeamMemberIndex.value = items.value.length - 1
  } else if (selectedTeamMemberIndex.value !== null) {
    selectedTeamMemberIndex.value--
  }
}

const handleOnNextTeamMember = () => {
  if (isLastTeamMember.value) {
    selectedTeamMemberIndex.value = 0
  } else if (selectedTeamMemberIndex.value !== null) {
    selectedTeamMemberIndex.value++
  }
}

/* Watcher */
watchEffect(() => {
  items.value = props.items
  showTag.value = props.showTag
})
</script>
