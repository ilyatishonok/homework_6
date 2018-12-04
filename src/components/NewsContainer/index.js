import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tabs from '../Tabs';
import ArticlesList from '../ArticlesList';
import config from '../../constants/config';

export default class NewsContainer extends Component {
    static propTypes = {
        tabs: PropTypes.array.isRequired,
    }

    state = {
        currentTab: null,
        articles: [],
        isFetching: false,
    }

    onTabChange = tab => {
        const { source, apiKey } = config;
        
        this.setState({
            currentTab: tab,
            isFetching: true,
        });

        fetch(`${source}?page=${1}&apiKey=${apiKey}&q=${tab}`).then(res => res.json()).then(data => {
            this.setState({
                articles: data.articles,
                isFetching: false,
            });
        });
    }

    render() {
        const { tabs } = this.props;
        const { articles, currentTab, isFetching } = this.state;

        return (
            <React.Fragment>
                <Tabs currentTab={currentTab} onTabChange={this.onTabChange} tabs={tabs} />
                <ArticlesList articles={articles} isFetching={isFetching} />}
            </React.Fragment>
        );
    }
}