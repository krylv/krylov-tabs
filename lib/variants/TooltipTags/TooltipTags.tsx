import { useState } from "react";
import { ITooltipTags } from "./TooltipTagsTypes";

export const TooltipTags = <T extends object>({
  maxLength,
  tags,
  containerClassName,
  tooltipClassName,
  buttonClassName,
  tagsChildren,
  tooltipChildren
}: ITooltipTags<T>) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const tagsForView = tags.slice(0, maxLength);
  const tagsForTooltip = tags.slice(maxLength);
  const hiddenTagsLength = tags.length - maxLength;

  return (
    <div className={`${containerClassName}`}>
     {tagsForView.map(tag => <div>
      {tagsChildren(tag)}
     </div>)}
     {hiddenTagsLength > 0 &&  <button className={buttonClassName} onMouseEnter={() => setIsTooltipVisible(true)} onMouseLeave={() => setIsTooltipVisible(false)}>
        {`+${hiddenTagsLength}`}
      </button>}
      {isTooltipVisible && <div className={tooltipClassName}>
        {tagsForTooltip.map(tag => tooltipChildren(tag))}
        </div>}
    </div>
  );
};
