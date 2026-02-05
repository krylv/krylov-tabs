import { Meta, StoryObj } from "@storybook/react-vite";
import { RowTags } from "./RowTags";

const tags = [
  { id: 1, name: "Квартира с ремонтом", value: "zek1" },
  { id: 2, name: "Квартира с ремонт", value: "zek3" },
  { id: 3, name: "Квартира с ремонтом", value: "zek3" },
];

const meta = {
  component: RowTags,
  title: "Variants",
} satisfies Meta<typeof RowTags>;

export default meta;

type Story = StoryObj<typeof RowTags>;

export const RowTagsStory: Story = {
  render: () => (
    <div className="w-full">
     <RowTags isClickable tags={tags} containerClassName="flex text-nowrap gap-3" >
      {(tag) => <div key={tag.id}>
        {tag.name}</div>}
     </RowTags>
    </div>
  ),
};
