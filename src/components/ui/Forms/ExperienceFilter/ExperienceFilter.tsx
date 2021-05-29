import { FC, useState } from "react";

interface ExpeirenceFilterProps {
  filterOptions: string;
}
const ExperienceFilter: FC<ExpeirenceFilterProps> = ({ filterOptions }) => {
  const [currentOptions, setCurrentOptions] = useState();
  return (
    <div>
      <div>ExperienceFilter</div>
    </div>
  );
};

export default ExperienceFilter;

/*** Notes ***
 * Notes go here.
 */
