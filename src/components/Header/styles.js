import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: sticky;
    inset: 0 0 0 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    header {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 44px;
      gap: 24px;
      top: 0;
      left: 0;
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
        padding: 18.5px;
        height: 80px;
        .funcionalities {
          display: flex;
          visibility: visible;
          gap: 30px;

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
