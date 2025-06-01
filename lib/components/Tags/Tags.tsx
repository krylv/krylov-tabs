import { Children, ReactNode } from "react";
import { motion } from "framer-motion";
export interface TagsProps {
  children: ReactNode;
  className?: string;
  tabClassName?: string;
  buttonClassName?: string;
  hasExpandButton?: boolean;
  onExpand?: VoidFunction;
  expandedLabel?: string;
}

export const Tags = ({
  children,
  tabClassName,
  className,
  buttonClassName,
  expandedLabel,
  hasExpandButton,
  onExpand,
}: TagsProps) => {
  const tags = Children.toArray(children);
  return (
    <div className={`${className} `}>
      {tags.map((tab, index) => (
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          transition={{ delay: 0.02 * index }}
          key={index}
          className={`${tabClassName}`}
        >
          {tab}
        </motion.div>
      ))}

      {hasExpandButton && (
        <button className={`${buttonClassName}`} onClick={onExpand}>
          {expandedLabel}
        </button>
      )}
    </div>
  );
};
