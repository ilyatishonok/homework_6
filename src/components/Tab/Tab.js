import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TabContainer = styled.div`
    cursor: pointer;
    width: 25%;
    background: ${ props => props.selected ? '#491253' : 'black'};
    color: white;
    font-family: fantasy;
    font-size: 20px;
    transition: all ease .1s;
    user-select: none;
    text-align: center;
    padding: 15px;

    &:hover {
        background: #491253;
        border: 0px;
    }

    @media(max-width: 750px) {
        width: 50%;
    }
    
    @media(max-width: 520px) {
        width: 100%;
    }
`;

export default class Tab extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        onTabChange: PropTypes.func.isRequired,
        selected: PropTypes.bool.isRequired,
        id: PropTypes.string.isRequired,
    }

    onTabClick = () => {
        const { selected, onTabChange, id } = this.props;

        if (!selected) {
            onTabChange(id);
        }
    }

    render() {
        const { title, selected } = this.props;

        return (
            <TabContainer selected={selected} onClick={this.onTabClick}>
                {title}
            </TabContainer>
        )
    }
}