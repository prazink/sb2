import { createFloatingLabelsPlugin, createAutoHeightTextareaPlugin } from '@formkit/addons'
import { generateClasses } from '@formkit/themes'
import '@formkit/addons/css/floatingLabels'
import IconWarning from './assets/icons/Warning.svg'
import {
  useDefaultGlobalClasses,
  useDefaultInputCheckboxClasses,
  useDefaultInputRadioClasses,
  useDefaultInputSelectClasses,
  useDefaultInputTextareaClasses,
} from './composables/DefaultInputStyles'
import { select } from './inputs/select'

export default {
// TODO: Setup icon library
  config: {
    classes: generateClasses({
      global: useDefaultGlobalClasses(),
      textarea: useDefaultInputTextareaClasses(),
      select: useDefaultInputSelectClasses(),
      radio: useDefaultInputRadioClasses(),
      checkbox: useDefaultInputCheckboxClasses(),
    }),
  },
  icons: {
    warning: IconWarning,
  },
  inputs: {
    select,
  },
  plugins: [
    createFloatingLabelsPlugin({
      useAsDefault: true, // defaults to false
    }),
    createAutoHeightTextareaPlugin(),
  ],
}
