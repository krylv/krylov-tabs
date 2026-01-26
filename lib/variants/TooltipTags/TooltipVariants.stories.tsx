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
      { id: 1, title: "Квартира с ремонтом", new: "zek1" },
      { id: 2, title: "Квартира с ремонтом", new: "zek2" },
      { id: 3, title: "Квартира с ремонтом", new: "zek3" },
    ];
    return (
      <TooltipTags<{id:number,title:string,new:string}>
        maxLength={2}
        tags={tags}
        tagsClassName="bg-red-500 px-[10px] py-[5px] rounded-[15px]"
        containerClassName="w-fit flex gap-2"
        getTagTitle={(tag) => tag.title}
        getTagId={(tag) => tag.id}
        tagsContainerClassName="gap-2"
        tooltipClassName="absolute right-0 top-0 translate-y-[40px] px-[10px] py-[5px] rounded-[20px] bg-red-500"
        buttonClassName="bg-white px-[5px] rounded-full"
      >
        {(tag) => (
          <div className="text-nowrap ">{tag.new}</div>
        )}
      </TooltipTags>
    );
  },
};
