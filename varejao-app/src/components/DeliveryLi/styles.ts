import styled from "styled-components"

export const Li = styled.li`
    width: 300px;
    height: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin-left: 15px;
    margin-bottom: 10px;

    border-top: 3px solid var(--color-orange-1);
    border-bottom: 3px solid var(--color-orange-1);
    
    span {
        font-size: 100px;
        color: var(--color-orange-1);
    }

    h3 {
        font-size: 25px;
        font-weight: 600;
        color: var(--color-orange-1);

        margin-bottom: 10px;
    }

    p {
        font-size: 20px;

        margin-bottom: 20px;
    }

    button {
        width: 150px;
        height: 40px;

        border: 1px solid var(--color-orange-1);
        border-radius: 10px;
        background-color: #fff;
        cursor: pointer;
        
        font-weight: 600;
    }
`