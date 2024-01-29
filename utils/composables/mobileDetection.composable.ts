import { useMediaQuery } from '@vueuse/core'

export function useMobileDetection () {
  /* Computed props */
  // #NOTE v1 window.innerWidth <= 640
  const isMobile = useMediaQuery('(max-width: 640px)')

  return {
    isMobile,
  }
}
