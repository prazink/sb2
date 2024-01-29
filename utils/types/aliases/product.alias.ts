export type ProductProps = {
  id: string;
  heading: string;
  content: string;
  features: string[];
  rateHeading: string;
  rate: string;
  comparisonRate: string;
  ratesDisclaimer: string;
  link: any;
  isAsset: boolean;
  tag: string;
  hasSaveButton: boolean;
  ctaText: string;
}

export type ProductSliderDetail = {
  heading: string;
  features: string[];
  rateHeading: string;
  rate: string;
  comparisonRate: string;
  ratesDisclaimer: string;
  link: any;
}

export type ProductSliderProps = {
  product: ProductSliderDetail;
}

export type ProductFeatureProps = {
  heading: string;
  featuresHeading: string;
  variablesHeading: string;
  feesHeading: string;
  features: string[];
  loanVariables: string[];
  fees: string[];
  cta: Object;
  isPrinting: boolean;
}

export type ProductFeatureListItem = {
  text: string;
  textValue: string;
  booleanValue: string;
}

export type ProductFeatureListItemProps = {
  heading: string;
  listItems: ProductFeatureListItem[];
}
