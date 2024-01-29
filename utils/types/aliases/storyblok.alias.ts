import type { LinkTypeEnum } from '../enums/link-types.enum'

export type StoryblokButtonLink = {
  linktype: LinkTypeEnum;
  target: string;
  url: string;
  story: {
    url: string;
  };
  anchor: string;
  cached_url: string;
}

export type StoryblokButtonProps = {
  link: StoryblokButtonLink;
  bold: boolean;
}
