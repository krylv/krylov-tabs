import { Meta, StoryObj } from "@storybook/react-vite";
import { RowTags } from "./RowTags";

const tags = [
  { id: 1, title: "Квартира с ремонтом" },
  { id: 2, title: "Квартира с ремонтом" },
  { id: 3, title: "Квартира с ремонтом" },
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
        onClick={() => console.log("clicked")}
      />
    </div>
  ),
};
