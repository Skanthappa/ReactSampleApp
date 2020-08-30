import * as React from 'react'
import List from '../../components/list/list'
import {getNewsHeadLines} from '../../store/news/actions'
import { connect } from 'react-redux'

  class NewsList extends React.Component{

    async componentDidMount(){
        console.log(this.props)
        const {dispatch}= this.props;
        await dispatch(getNewsHeadLines(1,20,"all"));
    }
    render(){
        return(
            <List list={this.props.newsListData} ></List>
        )
    }
}

function mapStateToProps(state){
    return {
        newsListData: state.news.newsHeadlines? state.news.newsHeadlines:[]
    }
}
export default connect(mapStateToProps)(NewsList)

