import { useDispatch } from "react-redux";
import style from "./gameSection.module.css";
import { setSettings } from "../../redux/gamesReducer";
import translation from "./constants";

const FilterItem = ({ text, activeGenre, setActiveGenre, mutate }) => {
  const dispatch = useDispatch();

  async function clickHandler() {
    dispatch(setSettings(undefined, translation[text]));
    setActiveGenre(text);
  }

  return (
    <div
      className={`${style.filterItem} ${
        activeGenre === text ? style.filterItemSelected : null
      }`}
      onClick={async () => {
        await clickHandler();
        mutate();
      }}
    >
      {text}
    </div>
  );
};

export default FilterItem;
