import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, isFocused }) => css`
    background-color: ${theme.colors.background};
    box-sizing: border-box;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-inline: 24px;
    align-items: center;
    justify-content: center;

    ${theme.media.tablet} {
      padding-inline: 46px;
    }

    ${theme.media.desktop} {
      padding-inline: 68px;
    }

    main {
      max-width: 100%;
      display: flex;
      flex-direction: column;
      gap: 12px;
      height: calc(100% - 80px);
      overflow-y: scroll;
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

          :focus {
            < .search {
              border:  !important;
            }
          }

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
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-auto-rows: 140px;
        gap: 12px;
      }
    }
  `}
`;
