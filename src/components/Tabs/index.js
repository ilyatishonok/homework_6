import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from '../Tab';

const TabsContainer = styled.div`
    position: fixed;
    display: inline-flex;
    flex-wrap: wrap;
    width: 100%;
    box-shadow: 0 0 10px black;
`;

const Tabs = props => {
    const { currentTab, tabs, onTabChange } = props;

    return (
        <TabsContainer>
           {tabs.map(tab => (
                <Tab
                    key={tab.id}
                    onTabChange={onTabChange}
                    selected={currentTab === tab.title}
                >
                    {tab.title}
                </Tab>
            ))} 
        </TabsContainer>
    );
}

Tabs.propTypes = {
    tabs: PropTypes.array.isRequired,
    currentTab: PropTypes.string.isRequired,
    onTabChange: PropTypes.func.isRequired,
}

export default Tabs;