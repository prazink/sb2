import type { LinkTypeEnum } from '../enums/link-types.enum'
import type { StoryblokButtonLink } from './storyblok.alias'

export type SiteMenuItem = {
  _uid: string;
  label: string;
  target: {
    id: string;
    url: string;
    linktype: LinkTypeEnum;
    fieldtype: string; // #NOTE possible values multilink
    cached_url: string;
  };
  component: string;
  _editable: string;
}

export type SiteMenu = {
  _uid: string;
  heading: string;
  children: SiteMenuItem[];
  target: string;
  label: string;
  margin?: string;
}

export type SiteFooterProps = {
  menu: SiteMenu[];
  secondaryMenu: SiteMenu[];
  disclaimer: string;
  adviserDisclaimer: string;
  brokerDisclaimer: string;
  numberOfReviews: string;
  hasTrustpilot: boolean;
  isSmallerNav: boolean;
}

export type SiteHomeCta = {
  _uid: string;
  link: StoryblokButtonLink;
  type: string;
  size: string;
  label: string;
  dataIdentifier: string;
  isAnimated: boolean;
  isInverted: boolean;
}

export type SiteHomeAnimationProps = {
  heading: string;
  subHeading: string;
  desktopImage: {
    filename: string;
    alt: string;
    title: string;
  };
  mobileImages: {
    filename: string;
    alt: string;
    title: string;
  }[];
  ctas: SiteHomeCta[];
  showTrustpilot: boolean;
  trustScore: string;
  numberOfReviews: number;
}
