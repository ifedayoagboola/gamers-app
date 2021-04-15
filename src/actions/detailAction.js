import axios from "axios";
import { gameDetailURL, gameScreenshotURL } from "../Api";

//Action creator
export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  //FETCH AXIOS
  const detailData = await axios.get(gameDetailURL(id));
  const screenShotData = await axios.get(gameScreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
