import { ReactNode } from "react";

export interface ISwiperTags<T> {
  maxLength: number;
  tags: T[];
  gap: number;
  swiperClassName?: string;
  swiperSlideClassName?: string;
  wrapperClassName?:string
  getTagId: (tag: T) => number;
  buttonClassName?: string;
  children:(tag:T) => ReactNode
}
