import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100vh;
    padding: 89px 24px 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;

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
  `}
`;
