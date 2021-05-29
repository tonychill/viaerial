import { FC } from "react";
import Icon from "../../core/Icons";
import Type from "../../core/Type";

interface RulesListProps {
  items?: ExperienceRule[];
}

export interface ExperienceRule {
  fields: { heading: string; description: string };
}

const RulesList: FC<RulesListProps> = ({ items }) => {
  return (
    <div className="flex w-full">
      <ul className="flex flex-wrap flex-row">
        {items?.map((item, idx) => {
          return (
            <li key={idx} className="w-full mb-3">
              <div className="flex w-full items-center">
                <div className="mr-3">📃{/* <Icon variant="rule" /> */}</div>
                <div className="">
                  <div>
                    <Type variant="title">{item.fields.heading}</Type>
                  </div>
                  <div>
                    <Type variant="base">{item.fields.description}</Type>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export { RulesList };

/*** Notes ***
 * Notes go here.
 */
