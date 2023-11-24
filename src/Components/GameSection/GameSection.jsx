import { useState } from "react";
import FilterItem from "./FilterItem";
import style from "./gameSection.module.css";
import GameCard from "./GameCard";

const GameSection = () => {
  const [activeGenre, setActiveGenre] = useState("ВСІ");
  const [activeAge, setActiveAge] = useState(true);
  const genres = [
    "ВСІ",
    "БЕЗКОШТОВНІ",
    "MOBA",
    "ШУТЕРИ",
    "ЛАУНЧЕРИ",
    "MMORPG",
    "СТРАТЕГІЇ",
    "ФАЙТИНГ",
    "ГОНКИ",
    "ВИЖИВАННЯ",
    "ОНЛАЙН",
  ];

  return (
    <section className={style.container}>
      <h4 className={style.container_header}>ВСІ ІГРИ</h4>
      <div className={style.container_settings}>
        <div className={style.container_settings__filter}>
          {genres.map((text) => {
            return (
              <FilterItem
                text={text}
                activeGenre={activeGenre}
                setActiveGenre={setActiveGenre}
                key={text}
              />
            );
          })}
        </div>
        <div className={style.container_settings__age}>
          <div
            className={`${style.filterItem} ${
              activeAge ? style.filterItemSelected : null
            }`}
            onClick={() => {
              setActiveAge(!activeAge);
            }}
          >
            Спочатку нові
          </div>
          <div
            className={`${style.filterItem} ${
              !activeAge ? style.filterItemSelected : null
            }`}
            onClick={() => {
              setActiveAge(!activeAge);
            }}
          >
            Спочатку старі
          </div>
        </div>
      </div>
      <div className={style.gamesContainer}>
        <GameCard />
        <GameCard />
        <GameCard />
      </div>
    </section>
  );
};

export default GameSection;
