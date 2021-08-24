import styled, { css } from 'styled-components';

const isnotError = (theme) => css`
  border: 1px solid ${theme.colors.darkGray};
`;

const isError = (theme) => css`
  border: 1px solid ${theme.colors.error};
`;

export const Container = styled.div`
  ${({ theme, isEmailBlank, isPasswordBlank }) => css`
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

    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: auto;
      gap: 12px;

      .form-group {
        display: flex;
        flex-direction: column;
        gap: 5px;


        .field-label {
          font-size: 12px;
          font-weight: 500;
          line-height: 16px;
          color: ${theme.colors.neutralDark};
          margin-left: 16px;
        }

        .form-field {
          box-shadow: 0px 0px 0px 0px rgba(71, 79, 99, 0.15);
        }

        .form-field:focus-visible {
            box-shadow: 0px 10px 15px 0px rgba(71, 79, 99, 0.15);
          }

        #email.form-field:focus-visible {
          ${isEmailBlank ? isError(theme) : isnotError(theme)};
        }

        #password.form-field:focus-visible {
          ${isPasswordBlank ? isError(theme) : isnotError(theme)};
        }


        input {
          width: 100%;
          height: 44px;
          border: 1px solid ${theme.colors.darkGray};
          border-radius: 4px;
          padding: 12px 16px;
          outline: none;
          transition: box-shadow 250ms linear;

          ::placeholder {
            color: ${theme.colors.secondaryFont};
          }
        }

        .form-error {
          margin-left: 16px;
          display: flex;
          flex-direction: row;
          gap: 5.75px;
          align-items: center;
          margin-top: 9.27px;

            p {
              color: ${theme.colors.error};
              font-size: 11px;
              weight: 500;
            }
          }
        }
        
        .btn-login {
          width: 100%;
          height: 43px;
          border: none;

          cursor: pointer;
          background-color: ${theme.colors.green};
          color: ${theme.colors.white};
          font-size: 14px;
          font-weight: 700;
          line-height: 19px;

          &:hover {
            background-color: rgba(14, 195, 163, 0.7);
          }

          &:active {
            background-color: rgba(87, 180, 163, 1);
          }
        }
      }
    }

    .register {
      display: inline-block;

      .register-text {
        font-size: 14px;
        font-weight:400;
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
