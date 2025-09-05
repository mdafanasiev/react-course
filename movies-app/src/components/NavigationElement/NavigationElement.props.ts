import { AnchorHTMLAttributes } from "react";

export interface NavigationElementProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string
}