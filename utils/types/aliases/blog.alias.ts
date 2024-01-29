import type { AdviserImage } from './adviser.alias'

export type BlogAuthor = {
  name: string;
  image: AdviserImage;
}

export type BlogProps = {
  id: string;
  url: string;
  heading: string;
  description: string;
  image: AdviserImage;
  author: BlogAuthor;
  readTime: number;
  publishedAt: string;
  isExpanded: boolean;
  isHorizontal: boolean;
}
