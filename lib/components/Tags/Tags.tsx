import { Children, ReactNode } from "react";
export interface TagsProps {
  children: ReactNode;
  className?: string;
  tagClassName?: string;
  buttonClassName?: string;
  hasExpandButton?: boolean;
  onExpand?: VoidFunction;
  onMouseEnter?: VoidFunction;
  onMouseLeave?: VoidFunction;
  expandedLabel?: string;
}

export const Tags = ({
  children,
  tagClassName,
  className,
  buttonClassName,
  expandedLabel,
  hasExpandButton,
  onExpand,
  onMouseEnter,
  onMouseLeave,
}: TagsProps) => {
  const tags = Children.toArray(children);
  return (
    <div className={`${className}`}>
      {tags.map((tag, index) => (
        <div key={index} className={`${tagClassName}`}>
          {tag}
        </div>
      ))}

      {hasExpandButton && (
        <button
          className={`${buttonClassName}`}
          onClick={onExpand}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {expandedLabel}
        </button>
      )}
    </div>
  );
};
