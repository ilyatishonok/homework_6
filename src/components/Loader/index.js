import React from 'react';
import styled from 'styled-components';

const Spinner = styled.div`
    width: 40px;
    height: 40px;
    background-color: black;

    margin: 100px auto;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
`;


const Loader = () => {
    return <Spinner></Spinner>
}

export default Loader;