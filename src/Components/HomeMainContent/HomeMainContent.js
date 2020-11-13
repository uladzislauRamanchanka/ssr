import React from 'react';
import styled from 'styled-components'
import { MdSentimentSatisfied } from "react-icons/md";

const Wrapper = styled.div`
height: 200px;
background-color: #232323;
display: flex;
align-items: center;
flex-direction: column;
justify-content: center;
color: white;
`
function HomeMainContent(props) {
    return (
        <Wrapper>
            <h1>Please, start searching the movie <MdSentimentSatisfied/></h1>
        </Wrapper>
    );
}

export default HomeMainContent;