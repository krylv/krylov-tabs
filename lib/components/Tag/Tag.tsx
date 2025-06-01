export interface TagProps<T = unknown> {
  title: string;
  className?: string;
  isClickable?: boolean;
  onClick?: (data: T) => void;
  value?: T;
}

export const Tag = <T,>({
  title,
  className,
  isClickable,
  onClick,
  value,
}: TagProps<T>) => {
  const handleClick = () => {
    if (isClickable) {
      onClick?.(value);
    }
  };
  return (
    <div
      className={`${className} ${
        isClickable
          ? "pointer-events-auto cursor-pointer"
          : "pointer-events-auto"
      }`}
      onClick={handleClick}
    >
      {title}
    </div>
  );
};
