import { Tag } from "../../components";
import { IRowTags } from "./RowTagsTypes";

export const RowTags = <T extends object>({
  tags,
  containerClassName,
  tagClassName,
  getTagTitle,
  getTagId,
  ...props
}: IRowTags<T>) => {
  return (
    <div className={containerClassName}>
      {tags.map((tag) => (
        <Tag
          key={getTagId(tag)}
          title={getTagTitle(tag)}
          className={tagClassName}
          {...props}
        />
      ))}
    </div>
  );
};
