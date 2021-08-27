import styled, { css, keyframes } from 'styled-components';

const openingOption = keyframes`
  0% {
    opacity: 0;
    transform: rotateX(-90deg);
  }
  100% {
    opacity: 1;
    transform: rotateX(0deg);
  }
`;

const openedOptions = (openList) =>
  openList
    ? css`
        width: 100%;
        perspective: 1000px;
        .drop-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: 12px 10px 12px 44px;
          height: 42px;
          opacity: 0;
          transform-origin: top center;
          backdrop-filter: brightness(80%);
          &:nth-child(1n) {
            animation: ${openingOption};
            animation-duration: 400ms;
            animation-delay: calc(150ms);
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
          }
          &:nth-child(2n) {
            animation: ${openingOption};
            animation-duration: 400ms;
            animation-delay: calc(150ms * 2);
            animation-timing-function: ease-in-out;
            animation-fill-mode: forwards;
          }

          a {
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 18px;
            letter-spacing: 0em;
            text-align: left;
            cursor: pointer;
          }
        }
      `
    : css`
        .drop-item {
          display: none;
        }
      `;

export const Container = styled.div`
  ${({ theme, openList }) => css`
    .btn-container {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      transition: all 250ms linear;
      cursor: pointer;
      padding: 15px;
      user-select: none;

      .see-more {
        display: flex;
        flex-direction: row;
        gap: 15px;
        background-color: transparent;
        border: none;
        align-items: center;
        cursor: pointer;

        img {
          width: 24px;
          height: 24px;
        }

        span {
          color: ${theme.colors.white};
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
        }

        img {
          cursor: pointer;
        }
      }
    }

    .options {
      list-style: none;
      ${openedOptions(openList)}
    }
  `}
`;
