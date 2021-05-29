import { FC } from "react";
import Icon from "../../core/Icons";
import Type from "../../core/Type";

interface AmenitiesListProps {
  items?: string[];
}

const AmenitiesList: FC<AmenitiesListProps> = ({ items }) => {
  return (
    <div>
      {" "}
      <ul className="flex flex-wrap flex-row">
        {items?.map((item, idx) => (
          <li key={idx} className="w-1/2 mb-3">
            <div className="flex w-full">
              <div className="flex w-full">
                <div className="mr-3">🎉{/* <Icon variant="rule" /> */}</div>
                <div className="">
                  <Type variant="base">{item}</Type>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { AmenitiesList };

/*** Notes ***
 * Notes go here.
 */

/**
 * 

 */
