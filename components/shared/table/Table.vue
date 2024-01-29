<template>
  <table class="table-fixed w-full">
    <thead>
      <slot name="th">
        <tr class="bg-grey-100 font-heavy">
          <template v-if="null !== content">
            <!-- eslint-disable vue/no-v-html -->
            <th
              v-for="(th, index) in content.thead"
              :key="index"
              class="p-2.5 text-left"
              v-html="th.value"
            />
          </template>
        </tr>
      </slot>
    </thead>
    <tbody>
      <slot>
        <template v-if="null !== content">
          <tr v-for="(tr, trIndex) in content.tbody" :key="trIndex" class="even:bg-grey-100">
            <!-- eslint-disable vue/no-v-html -->
            <td
              v-for="(td, tdIndex) in tr.body"
              :key="tdIndex"
              class="p-2.5"
              v-html="td.value"
            />
          </tr>
        </template>
      </slot>
    </tbody>
  </table>
</template>
<script lang="ts" setup>
import { ref, watchEffect } from 'vue'
import type { TableProps } from '~/utils/types/aliases/table.alias'

/* Default props */
const props = defineProps({
  content: {
    type: Object,
    default () {
      return null
    },
  },
}) as TableProps

/* Reactive props */
const content = ref(props.content)

/* Computed props */

/* Method handlers */

/* Watcher */
watchEffect(() => {
  content.value = props.content
})
</script>
<style lang="scss" scoped>
table::v-deep(a) {
  @apply underline hover:no-underline focus-visible:no-underline;
}
</style>
