import {
  LOADING_GET_LIST_CAT,
  SUCCESS_GET_LIST_CAT,
  FAILED_GET_LIST_CAT,
  SUCCESS_FETCH_MORE_GET_LIST_CAT,
  FAILED_FETCH_MORE_GET_LIST_CAT,
  LOADING_FETCH_MORE_GET_LIST_CAT,
} from '../configure/list'

const initialState = {
  catList: {
    data: [],
    total: 0,
  },
  isLoadingGetCatList: false,
  isErrorGetCatList: false,
}
export default function list(state = initialState, action) {
  switch (action.type) {
    case LOADING_GET_LIST_CAT:
      return {
        ...state,
        isLoadingGetCatList: true,
      }
    case SUCCESS_GET_LIST_CAT:
      return {
        ...state,
        isLoadingGetCatList: false,
        catList: action.payload,
        isErrorGetCatList: false
      }
    case FAILED_GET_LIST_CAT:
      return {
        ...state,
        isLoadingGetCatList: false,
        isErrorGetCatList: true
      }
    case SUCCESS_FETCH_MORE_GET_LIST_CAT:
      return {
        ...state,
        catList: {
          ...state.catList,
          data: [...state.catList.data, ...action.payload.data]
        }
      }
    default:
      return state
  }
}