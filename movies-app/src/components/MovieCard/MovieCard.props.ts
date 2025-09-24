export interface MovieCardProps {
  movie: {
    id: string,
    title: string,
    image?: string,
    rating: number,
    releaseDate?: number
  }
}