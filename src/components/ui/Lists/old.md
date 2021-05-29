import { FC } from "react";
import Icon from "../../core/Icons";
import Type from "../../core/Type";

interface ExperienceListProps {
  items?: ExperienceRule[] | string[];
  type?: "full" | "half";
}

interface ExperienceRule {
  fields: { heading: string; description: string };
}
interface ListItemProps {
  item: string | ExperienceRule;
}
const ListItem: FC<ListItemProps> = ({ item }) => (
  <div className="flex w-full">
    {typeof item === "string" ? (
      <div className="flex w-full">
        <div className="mr-3">🎉{/* <Icon variant="rule" /> */}</div>
        <div className="">
          <Type variant="base">{item}</Type>
        </div>
      </div>
    ) : (
      <div className="flex w-full items-center">
        <div className="mr-3">🎉{/* <Icon variant="rule" /> */}</div>
        <div className="">
          <div>
            <Type variant="title">{item.fields.heading}</Type>
          </div>
          <div>
            <Type variant="base">{item.fields.description}</Type>
          </div>
        </div>
      </div>
    )}
  </div>
);
const ExperienceList: FC<ExperienceListProps> = ({ items, type }) => {
  return (
    <div>
      <ul className="flex flex-wrap flex-row">{getExperienceListOfType(type)}</ul>
    </div>
  );
  function getExperienceListOfType(type: string | undefined) {
    switch (type) {
      case "full":
        return (
          <>
            {items?.map((item: any, idx: number) => {
              return (
                <li key={idx} className="w-full mb-3">
                  <ListItem item={item} />
                </li>
              );
            })}
          </>
        );
      case "half":
        return (
          <>
            {items?.map((item: any, idx: number) => (
              <li key={idx} className="w-1/2 mb-3">
                <ListItem item={item} />
              </li>
            ))}
          </>
        );
    }
  }
};

export { ExperienceList };

/*** Notes ***
 * Notes go here.
 */
