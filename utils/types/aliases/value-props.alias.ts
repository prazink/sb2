import type { StoryblokButtonLink } from './storyblok.alias'

export type ValuePropsItemContentCta = {
  _uid: string;
  link: StoryblokButtonLink;
  type: string;
  label: string;
}

export type ValuePropsItemContent = {
  title: string;
  summary: string;
  cta: ValuePropsItemContentCta[];
}

export type ValuePropsItem = {
  content: ValuePropsItemContent;
}

export type ValuePropsProps = {
  heading: string;
  summary: string;
  items: ValuePropsItem[];
}
