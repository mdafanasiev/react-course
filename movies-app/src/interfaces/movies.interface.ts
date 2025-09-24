import { MovieCardProps } from "../components/MovieCard/MovieCard.props";

export interface IMovies {
  ok: boolean;
  description: IMovieDescription[];
  error_code: number;
}

export interface IMovieDescription {
  "#TITLE": string;
  "#YEAR"?: number;
  "#IMDB_ID": string;
  "#RANK": number;
  "#ACTORS": string;
  "#AKA": string;
  "#IMDB_URL": string;
  "#IMDB_IV": string;
  "#IMG_POSTER"?: string;
  photo_width?: number;
  photo_height?: number;
}

export interface IMovieDetails {
  short: IShort;
  imdbId: string;
}

export interface IShort {
  "@type": string;
  name: string;
  description: string;
  review: Review;
  aggregateRating: IAggregateRating;
  genre: string[];
  datePublished: string;
  duration: string;
  image: string
}

export interface IAggregateRating {
  ratingValue: number;
}

interface Review {
  name: string	
  dateCreated: Date,
  reviewBody: string,
}

type MovieDefaultProps<T> = {
	[P in keyof T] : T[P]
}
export interface MovieDetails extends MovieDefaultProps<MovieCardProps["movie"]> {
  type: string;
  genre: string[];
  duration: string;
  description: string;
  review: Review;
}
