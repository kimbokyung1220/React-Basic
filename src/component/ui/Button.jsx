import React from 'react';
import Styled from 'styled-components';

const StyledButton = styled.button`
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
`;

const Button = (pros) => {
    return(
        <>
        <StyledButton onclick={onclick}>{title || "Button"}</StyledButton>
        </>
    );
}

export default Button;