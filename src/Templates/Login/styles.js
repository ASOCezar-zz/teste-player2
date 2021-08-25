import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    height: 100vh;

    .image-section {
      display: none;
      visibility: hidden;

      ${theme.media.tablet} {
        visibility: visible;
        display: flex;
        flex-direction: column;
        background-image: linear-gradient(0deg, #0ea4c2 0%, #13cfb9 100%);
        border-radius: 64px 0 0 0;
        padding: 89px 5%;
        min-width: 50%;

        .imageSection-content {
          display: flex;
          flex-direction: column;
          width: 100;
          height: 100%;
          gap: 40px;

          .imageSection-text {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            text-align: center;
            gap: 8px;
            .imageSection-title {
              font-size: 30px;
              line-height: 32px;
              color: ${theme.colors.white};
            }
            .imageSection-description {
              font-size: 14px;
              line-height: 20px;
              font-weight: 400;
              color: ${theme.colors.white};
            }
          }
        }
      }

      ${theme.media.desktop} {
        padding: 89px 10%;
      }
    }

    .form-section {
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
    }
  `}
`;
