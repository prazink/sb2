import type { Meta, StoryObj } from '@storybook/vue3'
import Modal from '~/components/shared/modal/Modal.vue'
import Button from '~/components/shared/button/Button.vue'

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal/Base',
  tags: ['autodocs'],
  component: Modal,
  render: (args: any) => ({
    components: { Modal, Button },
    setup () {
      const isOpen = ref(false)

      const handleOnTriggerModal = (value: boolean) => {
        isOpen.value = value
      }
      return { args, isOpen, handleOnTriggerModal }
    },
    template: `
      <div>
        <Button variant="primary" @click.native="handleOnTriggerModal(true)">Open Modal</Button>
        <Modal v-if="isOpen" v-bind="args" @modal-close="handleOnTriggerModal(false)">
          <template v-if="${'slotDefault' in args}">${args.slotDefault}</template>
        </Modal>
      </div>
    `,
  }),
  argTypes: {},
  parameters: {},
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    heading: 'Heading goes here',
  },
}

export const Custom: Story = {
  args: {
    heading: 'Calculator Information',
    slotDefault: `
      <p>The Borrowing Power Calculator calculates a possible maximum loan amount available based on both income and expenses entered. The values provided can only be taken as an estimate of the amount to be borrowed and does not take into account specific factors used by individual lenders in determining their own criteria.</p>
      <p class="font-heavy mt-4">
        Calculator Assumptions
      </p>
      <p class="font-bold mt-2">
        Expense Details and Default Values
      </p>
      <p class="mt-2">
        Default annual expense allowance - The calculator assumes that the borrower has a minimum set of expenses as defined below
      </p>
      <div class="flex flex-col gap-1.5 mt-4 text-center max-w-[350px]">
        <div class="grid grid-cols-3">
          <div class="col-span-1 text-left">
            Number of dependants
          </div>
          <div class="col-span-1">
            Single
          </div>
          <div class="col-span-1">
            Joint
          </div>
        </div>
        <div class="grid grid-cols-3">
          <div class="col-span-1">
            0
          </div>
          <div class="col-span-1">
            $13,200
          </div>
          <div class="col-span-1">
            $25,200
          </div>
        </div>
        <div class="grid grid-cols-3">
          <div class="col-span-1">
            1
          </div>
          <div class="col-span-1">
            $16,940
          </div>
          <div class="col-span-1">
            $28,940
          </div>
        </div>
        <div class="grid grid-cols-3">
          <div class="col-span-1">
            2
          </div>
          <div class="col-span-1">
            $20,680
          </div>
          <div class="col-span-1">
            $32,680
          </div>
        </div>
        <div class="grid grid-cols-3">
          <div class="col-span-1">
            3
          </div>
          <div class="col-span-1">
            $24,420
          </div>
          <div class="col-span-1">
            $36,420
          </div>
        </div>
        <div class="grid grid-cols-3">
          <div class="col-span-1">
            4
          </div>
          <div class="col-span-1">
            $28,160
          </div>
          <div class="col-span-1">
            $40,160
          </div>
        </div>
      </div>
      <p class="mt-4">
        Default extra core expenses for more than 4 dependants - currently set four dependents plus an additional $3,740 for each further dependent. Maximum percentage of income available - currently set at 80% of income
      </p>
      <p class="font-heavy mt-5">
        Loan Details
      </p>
      <p class="mt-1">
        Interest rate increase allowance buffer - Current version of the calculator uses an interest rate buffer of 2.0%. There is no ability to adjust this amount.
      </p>
      <p class="font-heavy mt-5">
        Month
      </p>
      <p class="mt-1">
        All months are assumed to be equal. In reality, many loans accrue on a daily basis this can lead to varying interest in different months.
      </p>
      <p class="font-heavy mt-5">
        Number of Weeks & Fortnights in a Year
      </p>
      <p class="mt-1">
        One year is assumed to contain exactly 52 weeks or 26 fortnights. Thus the assumption is for a 364 day year.
      </p>
      <p class="font-heavy mt-5">
        Rounding
      </p>
      <p class="mt-1">
        The calculator uses the unrounded repayment to derive the amount of interest payable over the full term of the loan, however, institutions round repayments to the nearest cent. Unrounded payments provide for constant line within the graph. Note that the final repayment after the increase in repayment amount will be a partial repayment as required to reduce the loan balance to zero.
      </p>
    `,
  },
  parameters: {},
}
