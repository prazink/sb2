import type { AdviserImage } from './adviser.alias'
import type { StoryblokButtonLink } from './storyblok.alias'

export type InfoBlockCta = {
  _uid: string;
  link: StoryblokButtonLink;
  type: string;
  size: string;
  label: string;
  dataIdentifier: string;
}

export type CardInfoBlockProps = {
 heading: string;
 content: string;
 ctas: InfoBlockCta[];
 image: AdviserImage;
 imageCenter: boolean;
 imageFull: boolean;
}
