export interface MovieCardProps {
  cardData: {
    id: number,
    title: string;
    filename: string;
    inFavourites: boolean;
    rating: number
  }
}