import style from "./gameSection.module.css";

const FilterItem = ({ text, activeGenre, setActiveGenre, mutate }) => {
  async function clickHandler() {
    setActiveGenre(text);
  }

  return (
    <div
      className={`${style.filterItem} ${
        activeGenre === text ? style.filterItemSelected : null
      }`}
      onClick={() => {
        clickHandler();
        mutate();
      }}
    >
      {text}
    </div>
  );
};

export default FilterItem;
