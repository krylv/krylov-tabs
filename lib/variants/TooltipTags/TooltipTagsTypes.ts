export interface ITooltipTags<T extends object> {
  maxLength: number;
  tags: T[];
  containerClassName?: string;
  tagsContainerClassName?: string;
  tagsClassName: string;
  tooltipClassName: string;
  tagInTooltipClassName?: string;
  getTagTitle: (tag: T) => string;
  buttonClassName?: string;
}
