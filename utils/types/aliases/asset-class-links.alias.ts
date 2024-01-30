import type { LinkTypeEnum } from '../enums/link-types.enum'
import type { StoryblokButtonLink } from './storyblok.alias'

export type AssetsCta = {
    _uid: string;
    link: StoryblokButtonLink;
    type: string;
    size: string;
    label: string;
    target: {
      id: string;
      url: string;
      linktype: LinkTypeEnum;
      fieldtype: string; // #NOTE possible values multilink
      cached_url: string;
    };
    dataIdentifier: string;
    gtm_category: string;
    gtm_action: string;
    gtm_label: string;
    gtm_value: string;
    is_bold: boolean;

  }

export type AssetClassLinksProps = {
 heading: string;
 content: string;
 links: AssetsCta[]|null;
 icon: Object;
 type: string;
}
