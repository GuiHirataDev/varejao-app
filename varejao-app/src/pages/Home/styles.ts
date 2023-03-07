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

export const DeliverySection = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10px;

    h1 {
        font-size: 30px;
        font-weight: 600;
        color: var(--color-orange-1);
        margin-bottom: 10px;
    }

    h2 {
        font-size: 18px;
        font-weight: 600;
        color: var(--color-orange-1);
        margin-bottom: 10px;
    }

    p {
        font-size: 18px;
        margin-bottom: 15px;
    }

    p span {
        font-weight: 600;
    }

    ul {
        max-width: 100%;
        display: flex;
        overflow-y: hidden;
        overflow-x: scroll;
    }

    ul::-webkit-scrollbar {
        height: 6px;
    }

    ul::-webkit-scrollbar-thumb {
        background-color: var(--color-orange-1);
        border-radius: 20px;
    }

`