import { FC } from "react";

export interface TabProps {
  title: string;
}

const Tab: FC<TabProps> = (props) => {
  return <div>{props.title}</div>;
};

export default Tab;
