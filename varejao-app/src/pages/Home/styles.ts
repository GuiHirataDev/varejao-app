import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkWpp = styled(Link)`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-green-1);
    text-decoration: none;

    color: var(--color-white-fixed);
`

export const MainContent = styled.main`
    width: 100%;
    
    img {
        width: 100%;
    }
`