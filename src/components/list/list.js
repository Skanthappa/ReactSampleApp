import * as React from 'react'
import '../../assets/stylesheets/components/list.css';
import '../../assets/stylesheets/common.css';


const List = ({ list }) =>
  <div className="list">
    {list.map((article, index) =>
      <div key={index} className="article">
          <img alt="article" className="article-image" src={article.urlToImage} style={{ width: 150, height: 100 }} />
          <h3 className="article-head">{article.title}</h3>
          <p className="article-content">{(article.content) ? article.content.replace(/(\[\+[0-9]+\s(chars]))/gi, '') : null}
            <a href={article.url} target="blank">Read more</a>
          </p>
          <p className="article-time">{article.publishedAt.replace(/[a-z]/gi, ' ').replace(/-/g, '/')}</p>
      </div>
    )}
  </div>


  

export default List;