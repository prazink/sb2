<template>
  <a
    :href="urlLink ?? ''"
    :class="[
      'relative flex flex-col justify-end group bg-white rounded-lg p-4 shadow-card lg:hover:shadow-card-hover h-[150px] mt-[65px] duration-200 ease-in-out',
      `lg:hover:bg-${type} lg:focus:bg-${type}`
    ]"
  >
    <div
      v-if="image"
      :class="[
        'absolute top-0 left-4 -translate-y-[40px] aspect-square',
        'lg:group-hover:-translate-y-[65px] lg:group-hover:rotate-6',
        'lg:group-focus:-translate-y-[65px] lg:group-focus:rotate-6',
        'duration-200 ease-in-out',
        'w-[125px] h-[125px]'
      ]"
    >
      <NuxtImg
        format="webp"
        width="125"
        sizes="max:250px"
        :src="image.filename"
        :alt="image.alt"
        class="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <span
      :class="[
        'font-heavy text-lg leading-normal lg:group-hover:underline lg:group-hover:text-white duration-200 ease-in-out',
        `text-${type}`
      ]"
    >{{ heading }}</span>
    <span
      :class="[
        'block absolute bottom-0 left-0 w-full h-2 rounded-b-lg',
        `bg-${type}`,
      ]"
    />
  </a>
</template>
<script lang="ts" setup>
import { ref, computed, watchEffect } from 'vue'
import type { CrossSellProps } from '~/utils/types/aliases/cross-sell.alias'
import { CrossSellTypesEnum } from '~/utils/types/enums/cross-sell.enum'
import { LinkTypeEnum } from '~/utils/types/enums/link-types.enum'

/* Default props */
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  image: {
    type: Object,
    required: true,
  },
  link: {
    type: Object,
    required: true,
  },
  type: {
    type: String,
    default: CrossSellTypesEnum.LOAN_HOME,
    validator (val: CrossSellTypesEnum) {
      return Object.values(CrossSellTypesEnum).includes(val)
    },
  },
}) as CrossSellProps

/* Reactive props */
const heading = ref(props.heading)
const image = ref(props.image)
const link = ref(props.link)
const type = ref(props.type)

/* Computed props */
const urlLink = computed((): string|null => {
  if (undefined === link.value) {
    return null
  }
  return link.value.linktype === LinkTypeEnum.STORY ? `/${link.value.cached_url.replace(/\/$/, '')}` : link.value.cached_url.replace(/\/$/, '')
})

/* Method handlers */

/* Watcher */
watchEffect(() => {
  heading.value = props.heading
  image.value = props.image
  link.value = props.link
  type.value = props.type
})

</script>
