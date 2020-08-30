import fetch from 'isomorphic-fetch'
import {NEWS_API} from '../config/apiConfig'
import {checkStatus}  from '../utils/checkStatus'

class NewsList {
    async getNewsListData(offset,pageSize,SearchItem){
        let response;
        const newsListRoute= `${NEWS_API}/news/newsHeadLine/${offset}/${pageSize}/${SearchItem}`;

        response= await fetch(newsListRoute,{
            method:'GET',
            headers:{
                'Content-Type':'application/json'
            }
        })

        return await checkStatus(response);
    }
}

export default new NewsList();