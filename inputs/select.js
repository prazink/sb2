import {
  outer,
  inner,
  wrapper,
  label,
  help,
  messages,
  message,
  prefix,
  suffix,
  icon,
  selectInput,
  option,
  optionSlot,
  optGroup,
  $if,
  $attrs,
  options,
  selects,
  defaultIcon,
} from '@formkit/inputs'

/**
 * Input definition for a select.
 * @public
 */
export const select = {
  /**
   * The actual schema of the input, or a function that returns the schema.
   */
  schema: outer(
    wrapper(
      inner(
        icon('prefix'),
        prefix(),
        $attrs({
          'data-has-label': '$label !== ""',
        },
        selectInput(
          $if(
            '$slots.default',
            () => '$slots.default',
            optionSlot(
              $if(
                '$option.group',
                optGroup(optionSlot(option('$option.label'))),
                option('$option.label'),
              ),
            ),
          ),
        )),
        $attrs(
          {
            class: '$classes.labelFloating',
            'data-has-value': '$_value !== "" && $_value !== undefined',
            for: '$id',
          },
          label('$label'),
        ),
        $if('$attrs.multiple !== undefined', () => '', icon('select')),
        suffix(),
        icon('suffix'),
      ),
    ),
    help('$help'),
    messages(message('$message.value')),
  ),
  /**
   * The type of node, can be a list, group, or input.
   */
  type: 'input',
  /**
   * An array of extra props to accept for this input.
   */
  props: ['options', 'placeholder', 'optionsLoader'],
  /**
   * Forces node.props.type to be this explicit value.
   */
  forceTypeProp: 'select',
  /**
   * Additional features that should be added to your input
   */
  features: [options, selects, defaultIcon('select', 'select')],
  /**
   * The key used to memoize the schema.
   */
  schemaMemoKey: 'z1pv5zh86fm',
}
