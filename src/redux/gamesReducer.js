const setGames = "setGames";

const defaultState = {
  isFreshGamesFirst: true,
  genre: false,
  gamesToShow: 9,
};

export default function gamesReducer(state = defaultState, action) {
  switch (action.type) {
    case setGames:
      return {
        ...state,
        ...action.data,
      };

    default:
      return state;
  }
}

export const setSettings = (isFreshGamesFirst, genre) => {
  const newData = {};

  if (isFreshGamesFirst !== undefined) {
    newData.isFreshGamesFirst = isFreshGamesFirst;
  }

  if (genre !== undefined) {
    newData.genre = genre;
  }

  return {
    type: setGames,
    data: newData,
  };
};
