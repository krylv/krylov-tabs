import { Meta, StoryObj } from "@storybook/react-vite";
import { SwiperTags } from "./SwiperTags";
const tags = [
  { id: 1, title: "Квартира с ремонтом" },
  { id: 2, title: "Квартира с ремонтом" },
  { id: 3, title: "Квартира с ремонтом" },
];

const meta = {
  component: SwiperTags,
  title: "Variants",
} satisfies Meta<typeof SwiperTags>;

export default meta;

type Story = StoryObj<typeof SwiperTags>;

export const SwoperTooltipStory: Story = {
  render: () => {
    return (
      <div className="w-[500px]">
        <SwiperTags
          swiperClassName="!overflow-visible"
          swiperSlideClassName="bg-white p-2 rounded-[20px]"
          buttonClassName="bg-white p-2 rounded-full"
          tags={tags}
          maxLength={2}
          getTagTitle={(tag) => tag.title}
          gap={15}
        />
      </div>
    );
  },
};
