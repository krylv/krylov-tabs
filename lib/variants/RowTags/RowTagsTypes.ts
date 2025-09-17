export interface IRowTags<T> {
  tags: T[];
  getTagTitle: (tag: T) => string;
  getTagId: (tag: T) => number;
  tagClassName?: string;
  containerClassName?: string;
  onClick?: (tag: T) => void;
  isClickable: boolean;
}
