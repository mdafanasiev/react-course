import { ButtonHTMLAttributes, HTMLAttributes, ImgHTMLAttributes } from "react";

export interface FavouriteProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  inFavorites: boolean;
}