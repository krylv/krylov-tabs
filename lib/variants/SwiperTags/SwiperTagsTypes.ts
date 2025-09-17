export interface ISwiperTags<T> {
  maxLength: number;
  tags: T[];
  gap: number;
  swiperClassName?: string;
  swiperSlideClassName?: string;
  getTagTitle: (tag: T) => string;
  getTagId: (tag: T) => number;
  buttonClassName?: string;
}
