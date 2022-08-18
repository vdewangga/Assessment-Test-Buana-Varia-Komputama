import {
  LOADING_GET_LIST_CAT,
  SUCCESS_GET_LIST_CAT,
  FAILED_GET_LIST_CAT,
  SUCCESS_FETCH_MORE_GET_LIST_CAT,
  FAILED_FETCH_MORE_GET_LIST_CAT,
  LOADING_FETCH_MORE_GET_LIST_CAT,
} from '../configure/list'
import catApp from '../apis/catApp';
import { API_KEY } from '../../_constanta';

export const fetchListCat = (text, page) => async dispatch => {
  try {
    dispatch({
      type: LOADING_GET_LIST_CAT,
    })
    const response = await catApp.get('/breeds', {
      'x-api-key': API_KEY,
    });
    if (response.status === 200) {
      if (text) {
        const filteredData = response.data.filter((item, index) => item.name.toLowerCase().includes(text.toLowerCase()))
        dispatch({
          type: SUCCESS_GET_LIST_CAT,
          payload: {
            data: filteredData,
            total: filteredData.length
          }
        });
        return;
      }
      const filteredData = response.data.slice(page - 1, (page * 10) - 1)
      const listData = {
        data: filteredData,
        total: response.data.length
      }
      dispatch({
        type: SUCCESS_GET_LIST_CAT,
        payload: listData,
      });
    }
  } catch (error) {
    dispatch({
      type: FAILED_GET_LIST_CAT,
    });
  }
};

export const fetchMoreListCat = (text, page) => async dispatch => {
  try {
    dispatch({
      type: LOADING_FETCH_MORE_GET_LIST_CAT,
    })
    const response = await catApp.get('/breeds', {
      'x-api-key': API_KEY,
    });
    if (response.status === 200) {
      if (text) {
        const filteredData = response.data.filter((item, index) => item.name.toLowerCase().includes(text.toLowerCase()))
        dispatch({
          type: SUCCESS_GET_LIST_CAT,
          payload: {
            data: filteredData,
            total: filteredData.length
          }
        });
        return;
      }
      const filteredData = response.data.slice((page * 10 - 10) - 1, (page * 10) - 1)
      const listData = {
        data: filteredData,
        total: response.data.length
      }
      dispatch({
        type: SUCCESS_FETCH_MORE_GET_LIST_CAT,
        payload: listData,
      });
    }
  } catch (error) {
    dispatch({
      type: FAILED_FETCH_MORE_GET_LIST_CAT,
    });
  }
};