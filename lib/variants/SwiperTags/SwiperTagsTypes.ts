export interface ISwiperTags<T> {
  maxLength: number;
  tags: T[];
  gap: number;
  swiperClassName?: string;
  swiperSlideClassName?: string;
  wrapperClassName?:string
  getTagTitle: (tag: T) => string;
  getTagId: (tag: T) => number;
  buttonClassName?: string;
}
