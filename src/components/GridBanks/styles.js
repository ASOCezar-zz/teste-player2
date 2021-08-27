import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    max-width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-auto-rows: 160px;
    gap: 12px;
  `}
`;
