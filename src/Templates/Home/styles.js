import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    box-sizing: border-box;
    max-width: 100%;
    padding-inline: 24px;
    align-items: center;
    justify-content: center;

    main {
      margin-top: 44px;
      display: flex;
      flex-direction: column;
      gap: 12px;

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
        position: relative;
        width: 100%;
        height: 44px;
        background-color: ${theme.colors.white};

        input {
          width: 100%;
          border: 1px solid rgba(206, 212, 222, 1);
          height: 100%;
          padding: 12px;
          outline: none;
          font-family: 'Red Hat Display', sans-serif;

          color: ${theme.colors.primaryFont};

          transition: border 0.2s linear;

          :focus {
            border: 1px solid ${theme.colors.green};
          }

          ::placeholder {
            color: ${theme.colors.secondaryFont};
            font-family: 'Red Hat Display', sans-serif;
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
          }
        }

        img {
          cursor: pointer;
          position: absolute;
          inset-inline-end: 12px;
          inset-block-start: 10px;
          width: 24px;
          height: 24px;
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
