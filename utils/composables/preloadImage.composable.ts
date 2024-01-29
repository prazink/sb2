import { ref, onMounted } from 'vue'
import { WindowInnerWidthSizesEnum } from '../types/enums/window-sizes.enum'

export function usePreloadImage (desktopImageRef: any, mobileImageRef: any) {
  /* Reactive props */
  const isDesktop = ref(false)
  const preloadImageLink = ref(null as any)

  /* Method handlers */
  const handleGeneratePreloadLink = (image: any) => {
    if (!image) {
      return {}
    }

    const href = image.filename || (image[0] && image[0].filename)
    const webpHref = href ? href + '?format=webp' : '' // Convert the image URL to webp format

    return {
      rel: 'preload',
      as: 'image',
      type: 'image/webp',
      href: webpHref,
    }
  }

  const handleOnMount = () => {
    const preloadLinks = []

    if (isDesktop.value) {
      preloadLinks.push(handleGeneratePreloadLink(desktopImageRef))
    } else {
      const mobileImage = mobileImageRef.length ? mobileImageRef[0] : null

      if (!mobileImage) {
        preloadLinks.push(handleGeneratePreloadLink(mobileImage))
      }
    }

    preloadImageLink.value = preloadLinks.filter(Boolean)
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      isDesktop.value = window.innerWidth > WindowInnerWidthSizesEnum.SEVEN_SIX_EIGHT // Assuming 768px as the breakpoint
    }

    handleOnMount()
  })

  return {
    isDesktop,
    preloadImageLink,
  }
}
