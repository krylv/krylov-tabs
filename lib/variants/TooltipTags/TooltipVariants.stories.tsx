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
      "Квартира с ремонтом",
      "Старт продаж",
      "Паркинг в подарок",
      "Кладовая в подарок",
      "Акция на квартиру",
    ];
    return (
      <TooltipTags
        maxLength={2}
        tags={tags}
        tagsClassName="bg-white p-2 rounded-[15px]"
        containerClassName="w-fit flex gap-2"
        tagsContainerClassName="gap-2"
        tooltipClassName="absolute right-0 top-0 translate-y-3/4 bg-white"
        buttonClassName="bg-white p-2 rounded-full"
        tagInTooltipClassName="text-nowrap"
      />
    );
  },
};
