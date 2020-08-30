import News from '../../services/newslist'
import { GET_NEWS_HEADLINES_REQUEST, GET_NEWS_HEADLINES_SUCCESS, GET_NEWS_HEADLINES_FAILURE } from './actiontypes'

export function getNewsHeadLines(offset, pagesize, serachItem) {
    return async dispatch => {
        dispatch(getNewsHeadLinesRequest())
        try {
            const response = await News.getNewsListData(offset, pagesize, serachItem);
            console.log(response)
            dispatch(getNewsHeadLinesSuccess(response));
        } catch (error) {
            dispatch(getNewsHeadLinesFailure(error))
        }
    }
}

export function getNewsHeadLinesRequest() {
    return { type: GET_NEWS_HEADLINES_REQUEST }
}

export function getNewsHeadLinesSuccess(newsHeadlines) {
    return { type: GET_NEWS_HEADLINES_SUCCESS, newsHeadlines }
}

export function getNewsHeadLinesFailure(error) {
    return { type: GET_NEWS_HEADLINES_FAILURE, error }
}