const setGames = "setGames";

const defaultState = {
  games: [],
  gamesListLength: 0,
};

export default function gamesReducer(state = defaultState, action) {
  switch (action.type) {
    case setGames:
      return {
        ...state,
        games: action.data.games || [],
        total: action.data.gamesListLength,
      };

    default:
      return state;
  }
}

export const setModalAddTowns = (data) => ({ type: setGames, data });
