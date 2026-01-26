import { ReactNode } from "react";

export interface ITooltipTags<T extends object> {
  maxLength: number;
  tags: T[];
  containerClassName?: string;
  tagsContainerClassName?: string;
  tagsClassName: string;
  tooltipClassName: string;
  getTagTitle: (tag: T) => string;
  getTagId?: (tag: T) => number;
  children:(tag:T) => ReactNode;
  buttonClassName?: string;
}
