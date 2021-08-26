import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, isFocused }) => css`
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
      width: 10px
    }
   
    ::-webkit-scrollbar-thumb {   
      background-color: ${({ theme }) => theme.colors.green};
      border-radius: 8px;
    }
      .section-title {
        margin-top: 24px;
        display: flex;
        flex-direction: row;
        gap: 12px;
        align-items: center;
      }

      h4 {
        color: ${theme.colors.secondaryFont};
      }

      .search {
        width: 100%;
        height: 44px;
        background-color: ${theme.colors.white};
        display: flex;
        flex-direction: row;
        padding-inline-end: 12px;
        border: ${isFocused ? `1px solid ${theme.colors.green}` : '1px solid rgba(206, 212, 222, 1)'};

        input {
          box-sizing: border-box;
          width: 100%;
          max-height: 100%;
          border: none;
          outline: none;
          padding: 12px;
          
          font-family: 'Red Hat Display', sans-serif;

          color: ${theme.colors.primaryFont};

          transition: border 0.2s linear;

          ::placeholder {
            color: ${theme.colors.secondaryFont};
            font-family: 'Red Hat Display', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }

        }

        button {
          background-color: transparent;
          border: none;
          cursor: pointer;
          inset-inline-end: 12px;
          inset-block-start: 10px;
          width: 100%
          height: 24px;
          background-position: center;
        }
      }

      .grid-banks {
          max-width: 100%;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          grid-auto-rows: 160px;
          gap: 12px;
        }

    }
  `}
`;
