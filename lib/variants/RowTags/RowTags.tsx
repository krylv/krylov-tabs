import { Tag } from "../../components";
import { IRowTags } from "./RowTagsTypes";

export const RowTags = ({ tags }: IRowTags) => {
  return (
    <div className="flex gap-5 ">
      {tags.map((tag) => (
        <Tag title={tag} />
      ))}
    </div>
  );
};
