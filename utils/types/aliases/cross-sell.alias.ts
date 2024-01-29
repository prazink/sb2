import type { CrossSellTypesEnum } from '../enums/cross-sell.enum'
import type { AdviserImage } from './adviser.alias'

export type CrossSellProps = {
  heading: string;
  image: AdviserImage;
  link: any;
  type: CrossSellTypesEnum;
}
