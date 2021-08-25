import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, isEmailInvalid, isPasswordInvalid }) => css`
    width: 100%;
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

        #email {
          border: ${!isEmailInvalid ? `1px solid ${theme.colors.darkGray};` : `1px solid ${theme.colors.error}`}
        }
        #password {
          border: ${!isPasswordInvalid ? `1px solid ${theme.colors.darkGray};` : `1px solid ${theme.colors.error}`}
        }

        .form-input {
          width: 100%;
          height: 44px;
          border-radius: 4px;
          padding: 12px 16px;
          outline: none;
          transition: box-shadow 250ms linear;

          ::placeholder {
            color: ${theme.colors.secondaryFont};
          }
          box-shadow: 0px 0px 0px 0px rgba(71, 79, 99, 0.15);
          
          &:focus {
              box-shadow: 0px 10px 15px 0px rgba(71, 79, 99, 0.15);
            }
        }

        .form-error {
          margin-left: 16px;
          display: flex;
          flex-direction: row;
          gap: 5.75px;
          align-items: center;

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
  `}
`;
