import { ReactNode } from "react";

export interface IRowTags<T> {
  tags: T[];
  containerClassName?: string;
  children:(tag:T) => ReactNode
  isClickable: boolean;
}
