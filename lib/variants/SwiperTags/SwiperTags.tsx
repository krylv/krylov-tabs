import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MouseEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ISwiperTags } from "./SwiperTagsTypes";

export const SwiperTags = <T extends object>({
  maxLength = 2,
  tags,
  gap,
  buttonClassName,
  swiperClassName,
  swiperSlideClassName,
  getTagTitle,
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
        {tagsForRender.map((tag, index) => (
          <SwiperSlide className={`!w-fit ${swiperSlideClassName}`} key={index}>
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * index, duration: 0.3 }}
            >
              <p>{getTagTitle(tag)}</p>
            </motion.div>
          </SwiperSlide>
        ))}
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
