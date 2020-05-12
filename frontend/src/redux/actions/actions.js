import axios from 'axios';
import { POST_ITEM, DELETE_ITEM, ITEMS_FETCHING, ITEMS_FETCHED, ITEMS_FETCH_FAILED } from '../types/types';

export const getItemsAction = () => async (dispatch, getState) => {
  dispatch({
    type: ITEMS_FETCHING,
  });
  try {
    const get_items = await axios.get('/api/items');

    dispatch({
      type: ITEMS_FETCHED,
      payload: get_items.data,
    });
  } catch (error) {
    dispatch({
      type: ITEMS_FETCH_FAILED,
      payload: error,
    });
  }
};
export const postItemAction = (item) => async (dispatch, getState) => {
  //  console.log(item);
  //  console.log(item.name);
  try {
    const res = await axios.post('/api/items', item);
    dispatch({
      type: POST_ITEM,
      payload: res.data,
    });
  } catch (error) {
    console.log('error in post action');
  }

  //  try {
  //    await axios.post('/api/items', item).then((res) =>
  //      dispatch({
  //        type: POST_ITEM,
  //        payload: res.data.name,
  //      })
  //    );
  //  } catch (error) {
  //    console.log('error in post action');
  //  }
};
export const deleteItemAction = (_id) => async (dispatch, getState) => {
  console.log(_id);
  try {
    const res = await axios.delete(`/api/items/${_id}`);
    console.log(res);
    console.log(res.data._id);
    dispatch({
      type: DELETE_ITEM,
      payload: res.data._id,
    });
  } catch (error) {
    console.log('error in delete action');
  }
  console.log(_id);
};
