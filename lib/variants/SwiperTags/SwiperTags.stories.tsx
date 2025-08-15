import { Meta, StoryObj } from "@storybook/react-vite";
import { SwiperTags } from "./SwiperTags";
const tags = [
  "Квартира с ремонтом",
  "Старт продаж",
  "Паркинг в подарок",
  "Кладовая в подарок",
  "Акция на квартиру",
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
          tags={tags}
          maxLength={2}
          gap={30}
        />
      </div>
    );
  },
};
