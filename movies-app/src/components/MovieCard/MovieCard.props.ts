export interface MovieCardProps {
  movie: {
    id: string,
    title: string,
    image?: string,
    inFavorites?: boolean,
    rating: number,
    releaseDate?: number
  }
}