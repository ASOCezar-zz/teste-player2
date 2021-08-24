import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, isOpen }) => css`
    position: absolute;
    width: ${isOpen ? '100%' : '0'};
    visibility: ${isOpen ? 'visible' : 'hidden'};
    height: 100vh;
    z-index: 2;
    top: 44px;
    left: 0;

    background-image: linear-gradient(0deg, #0ea4c2 0%, #13cfb9 100%);

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: all 250ms ease-in;

    .title-navlink {
      position: relative;
      inset-block-start: 24px;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 34px;
      margin-top: 104px;
      width: 100%;
      height: 100%;
      padding-inline: 20px;

      .see-more {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        img {
          cursor: pointer;
        }
      }

      a {
        text-decoration: none;
        color: ${theme.colors.white};
        display: flex;
        flex-direction: row;
        font-family: 'Red Hat Display', sans-serif;
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        gap: 15px;
        align-items: center;

        cursor: pointer;

        img {
          width: 24px;
          height: 24px;
        }
      }
    }
  `}
`;
