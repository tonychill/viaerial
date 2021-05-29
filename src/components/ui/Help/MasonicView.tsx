import { FC } from "react";
import Card from "../Card";
import { Masonry } from "masonic";

interface MasonicViewProps {
  getTheStory?: () => void;
  stories: string[];
  maybeLoadMore: ((startIndex: number, stopIndex: number, items: string[]) => void) | undefined;
  id: string;
  gutter?: number;
}

interface Story {
  data: object;
}

interface CardWithDataProps {
  data: string;
}

const MasonicView: FC<MasonicViewProps> = ({ getTheStory, stories, maybeLoadMore, id, gutter = 32 }) => {
  const CardWithData: FC<CardWithDataProps> = ({ data }) => <Card kind="help" data={data} id={id} />;
  return <Masonry className="focus:outline-none" items={stories} columnGutter={gutter} columnWidth={250} overscanBy={1.25} render={CardWithData} />;
};

export default MasonicView;
