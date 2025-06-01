import { Meta, StoryObj } from "@storybook/react-vite";
import { Tags } from "./Tags";
import { Tag } from "../Tag/Tag";
import { useState } from "react";
const meta = {
  component: Tags,
  title: "Tabs",
} satisfies Meta<typeof Tags>;

export default meta;

type Story = StoryObj<typeof Tags>;

export const CollapsedTabs: Story = {
  render: () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const maxTabsLength = 1;
    const tabs = ["test1", "test2", "test3"];
    const tabsForRender = isCollapsed ? tabs.slice(0, maxTabsLength) : tabs;
    const hiddenTagsLength = tabs.length - tabsForRender.length;
    return (
      <Tags
        expandedLabel={`+${hiddenTagsLength}`}
        onExpand={() => setIsCollapsed(!isCollapsed)}
        buttonClassName={`bg-white px-[8.5px] py-[5px] rounded-full font-bold ${
          hiddenTagsLength === 0 && "hidden"
        }`}
        className="flex gap-2"
        hasExpandButton
        tabClassName="bg-white px-3 py-[6px] w-fit rounded-[29px]"
      >
        {tabsForRender.map((tab) => (
          <Tag title={tab} />
        ))}
      </Tags>
    );
  },
};
