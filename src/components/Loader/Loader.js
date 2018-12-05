import React from 'react';
import styled, { keyframes } from 'styled-components';

const RotatePlane = keyframes`
    0% { 
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
    } 50% { 
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
        -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
    } 100% { 
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
        -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
`;

const Spinner = styled.div`
    width: 40px;
    height: 40px;
    background-color: black;
    margin: 100px auto;
    -webkit-animation: ${RotatePlane} 1.2s infinite ease-in-out;
    animation: ${RotatePlane} 1.2s infinite ease-in-out;
`;

const Loader = () => {
    return <Spinner></Spinner>
}

export default Loader;