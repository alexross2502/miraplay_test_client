import { useEffect, useState } from "react";
import FilterItem from "./FilterItem";
import style from "./gameSection.module.css";
import GameCard from "./GameCard";
import { useDispatch, useSelector } from "react-redux";
import { useMutation } from "react-query";
import Api from "../../utils/api";

const GameSection = () => {
  const [activeGenre, setActiveGenre] = useState("ВСІ");
  const [activeAge, setActiveAge] = useState(true);
  const [gamesList, setGamesList] = useState();
  const [gamesListLength, setGamesListLength] = useState();
  const [gamesOnPage, setGamesOnPage] = useState(9);
  const dispatch = useDispatch();
  //const counter = useSelector((state) => state.games);

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

  async function fetchGames() {
    return Api.game({
      isFreshGamesFirst: true,
      genre: false,
      gamesToShow: 9,
    });
  }

  const { data, mutate, isLoading } = useMutation({
    mutationFn: fetchGames,
    onSuccess: (fetchedData) => {
      setGamesList(fetchedData.data.games);
      setGamesListLength(fetchedData.data.gamesListLength);
    },
  });

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
                mutate={mutate}
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
              mutate();
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
              mutate();
            }}
          >
            Спочатку старі
          </div>
        </div>
      </div>
      <div className={style.gamesContainer}>
        {gamesList?.slice(0, gamesOnPage).map((el) => {
          return <GameCard />;
        })}
      </div>
      {gamesListLength > gamesOnPage ? (
        <button
          className={style.button}
          onClick={() => {
            setGamesOnPage(gamesOnPage + 9);
          }}
        >
          ПОКАЗАТИ ЩЕ
        </button>
      ) : null}
    </section>
  );
};

export default GameSection;
