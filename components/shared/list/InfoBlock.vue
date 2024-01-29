<template>
  <div class="mt-10 mb-16">
    <LayoutWrapper>
      <LayoutGrid>
        <div v-for="(item, index) in items" :key="index" class="col-span-4">
          <CardInfoBlock
            :heading="item.heading"
            :content="item.content"
            :ctas="item.ctas"
            :image="item.image"
            :image-center="item.imageCenter"
            :image-full="item.imageFull"
          />
        </div>
      </LayoutGrid>
    </LayoutWrapper>
  </div>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import type { CardInfoBlockProps } from '~/utils/types/aliases/info-block.alias'

/* Default props */
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
}) as { items: CardInfoBlockProps[] }

/* Reactive props */
const items = ref(props.items)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  items.value = props.items
})
</script>
