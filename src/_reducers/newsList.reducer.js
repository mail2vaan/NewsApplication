import { newsListConstants } from '../_constants';

export function newsList(state = [], action) {
  switch (action.type) {
    case newsListConstants.FETCH_NEWS_LIST_REQUEST:
      return {
        newsList: []
      };
    case newsListConstants.FETCH_NEWS_LIST_SUCCESS:
      return {
        newsList: action.newsList
      };
    case newsListConstants.FETCH_NEWS_LIST_FAILURE:
      return { 
        newsList : [] 
      };
    default:
      return state
  }
}