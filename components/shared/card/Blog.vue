<template>
  <component
    :is="isExpanded ? 'div' : 'nuxt-link'"
    :to="!isExpanded ? `/${url}` : null"
    :class="[
      'flex h-full bg-white shadow-card hover:shadow-card-hover transition-shadow duration-200 ease-in-out rounded-2xl',
      !isExpanded && 'group',
      isHorizontal && !isExpanded ? 'flex-row' : 'flex-col'
    ]"
  >
    <div
      :class="[
        'relative aspect-video',
        isHorizontal ? 'w-5/12' : 'w-full'
      ]"
    >
      <NuxtImg
        v-if="image && image.filename"
        format="webp"
        :src="image.filename"
        :alt="image.alt"
        :class="[
          'absolute p-2 z-1 w-full h-full object-cover rounded-xl',
          !isHorizontal && 'pb-0'
        ]"
        loading="lazy"
      />
    </div>
    <div
      :class="[
        'flex flex-col flex-1',
        isExpanded ? 'py-4 px-3 lg:px-4 lg:pt-4 lg:pb-6' : 'px-5 pt-5 pb-8 lg:pt-6 lg:pb-8 lg:px-8'
      ]"
    >
      <component
        :is="isExpanded ? 'nuxt-link' : 'h4'"
        :to="isExpanded ? `/${url}` : null"
        :class="[
          'font-heavy text-deep-sapphire',
          isExpanded ? 'text-h4-sm lg:text-h4 hover:underline' : 'text-h5-sm lg:text-h5 group-hover:underline',
          { 'mb-auto': !description }
        ]"
      >
        {{ heading }}
      </component>
      <p
        v-if="description"
        :class="[
          'text-font-gray text-body-sm mt-1 mb-auto',
        ]"
      >
        {{ description }}
      </p>
      <div v-if="isExpanded" class="flex items-center mt-4 lg:mt-8">
        <div class="bg-grey-100 relative w-10 aspect-square rounded overflow-hidden mr-4">
          <NuxtImg
            v-if="author.image && author.image.filename"
            format="webp"
            width="40"
            :src="author.image.filename"
            :alt="author.image.alt"
            class="absolute z-1 w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col">
          <span class="text-font-tundora text-[15px] leading-normal">{{ author.name }}</span>
          <span class="text-font-storm text-sm leading-normal">{{ publishedAt }} ・ {{ readTime }} min read</span>
        </div>
        <SharedButtonSave
          :id="id"
          type="blog"
          class="ml-auto"
          :active="isFavoriteBlog"
        />
      </div>
    </div>
  </component>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import type { BlogProps } from '~/utils/types/aliases/blog.alias'

/* Default props */
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  image: {
    type: Object,
    default () {
      return null
    },
  },
  author: {
    type: Object,
    default () {
      return {
        name: 'Kate Jenkinson',
        image: {
          filename: 'https://img2.storyblok.com/40x0/filters:format(webp)/f/148182/100x100/b61e441771/staff_katejenkinson100.jpg',
          alt: 'Kate Jenkinson',
        },
      }
    },
  },
  readTime: {
    type: Number,
    default: 0,
  },
  publishedAt: {
    type: String,
    default: '',
  },
  isExpanded: {
    type: Boolean,
    default: false,
  },
  isHorizontal: {
    type: Boolean,
    default: false,
  },
}) as BlogProps

/* Reactive props */
const id = ref(props.id)
const url = ref(props.url)
const heading = ref(props.heading)
const description = ref(props.description)
const image = ref(props.image)
const author = ref(props.author)
const readTime = ref(props.readTime)
const publishedAt = ref(props.publishedAt)
const isExpanded = ref(props.isExpanded)
const isHorizontal = ref(props.isHorizontal)
const favoriteBlogs = ref([] as string[]) // #NOTE old approach getting from store $store.state.LocalStorage.Favourites.blogs

/* Computed props */
const isFavoriteBlog = computed((): boolean => {
  return favoriteBlogs.value.includes(id.value)
})

/* Watcher */
watchEffect(() => {
  id.value = props.id
  url.value = props.url
  heading.value = props.heading
  description.value = props.description
  image.value = props.image
  author.value = props.author
  readTime.value = props.readTime
  publishedAt.value = props.publishedAt
  isExpanded.value = props.isExpanded
  isHorizontal.value = props.isHorizontal
})
</script>
