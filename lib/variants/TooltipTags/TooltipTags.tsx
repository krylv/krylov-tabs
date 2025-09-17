import { useState } from "react";
import { ITooltipTags } from "./TooltipTagsTypes";
import { Tag, Tags } from "../../components";

export const TooltipTags = <T extends object>({
  maxLength,
  tags,
  containerClassName,
  tagsClassName,
  tagsContainerClassName,
  tooltipClassName,
  tagInTooltipClassName,
  buttonClassName,
  getTagTitle,
  getTagId,
}: ITooltipTags<T>) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tagsForView = tags.slice(0, maxLength);
  const tagsForTooltip = tags.slice(maxLength);
  const hiddenTagsLength = tags.length - maxLength;

  return (
    <div className={`${containerClassName}`}>
      <Tags
        tagClassName={tagsClassName}
        className={`flex ${tagsContainerClassName}`}
        expandedLabel={`+${hiddenTagsLength}`}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        {tagsForView.map((tag) => (
          <Tag<T> key={getTagId(tag)} title={getTagTitle(tag)} />
        ))}
      </Tags>
      <div className="relative flex items-center">
        <button
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          className={`h-full ${buttonClassName}`}
        >{`+${hiddenTagsLength}`}</button>
        {isTooltipVisible && (
          <div className={tooltipClassName}>
            {tagsForTooltip.map((tag, index) => (
              <p className={tagInTooltipClassName} key={index}>
                {getTagTitle(tag)}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
