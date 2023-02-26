import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  
  border-top: 3px solid var(--color-orange-1);
  border-bottom: 3px solid var(--color-orange-1);

  .linkLogo {
    margin: auto 25px;
  }

  .logo {
    width: 50px;
    height: 50px;
    
    background-color: var(--color-white-fixed);
    border: 1px solid var(--color-green-1);
    border-radius: 50%;
  }

  button {
    margin: auto 25px;
    cursor: pointer;
  }
`;
