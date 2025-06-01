import { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";
const meta = {
  component: Tag,
  title: "Tab",
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof Tag>;
type StoryWithType = StoryObj<typeof Tag<{ id: number; value: string }>>;

export const CheckboxTag: StoryWithType = {
  args: {
    title: "Уютный район",
    className: "bg-white px-3 py-[6px] w-fit rounded-[29px] ",
    value: { id: 1, value: "sdwd" },
    isClickable: true,
    onClick: (data) => {
      console.log(data);
    },
  },
};

export const UITab: Story = {
  args: {
    title: "Уютный район",
    className: "bg-white px-3 py-[6px] w-fit rounded-[29px] ",
  },
};
