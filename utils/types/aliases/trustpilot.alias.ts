export type TrustPilotReview = {
  star_image: string;
  review_date: string;
  title: string;
  text: string;
  consumer: string;
  adviser_url: string;
  adviser_guid: string;
  adviser_name: string;
}

export type TrustPilotWidgetProps = {
  trustScore: string,
  starImage: string | null,
  starString: string,
  trustpilotUrl: string,
  numberOfReviews: number,
  showTrustScore: boolean,
  showNumberOfReviews: boolean,
  theme: string,
  alignmentClass: string,
}
