import styled from "styled-components";

export const Footer = styled.footer`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  background-color: var(--color-orange-1);

  color: var(--color-white-fixed);

  .logo {
    width: 50px;
    height: 50px;
    margin: 20px auto 0px auto;

    background-color: var(--color-white-fixed);
    border: 1px solid var(--color-green-1);
    border-radius: 50%;
  }

  .alldress-phone {
    font-size: 18px;
    margin: 20px auto;
  }

  .divButtons {
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    background-color: var(--color-green-1);

    a {
      text-decoration: none;
      color: var(--color-white-fixed);
    }
  }

  .divSocialMedias {
    width: 130px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px auto;

    a {
      color: var(--color-gray-1);
      text-decoration: none;
      font-size: 30px;
    }
  }

  .copyright {
    width: 80%;
    margin: 0 auto;
    text-align: center;
    font-size: 18px;
  }
`;
