import style from "./gameSection.module.css";

const GameCard = ({ gameName, imageURL, genre, description, gameClass }) => {
  return (
    <div className={style.gamesContainer_item}>
      <img src={`${imageURL}`} className={style.image}></img>
      <div className={style.name}>
        <h4 className={style.h4}>{gameName}</h4>
        <p className={style.p}>{description}</p>
      </div>
      <div className={style.genre}>
        <p className={style.genre_item}>{genre}</p>
      </div>
      {gameClass === "STANDART" && (
        <div className={style.free}>
          <p className={style.genre_item}>БЕЗКОШТОВНО</p>
        </div>
      )}
    </div>
  );
};

export default GameCard;
