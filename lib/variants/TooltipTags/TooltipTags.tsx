import { useState } from "react";
import { ITooltipTags } from "./TooltipTagsTypes";
import { Tag, Tags } from "../../components";

export const TooltipTags = ({
  maxLength,
  tags,
  containerClassName,
  tagsClassName,
  tagsContainerClassName,
  tooltipClassName,
  tagInTooltipClassName,
  buttonClassName,
}: ITooltipTags) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tagsForView = tags.slice(0, maxLength);
  const tagsForTooltip = tags.slice(maxLength);
  const hiddenTagsLength = tags.length - maxLength;

  return (
    <div className={`w-fit flex gap-2 ${containerClassName}`}>
      <Tags
        tagClassName={tagsClassName}
        className={`flex ${tagsContainerClassName}`}
        expandedLabel={`+${hiddenTagsLength}`}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
      >
        {tagsForView.map((tag, index) => (
          <Tag key={index} title={tag} />
        ))}
      </Tags>
      <div className="relative flex items-center">
        <button
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
          className={buttonClassName}
        >{`+${hiddenTagsLength}`}</button>
        {isTooltipVisible && (
          <div className={tooltipClassName}>
            {tagsForTooltip.map((tag, index) => (
              <p className={tagInTooltipClassName} key={index}>
                {tag}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
