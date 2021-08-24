import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    header {
      position: fixed;
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 44px;
      gap: 24px;
      top: 0;
      left: 0;
      background-color: ${theme.colors.background};
      align-items: center;
      justify-content: flex-start;
      z-index: 2;

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

      .btn-open-menu {
        padding: 0;
        border: none;
        width: 44px;
        height: 44px;
        img {
          min-width: 100%;
          min-height: 100%;
        }
      }

      .page-title {
        width: 100%;
        height: 100%;
        margin-right: 24px;
        border-bottom: 1px solid ${theme.colors.secondaryFont};
        display: flex;
        align-items: center;
        overflow: hidden;
      }
    }
  `}
`;
