import { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";
import { useState } from "react";
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

export const UITag: Story = {
  args: {
    title: "Уютный район",
    className: "bg-white px-3 py-[6px] w-fit rounded-[29px] ",
  },
};

export const TagWithIcon: Story = {
  args: {
    title: "Акции",
    hasIcon: true,
    icon: <img src="assets/svg/Discount.svg" />,
  },
  render: () => (
    <Tag
      title="Акции"
      className="bg-black text-white flex items-center gap-2 px-3 py-[6px] w-fit rounded-[29px]"
      hasIcon
      icon={<img className="size-[13px] " src="assets/svg/Discount.svg" />}
    />
  ),
};

export const ClickableTag: Story = {
  render: () => {
    const [isActive, setIsActive] = useState(false);

    return (
      <Tag
        title="Уютный район"
        className="bg-white px-3 py-[6px] w-fit rounded-[29px] "
        isClickable
        value={{ id: 1, label: "test" }}
        isActive={isActive}
        activeClassName="!bg-red-500"
        onClick={() => setIsActive(!isActive)}
      />
    );
  },
};
