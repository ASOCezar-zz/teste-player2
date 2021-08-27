import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    padding-block-start: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  `}
`;
