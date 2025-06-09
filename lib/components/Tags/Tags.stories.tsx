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
        onMouseEnter={() => setIsCollapsed(!isCollapsed)}
        buttonClassName={`bg-white px-[8.5px] py-[5px] rounded-full font-bold ${
          hiddenTagsLength === 0 && "hidden"
        }`}
        className="flex gap-2"
        hasExpandButton
        tagClassName="bg-white px-3 py-[6px] w-fit rounded-[29px]"
      >
        {tabsForRender.map((tab) => (
          <Tag title={tab} />
        ))}
      </Tags>
    );
  },
};

export const TooltipTags: Story = {
  render: () => {
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const maxLength = 3;
    const tags = ["test1", "test2", "test3", "test4", "test5"];
    const tagsForView = tags.slice(0, maxLength);
    const tagsForTooltip = tags.slice(maxLength);
    const hiddenTagsLength = tags.length - maxLength;

    return (
      <div className="w-fit flex gap-2">
        <Tags
          tagClassName="bg-white px-3 py-[6px] rounded-[29px]"
          className="flex gap-2 w-fit"
          expandedLabel={`+${hiddenTagsLength}`}
          onMouseEnter={() => setIsTooltipVisible(true)}
          onMouseLeave={() => setIsTooltipVisible(false)}
        >
          {tagsForView.map((tag, index) => (
            <Tag key={index} title={tag} />
          ))}
        </Tags>
        <div className="relative">
          <button
            onMouseEnter={() => setIsTooltipVisible(true)}
            onMouseLeave={() => setIsTooltipVisible(false)}
            className="bg-white px-[8.5px] py-[5px] rounded-[29px] font-bold"
          >{`+${hiddenTagsLength}`}</button>
          {isTooltipVisible && (
            <div className="absolute left-0 top-full mt-1 bg-white p-3 rounded shadow-lg z-10">
              {tagsForTooltip.map((tag, index) => (
                <p key={index}>{tag}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  },
};
