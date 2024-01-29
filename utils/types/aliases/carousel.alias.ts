export type CarouselProps = {
  component: string|null;
  slides: any[];
  initialSlide: number;
  dots: boolean;
  navButtons: boolean;
  centerMode: boolean;
  slidesToShow: number;
  infinite: boolean;
  autoplay: boolean;
  autoplaySpeed: number;
  slideWidth: number;
}
