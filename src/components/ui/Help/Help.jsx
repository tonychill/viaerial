import { useInfiniteLoader } from "masonic";
import { useEffect, useState } from "react";
import { getContent } from "../../../hooks/contentful";
import MasonicView from "./MasonicView";

const Help = ({ openedStory = null, displayCta, Auth, limit = 10, articles }) => {
  const [localStories, setLocalStories] = useState([]);

  const maybeLoadMore = useInfiniteLoader(loader, {
    isItemLoaded: (index, items) => !!items[index],
    minimumBatchSize: limit,
    threshold: 3,
  });

  useEffect(() => {
    if (localStories.length === 0) {
      setInitialStories();
    }
    async function setInitialStories() {
      try {
        let params = {
          limit,
          type: "story",
          from: "useEffect",
        };
        setLocalStories(await getContent(params));
      } catch (error) {
        console.log(error);
      }
    }
  }, [localStories]);
  console.log(localStories);
  return (
    <div className="mx-4 md:mx-auto max-w-7xl ">
      {localStories === undefined ? null : <MasonicView gutter={16} stories={localStories} maybeLoadMore={maybeLoadMore} id={articles[0].sys.id} />}
    </div>
  );

  async function loader(startIndex, stopIndex, currentItems) {
    const skip = startIndex;
    const limit = stopIndex - startIndex + 1;

    try {
      const nextItems = await getContent({ skip, limit, type: "story" });
      if (nextItems.length > 0) setLocalStories((current) => [...current, ...nextItems]);
      /** TODO: Maybe add some logic that will make sure that the client has not accumulated too much content.
       * Essentially trim the localStories array if needed.
       * Keep in mind the the array should be looked at in three parts: initial load (middle but initially on top; index 0 - n),
       * scroll load (@ bottom of screen but top of array; index n+1 - n+1+skip), and the newpush (content pushed from the server:
       * spliced in @ index 0. )
       *
       * More than likely the Mosaic component will need to be completely rerendered so that the new array elements pushed from the
       * can be accounted for appropriately.
       */
    } catch (error) {
      console.log("Error from spread attempt:  ", error);
    }
  }
};

export default Help;
