//import { v4 as uuidv4 } from 'uuid';
import { GET_ITEMS, POST_ITEM, DELETE_ITEM, ITEMS_FETCHING, ITEMS_FETCHED, ITEMS_FETCH_FAILED } from './../types/types';

const initialState = {
  items: [],
  loadding: false,
};
export default function itemsReducer(state = initialState, action) {
  //console.log(state.items);
  //  console.log(action.type);
  //  console.log(action.payload);
  switch (action.type) {
    case ITEMS_FETCHING:
      return { ...state, loadding: true };
    case ITEMS_FETCHED:
      return { ...state, loadding: false, items: action.payload };
    case ITEMS_FETCH_FAILED:
      return { ...state, loadding: false, error: action.payload };
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case POST_ITEM:
      return { ...state, items: [action.payload, ...state.items] };

    case DELETE_ITEM:
      return { ...state, items: state.items.filter((item) => item._id !== action.payload) };

    default:
      return state;
  }
}
