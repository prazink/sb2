<template>
  <FormKit type="form" :actions="false">
    <FormKitSchema
      :schema="data"
    />
  </FormKit>
</template>

<script setup>
import { FormKitSchema } from '@formkit/vue'

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
})
</script>
