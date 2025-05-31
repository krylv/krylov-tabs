import { FC } from "react";

export interface TabProps {
  title: string;
  className?: string;
}

const Tab: FC<TabProps> = (props) => {
  return <div className={`${props.className}`}>{props.title}</div>;
};

export default Tab;
