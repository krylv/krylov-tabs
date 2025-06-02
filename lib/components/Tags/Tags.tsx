import { Children, ReactNode } from "react";
import { motion } from "framer-motion";
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
      {tags.map((tab, index) => (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ delay: 0.02 * index }}
          key={index}
          className={`${tagClassName}`}
        >
          {tab}
        </motion.div>
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
