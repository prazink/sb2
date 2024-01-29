<template>
  <ul class="text-deep-sapphire text-sm leading-normal">
    <li
      v-for="(i, index) in items"
      :key="i.url"
      :class="[
        'inline',
        { 'after:content-slash after:mx-2.5': index !== items.length - 1 }
      ]"
    >
      <template v-if="i.url">
        <NuxtLink
          :to="i.url"
          class="inline-block underline hover:no-underline"
        >
          {{ i.label }}
        </NuxtLink>
      </template>
      <template v-else>
        <span>{{ i.label }}</span>
      </template>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>
