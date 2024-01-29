import type { StoryblokButtonLink } from './storyblok.alias'

export type MediaCta = {
  _uid: string;
  link: StoryblokButtonLink;
  type: string;
  size: string;
  label: string;
  dataIdentifier: string;
  gtm_category: string;
  gtm_action: string;
  gtm_label: string;
  gtm_value: string;
}
export type CtaImage = {
  filename: string;
  alt: string;
}
export type CtaProps = {
  heading: string;
  content: string;
  image: CtaImage;
  trustScore: string | null;
  trustpilotImage: string | null;
  minified: boolean;
  imageCentered: boolean;
  flipRow: boolean;

}

export type MediaBlockProps = {
  video: string;
  disclaimer: string;
  image: CtaImage;
  ctas: MediaCta[]|null;
  flipRow: boolean;
  fullWidth: boolean;
}
