import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    background-color: ${theme.colors.background};
    width: 100%;
    height: 100vh;
    padding-inline: 24px;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    ${theme.media.tablet} {
      padding-inline: 46px;
    }

    ${theme.media.desktop} {
      padding-inline: 68px;
    }

    main {
      max-width: 100%;
      height: calc(100% - 80px);
      overflow-y: scroll;
      display: flex;
      flex-direction: column;
      gap: 24px;
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.colors.green};
        border-radius: 8px;
      }

      .section-top {
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        gap: 24px;
        align-items: flex-start;
        justify-content: center;

        ${theme.media.tablet} {
          flex-direction: row;
          justify-content: space-between;
        }
      }

      .section-title {
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
      }

      h4 {
        color: ${theme.colors.secondaryFont};
      }
    }
  `}
`;
