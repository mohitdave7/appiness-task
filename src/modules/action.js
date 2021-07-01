import {user} from "./data"
export const GET_DATA = "GET_DATA";
export const getData = {
      type: GET_DATA,
      payload: user
};
export default getData;