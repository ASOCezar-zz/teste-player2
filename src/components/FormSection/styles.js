import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    min-width: 50%;
    padding: 89px 24px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

    ${theme.media.desktop} {
      padding: 89px 10%;
    }

    .logo {
      width: 107.19px;
      height: 84px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .login-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;

      h2 {
        color: ${theme.colors.primaryFont};
        font-size: 30px;
        line-height: 32px;
      }
    }

    .register {
      display: inline-block;

      .register-text {
        font-size: 14px;
        font-weight: 400;
        color: ${theme.colors.gray};
        line-height: 19px;

        .registration-link {
          text-decoration: none;
          color: ${theme.colors.green};
          font-weight: 700;
          line-height: 20px;
        }
      }
    }

    footer {
      position: absolute;
      bottom: 20px;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 18px;
      letter-spacing: 0em;
      text-align: center;
      color: #c6cad6;
    }
  `}
`;
