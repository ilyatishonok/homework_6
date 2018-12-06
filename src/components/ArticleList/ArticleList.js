import React from 'react';
import PropTypes from 'prop-types';
import Article from './Article';
import config from '../../constants/config';

const ArticleList = ({ articles }) => {
    return articles.map(article => ( 
        <Article
            key={article.title}
            title={article.title} 
            description={article.description}
            url={article.url}
            urlToImage={article.urlToImage || config.defaultUrlToImage}
        />
    ));
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
}

export default ArticleList;