import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    height: 43px;
    cursor: pointer;

    button {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${theme.colors.green};
      border: none;
      color: ${theme.colors.white};
      padding: 12px 24px;
      p {
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        line-height: 19px;
        text-align: left;
        padding: 0;
        margin: 0;
      }
    }
  `}
`;
