import { GET_NEWS_HEADLINES_REQUEST, GET_NEWS_HEADLINES_SUCCESS, GET_NEWS_HEADLINES_FAILURE } from './actiontypes'

const initialState = {
    fetchNewsRequest: false,
    fetchNewsError: false,
    newsHeadlines: []
}

function newsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NEWS_HEADLINES_REQUEST:
            return Object.assign({}, state, {
                fetchNewsRequest: true
            });
        case GET_NEWS_HEADLINES_SUCCESS:
            return Object.assign({}, state, {
                fetchNewsRequest: false,
                fetchNewsError:false,
                newsHeadlines: action.newsHeadlines
            });
        case GET_NEWS_HEADLINES_FAILURE:
            return Object.assign({}, state, {
                fetchNewsRequest: false,
                fetchNewsError:true,
                newsHeadlines: action.newsHeadlines
            });
        default:
            return state;
    }
}
export default newsReducer;