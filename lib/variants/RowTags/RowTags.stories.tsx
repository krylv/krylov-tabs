import { Meta, StoryObj } from "@storybook/react-vite";
import { RowTags } from "./RowTags";

const tags = [
  "Квартира с ремонтом",
  "Старт продаж",
  "Паркинг в подарок",
  "Кладовая в подарок",
  "Акция на квартиру",
];

const meta = {
  component: RowTags,
  title: "Variants",
} satisfies Meta<typeof RowTags>;

export default meta;

type Story = StoryObj<typeof RowTags>;

export const RowTagsStory: Story = {
  render: () => <RowTags tags={tags} />,
};
