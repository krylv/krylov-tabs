import { Meta, StoryObj } from "@storybook/react-vite";
import { TooltipTags } from "./TooltipTags";

const meta = {
  component: TooltipTags,
  title: "Variants",
} satisfies Meta<typeof TooltipTags>;

export default meta;

type Story = StoryObj<typeof TooltipTags>;

export const TooltipTagsStory: Story = {
  render: () => {
    const tags = [
      { id: 1, title: "Квартира с ремонтом" },
      { id: 2, title: "Квартира с ремонтом" },
      { id: 3, title: "Квартира с ремонтом" },
    ];
    return (
      <TooltipTags
        maxLength={2}
        tags={tags}
        tagsClassName="bg-white px-[10px] py-[5px] rounded-[15px]"
        containerClassName="w-fit flex gap-2"
        getTagTitle={(tag) => tag.title}
        tagsContainerClassName="gap-2"
        tooltipClassName="absolute right-0 top-0 translate-y-[40px] px-[10px] py-[5px] rounded-[20px] bg-white"
        buttonClassName="bg-white px-[5px] rounded-full"
        tagInTooltipClassName="text-nowrap"
      />
    );
  },
};
