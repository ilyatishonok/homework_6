import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Tabs from '../Tabs';
import ArticleList from '../ArticleList';
import Loader from '../Loader';
import config from '../../constants/config';

const ContentLayout = styled.div`
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

const Error = styled.div`
    color:red;
`;

const HighLight = styled.b`
    color: #491253;
`;

export default class ArticlesContainer extends Component {
    static propTypes = {
        tabs: PropTypes.array.isRequired,
    }

    state = {
        activeTab: '',
        articles: [],
        isFetching: false,
    }

    onTabChange = tabId => {
        const { tabs } = this.props;
        const { source, apiKey, defaultErrorMessage } = config;

        this.setState({
            activeTab: tabId,
            error: false,
            isFetching: true,
        });

        const tab = tabs.find(tab => tab.id === tabId);
        const page = Math.floor((Math.random() * 50) + 1);

        fetch(`${source}?page=${page}&apiKey=${apiKey}&q=${tab.title}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    articles: data.articles,
                    isFetching: false,
                });
            })
            .catch(() => {
                this.setState({
                    isFetching: false,
                    error: defaultErrorMessage,
                })
            })
    }

    renderContent() {
        const { activeTab, isFetching, error, articles } = this.state;

        if (error) {
            return <Error>{error}</Error>;
        }

        if (isFetching) {
            return <Loader />
        }

        if (!activeTab) {
            return (
                <div>
                    Please, select any Tab to display <HighLight>20</HighLight> random articles of chosen category
                </div>
            );
        }

        return <ArticleList articles={articles} isFetching={isFetching} />
    }

    render() {
        const { tabs } = this.props;
        const { activeTab } = this.state;

        return (
            <React.Fragment>
                <Tabs activeTab={activeTab} onTabChange={this.onTabChange} tabs={tabs} />
                <ContentLayout>
                    {this.renderContent()}
                </ContentLayout>
            </React.Fragment>
        );
    }
}