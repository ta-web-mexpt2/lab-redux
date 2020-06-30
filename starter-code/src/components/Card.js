import React from "react";
import Styled from "styled-components";

const StyledCard = Styled.div`
    border-radius: 3px;
    border: 1px solid lightslategray;
    margin: 10px;
    background: #512DA8;
`;

const Card = (props) => (
    <StyledCard>
        {props.children}
    </StyledCard>
);

export default Card;