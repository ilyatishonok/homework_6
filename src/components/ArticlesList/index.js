import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Article from '../Article';
import Loader from '../Loader';

const Layout = styled.div`
    margin-left: 200px;
    margin-right: 200px;
    padding-top: 54px;
    box-shadow: 0 0 20px black;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    @media(max-width: 1020px) {
        margin-left: 100px;
        margin-right: 100px;
    }
    
    @media(max-width: 750px) {
        margin-left: 50px;
        margin-right: 50px;
        padding-top: 108px;
    }
    
    @media(max-width: 520px) {
        margin: 0px;
        padding-top: 216px;
    }
`;

const ArticlesList = props => {
    const { articles, isFetching } = props;

    return (
        <Layout>
            {isFetching ? <Loader /> : articles.map(article => {
                return ( 
                    <Article
                        key={article.title}
                        title={article.title} 
                        description={article.description}
                        url={article.url}
                        urlToImage={article.urlToImage}
                    />
                )
            })}
        </Layout>   
    )
}

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
}

export default ArticlesList;