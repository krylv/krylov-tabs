import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MouseEvent, useState } from "react";
import { ISwiperTags } from "./SwiperTagsTypes";

export const SwiperTags = <T extends object>({
  maxLength = 2,
  tags,
  gap,
  buttonClassName,
  swiperClassName,
  swiperSlideClassName,
  getTagTitle,
  getTagId,
  wrapperClassName
}: ISwiperTags<T>) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const tagsForRender = isCollapsed ? tags.slice(0, maxLength) : tags;
  const hiddenTagsLength = tags.length - tagsForRender.length;

  const handleClickCollapsed = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsCollapsed(false);
  };

  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={gap}
      className={swiperClassName}
      wrapperClass={wrapperClassName}
    >
        {tagsForRender.map((tag) => {
          const tagId = getTagId(tag);
          return (
            <SwiperSlide className={`!w-fit `} key={tagId}>
              <div
                key={tagId}
                className={swiperSlideClassName}
              >
                <p>{getTagTitle(tag)}</p>
              </div>
            </SwiperSlide>
          );
        })}
      {hiddenTagsLength > 0 && (
        <SwiperSlide className="!w-fit">
          <button
            onMouseEnter={() => setIsCollapsed(false)}
            onClick={handleClickCollapsed}
            className={buttonClassName}
          >
            {isCollapsed && `+${hiddenTagsLength}`}
          </button>
        </SwiperSlide>
      )}
    </Swiper>
  );
};
