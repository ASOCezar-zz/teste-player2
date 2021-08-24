import styled, { css, keyframes } from 'styled-components';

const showOption = keyframes`
  from {
    box-shadow: 0px 0px 0px 0px rgba(71, 79, 99, 0.15);
    bottom: 12px 
  }
  to {
    box-shadow: 0px 10px 15px 0px rgba(71, 79, 99, 0.15);
    bottom: 40px
  }
`;
const hideOption = keyframes`
  from {
    box-shadow: 0px 10px 15px 0px rgba(71, 79, 99, 0.15);
    bottom: 40px
  }
  to {
    box-shadow: 0px 0px 0px 0px rgba(71, 79, 99, 0.15);
    bottom: 12px
  }
`;

export const Container = styled.div`
  ${({ theme, openOptions }) => css`
    background-color: ${theme.colors.white};
    border-radius: 8px;
    box-shadow: 0px 4px 20px 0px rgba(71, 79, 99, 0.05);
    padding: 16px 20px 24px;
    max-width: 100%;
    max-height: 100%;
    box-sizing: border-box;

    transition: all 0.3s linear;

    &:hover {
      background-color: rgba(237, 239, 242, 1);
    }

    &:active {
      background-color: rgba(228, 231, 236, 1);
    }

    .head-card {
      display: flex;
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;

      .dispatching-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        label {
          color: ${theme.colors.blue};
          font-size: 12px;
          font-weight: 500;
        }
      }

      .profiles-card {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 5px;
        cursor: pointer;
        span {
          color: ${theme.colors.secondaryFont};
          font-size: 14px;
          font-weight: 500;
        }
      }

      .options-card {
        .btn-options {
          position: relative;
          border: none;
          background-color: transparent;
          cursor: pointer;
          z-index: 3;

          .tooltip {
            position: absolute;
            display: flex;
            flex-direction: row;
            bottom: 40px;
            right: -30px;
            background-color: ${theme.colors.white};
            border-radius: 6px;
            padding: 5px 0;
            text-align: center;
            width: 172px;
            height: 52px;
            animation: ${openOptions ? showOption : hideOption} 250ms ease-in-out forwards;
            visibility: ${openOptions ? 'visible' : 'hidden'};

            align-items: center;

            transition: all 250ms ease-in-out;

            .tooltip-text {
              color: ${theme.colors.gray};
              display: flex;
              flex-direction: row;
              justify-content: space-around;
              align-items: center;
              width: 100%;

              padding: 8px 40px 8px 14px;

              &::after {
                content: '';
                position: absolute;
                top: 100%;
                left: 75%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: ${theme.colors.white} transparent transparent transparent;
              }
            }
          }

          :active {
            background-color: ${theme.colors.darkGray};
            outline: none;
            user-select: none;
          }
        }
      }
    }

    .content-card {
      display: flex;
      flex-direction: row;
      gap: 12px;
      height: 100%;
      align-items: center;

      .txt-content-card {
        display: flex;
        flex-direction: column;
        gap: 5px;
        height: 40px;

        h4 {
          color: ${theme.colors.primaryFont};
        }
      }
    }
  `}
`;
