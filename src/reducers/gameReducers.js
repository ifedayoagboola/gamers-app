const initState = {
  popularGames: [],
  newGames: [],
  upcomingGames: [],
};

const gameReducers = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};
export default gameReducers;
