<template>
  <div
    :class="[
      'relative transition-[padding] will-change-[padding] duration-200 ease-in-out',
    ]"
  >
    <div
      ref="bar"
      :class="[
        'flex flex-wrap items-center gap-2 lg:flex-wrap lg:overflow-hidden',
        isCentered && 'justify-center'
      ]"
    >
      <slot
        name="buttons"
        :category="category"
        :set-category="setCategory"
        :set-tag="setTag"
        :show-all="showAll"
        :element-class="elementClass"
      >
        <client-only>
      <div :class="['items-center gap-2 flex-wrap', switchForMobile ? 'hidden md:flex' : 'flex']">
        <ButtonFilter :is-active="category === ''" @click="showAll">
          {{ defaultCategoryLabel }}
        </ButtonFilter>
        <ButtonFilter
          v-for="c in categories"
          :key="c.label"
          :is-active="category === c.slug"
          @click="setCategory(c.slug)"
        >
          {{ c.label }}
        </ButtonFilter>
      </div>
      <select v-model="category" :class="[switchForMobile ? 'block md:hidden' : 'hidden', elementClass]" @change="setCategory(category)">
            <option value="" selected>
              {{ defaultCategoryLabel }}
            </option>
            <option
              v-for="c in categories"
              :key="c.label"
              :value="c.slug"
            >
              {{ c.label }}
            </option>
          </select>
        </client-only>
      </slot>
    </div>
    <transition
      appear
      name="fade"
      mode="out-in"
      @after-enter="onTagsEnter"
      @before-leave="onTagsLeave"
    >
      <div
        v-if="showTags"
        ref="tags"
        :class="[
          'flex flex-nowrap items-center gap-2 overflow-scroll lg:flex-wrap lg:overflow-hidden mt-4',
          isCentered ? 'justify-center' : ''
        ]"
      >
        <ButtonFilter
          v-for="t in currentCategory.tags"
          :key="t.id"
          variant="secondary"
          @click="setTag(t.value)"
        >
          {{ t.name }}
        </ButtonFilter>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useMediaQuery } from '@vueuse/core'
import { onMounted, onBeforeUnmount } from 'vue'

const emit = defineEmits(['category-changed', 'tags-changed'])
const route = useRoute()

// Define props
const props = defineProps({
  defaultCategory: {
    type: String,
    default: '',
  },
  defaultCategoryLabel: {
    type: String,
    default: 'All Articles',
  },
  categories: {
    type: Array,
    required: true,
  },
  isCentered: {
    type: Boolean,
    default: false,
  },
  switchForMobile: {
    type: Boolean,
    default: true,
  },
})

// Define reactive properties
const category = ref('')
const tags = ref([])
const barFadeLeft = ref(false)
const barFadeRight = ref(true)
const tagsFadeLeft = ref(false)
const tagsFadeRight = ref(true)

// Template refs
const bar = ref(null)

// Define computed properties
const currentCategory = computed(() => {
  return props.categories.find(c => c.slug === category.value) || null
})
const showTags = computed(() => {
  return currentCategory.value?.tags?.length > 0
})
const isMobile = computed(() => {
  return useMediaQuery('(max-width: 767px)')
})
const elementClass = computed(() => {
  return [
    'text-font-tundora',
    'bg-white w-full h-12 rounded-lg overflow-hidden',
    'border border-grey-500 group-hover:border-deep-sapphire',
    'transition-colors duration-200 ease-in-out px-3',
  ]
})

// Methods
function setCategory (newCategory) {
  category.value = newCategory
  emit('category-changed', category.value)
}
function setTag (tag) {
  if (tags.value.includes(tag)) {
    tags.value.splice(tags.value.findIndex(t => t === tag), 1)
  } else {
    tags.value.push(tag)
  }

  emit('tags-changed', tags.value)
}

function showAll () {
  setCategory('')
  tags.value = []
}

function onTagsEnter (el) {
  el.addEventListener('scroll', handleTagScroll())
}

function onTagsLeave (el) {
  el.removeEventListener('scroll', handleTagScroll())
}

function handleBarScroll (e) {
  barFadeLeft.value = e.target.scrollLeft > 32
  barFadeRight.value = e.target.scrollLeft + e.target.offsetWidth < e.target.scrollWidth - 32
}

function handleTagScroll (e) {
  tagsFadeLeft.value = e.target.scrollLeft > 32
  tagsFadeRight.value = e.target.scrollLeft + e.target.offsetWidth < e.target.scrollWidth - 32
}

//Lifecycle hooks
// todo: make the default category and tags work
onMounted(() => {
  bar.value.addEventListener('scroll', handleBarScroll())
  category.value = props.defaultCategory
})

onBeforeUnmount(() => {
  bar.value.removeEventListener('scroll', handleBarScroll())
})
</script>
