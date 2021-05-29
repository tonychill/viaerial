import { FC, useState } from "react";
import Button from "../../core/Button";
import Modal from "../../core/Modal";
import Icon from "../../core/Icons";

interface FilterButtonProps {
  handleGetResults: () => Promise<void>;
}
const FilterButton: FC<FilterButtonProps> = ({ handleGetResults }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={`fixed bottom-24 right-4 z-${isModalOpen ? "50" : "40"}`}>
      <div className="mb-3">
        <Button variant="filter" onClick={handleModalToggle} icon={<Icon variant="filter" />} />
      </div>
      <Modal open={isModalOpen} toggleModal={handleModalToggle}>
        This is the filter modal
      </Modal>
    </div>
  );
  function handleModalToggle() {
    setIsModalOpen(!isModalOpen);
  }
};

export default FilterButton;

/*** Notes ***
 * 1. User can enter their prefs.
 * 2. User can submit their prefs.
 * 3. The 'handlerGetResults' will fetch the refined results from the server.
 * 4. The user's view will then be refreshed.
 *
 */
