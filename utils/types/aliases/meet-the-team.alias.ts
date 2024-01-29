import type { AdviserImage } from './adviser.alias'

export type MeetTheTeamProps = {
  name: string;
  pronouns: string;
  title: string;
  descriptionHeadline: string;
  descriptionBody: string;
  image: AdviserImage;
  backgroundImage: string;
  showTag: boolean;
  tags: string[] | [];
  filters?: string[] | [];
}

export type TeamsProps = {
  items: MeetTheTeamProps[];
  showTag: boolean;
}
