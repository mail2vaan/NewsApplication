import axios from 'axios'
import { newsListConstants } from '../_constants';
import newsListData from './newsList.json';

export const newsListActions = {
    fetchNewsList,
    fetchNewsListRequest,
    fetchNewsListSuccess,
    fetchNewsListFailure
};

function fetchNewsList () {
  return (dispatch) => {
    dispatch(fetchNewsListRequest())
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // response.data is the news List
        const newsList = newsListData;
        dispatch(fetchNewsListSuccess(newsList))
      })
      .catch(error => {
        // error.message is the error message
        dispatch(fetchNewsListFailure(error.message))
      })
  }
}

function fetchNewsListRequest() {
  return {
    type: newsListConstants.FETCH_NEWS_LIST_REQUEST
  }
}

function fetchNewsListSuccess(newsList) {
  return {
    type: newsListConstants.FETCH_NEWS_LIST_SUCCESS,
    newsList
  }
}

function fetchNewsListFailure(error){
  return {
    type: newsListConstants.FETCH_NEWS_LIST_FAILURE,
    payload: error
  }
}
