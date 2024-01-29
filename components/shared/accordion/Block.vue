<template>
  <LayoutWrapper>
    <LayoutGrid>
      <div class="col-end-13 col-start-1 lg:col-start-3 lg:col-end-11">
        <h3 class="text-h3-sm text-center mb-4 text-deep-sapphire font-heavy md:text-h3 mt-6">
          {{ heading }}
        </h3>
        <h5
          v-if="sub_heading"
          class="text-h5-sm text-center mb-12 text-deep-sapphire font-normal sm:text-h5"
        >
          {{ sub_heading }}
        </h5>
        <ul v-auto-animate>
          <AccordionItem
            v-for="item in filteredAccordions"
            :key="item._uid"
            :heading="item.title"
            class="border-grey-400 border-t first:border-b-0 last:border-b"
          >
            <template #body>
              <div class="richtext">
                <div class="wysiwyg">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
                <div class="richtext">
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                </div>
              </div>
            </template>
          </AccordionItem>
        </ul>
        <div class="text-center mt-6 lg:mt-20">
          <Button
            variant="secondary"
            size="medium"
            @click.native="toggle"
          >
            <div v-if="isExpanded">
              Show less
            </div>
            <div v-else>
              Show more
            </div>
          </Button>
        </div>
      </div>
    </LayoutGrid>
  </LayoutWrapper>
</template>
<script setup>
import { vAutoAnimate } from '@formkit/auto-animate'


const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  sub_heading: {
    type: String,
    required: true,
  },
  accordionItems: {
    type: Array,
    required: true,
  },
  show: {
    type: Number,
    default: 5,
  },
})

const Accordion = reactive({
  count: 0,
  current: null,
})
const isExpanded = ref(false)

provide('Accordion', Accordion)

const filteredAccordions = computed(() => {
  if (isExpanded.value) {
    return props.accordionItems
  }

  return props.accordionItems.slice(0, props.show)
})

function toggle () {
  isExpanded.value = !isExpanded.value
}
</script>
