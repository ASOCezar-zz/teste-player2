import styled, { css, keyframes } from 'styled-components';

const rotate = () => keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-width: 0.5rem;
      border-color: transparent;
      border-style: solid;
      border-radius: 50%;
    }

    &:after {
      width: 6rem;
      height: 6rem;
      border-left: 0.5rem solid ${theme.colors.green};
      animation: ${rotate} 0.6s linear infinite;
    }
    &:before {
      width: 2rem;
      height: 2rem;
      border-left: 0.5rem solid ${theme.colors.green};
      animation: ${rotate} 1s linear reverse infinite;
    }
  `}
`;