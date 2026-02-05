import { IRowTags } from "./RowTagsTypes";

export const RowTags = <T extends object>({
  tags,
  containerClassName,
  children,
  isClickable
}: IRowTags<T>) => {
  return (
    <div className={containerClassName}>
      {tags.map((tag) => (
     <div className={`${isClickable?'pointer-events-auto':'pointer-events-none'}`}>
         {children(tag)}
     </div>
      ))}
    </div>
  );
};
