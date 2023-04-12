export interface IItem {
  id?: string;
  title?: string;
  image?: React.ReactNode;
  description?: string[];
  price?: string;
  subTitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  isPopular?: boolean;
}
