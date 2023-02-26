import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    

    background-color: blue;

    .logo {
        width: 50px;
        height: 50px;
        background-color: green;
        margin: auto 25px;
    }

    button {
        margin: auto 25px;
        cursor: pointer;
    }
`