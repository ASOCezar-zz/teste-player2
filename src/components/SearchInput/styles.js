import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme, isFocused }) => css`
    width: 100%;
    height: 100%;
    align-items: center;
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: row;
    padding-inline-end: 12px;
    border: ${isFocused ? `1px solid ${theme.colors.green}` : `1px solid ${theme.colors.darkGray}`};

    ${theme.media.tablet} {
      width: 280px;
    }

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
`}
`;
