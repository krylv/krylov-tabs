import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MouseEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
    >
      <AnimatePresence>
        {tagsForRender.map((tag) => {
          const tagId = getTagId(tag);
          return (
            <SwiperSlide className={`!w-fit `} key={tagId}>
              <motion.div
                key={tagId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * tagId, duration: 0.3 }}
                className={swiperSlideClassName}
              >
                <p>{getTagTitle(tag)}</p>
              </motion.div>
            </SwiperSlide>
          );
        })}
      </AnimatePresence>
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
