import type { StoryblokButtonLink } from './storyblok.alias'

export type AdviserImage = {
  filename: string;
  alt: string;
}

export type AdviserProps = {
  fullName: string;
  phoneNumber: string;
  image: AdviserImage;
  trustScore: string | null;
  trustpilotImage: string | null;
}

export type AdviserCompressedProps = {
  fullName: string;
  image: AdviserImage;
  vertical: boolean;
  trustScore: string | null;
  trustpilotImage: string | null;
}

export type FindAnAdviserProps = {
  id: string;
  fullName: string;
  firstName: string;
  phoneNumber: string;
  image: AdviserImage;
  specialties: string[];
  customAdviserUrl: string;
  trustScore: string | null;
  trustpilotImage: string | null;
}

export type AdviserCta = {
  _uid: string;
  link: StoryblokButtonLink;
  type: string;
  size: string;
  label: string;
  dataIdentifier: string;
}

export type LenderPanelsProps = {
  heading: string;
  sub_heading: string;
  ctas: AdviserCta[]|null
  accreditations: string[];
  cta: boolean;
}
