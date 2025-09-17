import { Meta, StoryObj } from "@storybook/react-vite";
import { RowTags } from "./RowTags";

const tags = [
  { id: 1, title: "Квартира с ремонтом", value: "zek1" },
  { id: 2, title: "Квартира с ремонтом", value: "zek2" },
  { id: 3, title: "Квартира с ремонтом", value: "zek3" },
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
      <RowTags
        tags={tags}
        getTagTitle={(tag) => tag.title}
        isClickable={true}
        getTagId={(tag) => tag.id}
        containerClassName="flex gap-2 flex-wrap"
        tagClassName="bg-white p-2 rounded-[15px] cursor-pointer"
        onClick={(tag) => {
          let value = tag.value;
          value += "35";
          console.log(value);
        }}
      />
    </div>
  ),
};
