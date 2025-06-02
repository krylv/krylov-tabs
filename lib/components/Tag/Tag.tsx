import { ReactNode } from "react";

export interface TagProps<T = unknown> {
  title: string;
  className?: string;
  isClickable?: boolean;
  onClick?: (data: T) => void;
  value?: T;
  hasIcon?: boolean;
  icon?: ReactNode;
  isActive?: boolean;
  activeClassName?: string;
}

export const Tag = <T,>({
  title,
  className,
  isClickable,
  onClick,
  value,
  hasIcon,
  icon,
  activeClassName,
  isActive,
}: TagProps<T>) => {
  const handleClick = () => {
    if (isClickable) {
      onClick?.(value);
    }
  };
  return (
    <div
      className={` transition-all duration-300 ${className} ${
        isActive && activeClassName
      } ${
        isClickable
          ? "pointer-events-auto cursor-pointer"
          : "pointer-events-auto"
      }`}
      onClick={handleClick}
    >
      {hasIcon && icon}
      {title}
    </div>
  );
};
