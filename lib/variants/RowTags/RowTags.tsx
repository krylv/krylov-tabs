import { Tag } from "../../components";
import { IRowTags } from "./RowTagsTypes";

export const RowTags = <T extends object>({
  tags,
  containerClassName,
  tagClassName,
  getTagTitle,
  getTagId,
  onClick,
  ...props
}: IRowTags<T>) => {
  return (
    <div className={containerClassName}>
      {tags.map((tag) => (
        <Tag<T>
          key={getTagId(tag)}
          title={getTagTitle(tag)}
          className={tagClassName}
          onClick={() => onClick(tag)}
          {...props}
        />
      ))}
    </div>
  );
};
