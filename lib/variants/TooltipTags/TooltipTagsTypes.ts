import { ReactNode } from "react";

export interface ITooltipTags<T extends object> {
  maxLength: number;
  tags: T[];
  containerClassName?: string;
  tooltipClassName: string;
  buttonClassName?: string;
  tagsChildren:(tag:T) => ReactNode
  tooltipChildren:(tags:T) => ReactNode
}
