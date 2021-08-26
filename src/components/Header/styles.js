import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    position: sticky;
    top: 0;
    left: 0;
    height: 44px;
    margin-left: 44px;
    display: flex;
    flex-direction: row;
    gap: 24px;
    background-color: ${theme.colors.background};
    align-items: center;
    justify-content: space-between;
    z-index: 2;
    flex-wrap: nowrap;
    border-bottom: 1px solid ${theme.colors.secondaryFont};

      .funcionalities {
        display: none;
        visibility: hidden;
      }

      ${theme.media.desktop} {
        margin-left: 0;
        height: 80px;
        .funcionalities {
          display: flex;
          visibility: visible;
          gap: 30px;

          .notification-button {
            cursor: pointer;
          }

          .btn-profile {
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: row;
            background-color: transparent;
            border: none;
            gap: 11px;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            p {
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
              color: ${theme.colors.gray};

              strong {
                font-weight: 700;
                line-height: 19px;
                color: ${theme.colors.green};
              }
            }
          }
        }
      }

      .top-page {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        user-select: none;

        img {
          cursor: pointer;
        }

        h3 {
          color: ${theme.colors.secondaryFont};
          font-size: 20px;
          font-style: normal;
          font-weight: 500;
          line-height: 32px;
          letter-spacing: 0em;
          white-space: nowrap;
        }
      }

      .page-title {
        height: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
      }
    }
  `}
`;
