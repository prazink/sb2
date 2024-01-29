<template>
  <ul>
    <li v-for="(item,index) in listItems" :key="index" class="flex align-start px-2 mb-2">
      <div class="relative pl-7">
        <IconCircleCheck class="w-5 h-5 fill-success inline-block absolute top-[2px] left-0" />
        <!-- eslint-disable vue/no-v-html -->
        <div class="text-body text-font-tundora font-normal leading-tight" v-html="item.text" />
        <!--eslint-enable-->
      </div>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import IconCircleCheck from '~/assets/icons/CircleCheck.svg?component'

/* Default props */
const props = defineProps({
  listItems: {
    type: Array,
    required: true,
    validate: (value: any) => {
      return ['text', 'textValue'].every(key => key in value)
    },
  },
}) as { listItems: { text: string }[] }

/* Reactive props */
const listItems = ref(props.listItems)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  listItems.value = props.listItems
})
</script>
