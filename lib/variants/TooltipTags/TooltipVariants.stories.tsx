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
      { id: 1, title: "Квартира с ремонтом", with_selection: true },
      { id: 2, title: "Квартира с ремонтом", with_selection: false },
      { id: 3, title: "Квартира с ремонтом", with_selection: false },
    ];
    return (
      <TooltipTags<{id:number,title:string,with_selection:boolean}>
        maxLength={2}
        tags={tags}
        containerClassName={`w-fit flex gap-2 relative ${tags}`}
        tagsChildren={(tag) => <div key={tag.id}>{tag.title}</div>}
        tooltipClassName="absolute right-0 top-0 translate-y-[40px] px-[10px] py-[5px] rounded-[20px] bg-red-500"
        buttonClassName="bg-white px-[5px] rounded-full"
        tooltipChildren={(tag) => <p key={tag.id}>{tag.title}</p>}
      />
    );
  },
};
