import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ArticleLink = styled.a.attrs(({ urlToImage }) => ({
    style: {
        backgroundImage: `url(${urlToImage})`,
    },
}))`
    width: 100%;
    color: white;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    text-decoration: none;
`;

const ArticleContent = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    min-height: 200px;
    padding: 30px;
    transition: all ease .2s;

    &:hover {
        background-color: rgba(0,0,0,0.5);
    }
`;

const ArticleTitle = styled.h1`
    margin: 0px;
`;

const ArticleDescription = styled.div`
    margin: 0px;
`;

const Article = props => {
    const { title, urlToImage, description, url } = props;

    return (
        <ArticleLink urlToImage={urlToImage} href={url}>
            <ArticleContent>
                <ArticleTitle>{title}</ArticleTitle>
                <ArticleDescription>{description}</ArticleDescription>
            </ArticleContent>
        </ArticleLink>
    );
}

Article.propTypes = {
    title: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default Article;