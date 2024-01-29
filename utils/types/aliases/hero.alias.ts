import type { AdviserImage } from './adviser.alias'
import type { StoryblokButtonLink } from './storyblok.alias'

export type HeroAboutCta = {
  _uid: string;
  link: StoryblokButtonLink;
  type: string;
  size: string;
  label: string;
  dataIdentifier: string;
}

export type HeroAboutProps = {
  heading: string;
  subHeading: string;
  desktopImage: AdviserImage;
  mobileImage: AdviserImage;
  tabletImage: AdviserImage;
  ctas: HeroAboutCta[]|null;
}
