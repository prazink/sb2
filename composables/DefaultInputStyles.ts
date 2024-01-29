export const useDefaultGlobalClasses = () => {
  return {
    outer: 'relative group',
    label: [
      'whitespace-nowrap overflow-hidden',
      'text-ellipsis text-lg leading-tighter text-font-storm',
    ].join(' '),
    inner: [
      'flex',
      'text-font-storm',
      'bg-white w-full rounded-lg',
      'border border-grey-500 group-hover:border-deep-sapphire',
      'transition-colors duration-200 ease-in-out',
    ].join(' '),
    input: [
      'bg-white w-full h-12 py-3 rounded-lg',
      'pl-4',
      'pr-4',
      'text-lg leading-tighter text-font-gray',
      'placeholder:text-font-storm',
      'outline-none focus:shadow-outline',
      'transition-colors duration-200 ease-in-out',
    ].join(' '),
    help: [
      'mt-0.5 ml-4',
      'text-xs leading-normal text-font-storm',
      'transition-colors duration-200 ease-in-out',
    ].join(' '),
    message: [
      'mt-0.5 px-4',
      'text-xs leading-normal w-full text-error',
    ].join(' '),
    prefixIcon: [
      'flex items-center justify-center w-6 h-6 p-3 pr-0 box-content',
      'transition-colors duration-200 ease-in-out',
      'pointer-events-none touch-none',
    ].join(' '),
    suffixIcon: [
      // 'absolute top-1/2 right-0 -translate-y-1/2 z-1',
      'flex items-center justify-center w-6 h-6 p-3 pl-0 box-content',
      'transition-colors duration-200 ease-in-out',
      'pointer-events-none touch-none',
    ].join(' '),
  }
}

export const useDefaultInputTextareaClasses = () => {
  return {
    input: 'h-24',
  }
}

export const useDefaultInputSelectClasses = () => {
  return {
    inner: 'relative',
    input: [
      'appearance-none text-ellipsis overflow-hidden bg-white',
      'flex-1 w-full h-full pl-4 py-1 pr-12 outline-none',
      'text-lg leading-tighter text-font-storm',
      'transition-colors duration-200 ease-in-out',
    ].join(' '),
    selectIcon: 'w-5 flex items-center mr-4',
    labelFloating: [
      'absolute z-2 top-1/2 left-4 right-12 -translate-y-1/2',
      'whitespace-nowrap overflow-hidden text-ellipsis',
      'text-lg leading-tighter text-font-storm',
      'transition-all duration-200 ease-in-out',
      'pointer-events-none touch-none',
    ].join(' '),
  }
}

export const useDefaultInputRadioClasses = () => {
  return {
    options: 'grid gap-2 grid-cols-1',
    wrapper: 'relative h-full block ',
    inner: '$reset absolute w-4 h-4 top-1/2 -translate-y-1/2 rounded-full',
    input: '$reset appearance-none absolute h-0 w-0 overflow-hidden opacity-0',
    decorator: [
      'rounded-full border border-font-storm w-4 h-4 block',
    ].join(' '),
    decoratorIcon: 'hidden absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 text-success',
    label: [
      '$reset',
      'hover:cursor-pointer',
      'flex items-center h-full rounded-md pl-8',
      'bg-transparent',
      'font-normal text-base leading-tight text-font-gray',
      'transition-colors duration-200 ease-in-out',
    ].join(' '),
    legend: 'block mb-4 font-bold text-lg leading-normal',
  }
}

export const useDefaultInputCheckboxClasses = () => {
  return {
    legend: 'block mb-4 font-bold text-lg leading-normal',
    options: 'grid gap-2 grid-cols-1',
    wrapper: 'relative h-full block ',
    inner: '$reset absolute w-5 h-5 top-1/2 -translate-y-1/2',
    input: '$reset appearance-none absolute h-0 w-0 overflow-hidden opacity-0',
    decorator: [
      'rounded border border-font-storm w-5 h-5 block',
    ].join(' '),
    decoratorIcon: 'hidden absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 text-success p-1',
    label: [
      '$reset',
      'hover:cursor-pointer',
      'flex items-center h-full rounded-md pl-8',
      'bg-transparent',
      'font-normal text-base leading-tight text-font-gray',
      'transition-colors duration-200 ease-in-out',
    ].join(' '),
  }
}
