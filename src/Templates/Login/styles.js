import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: 20px;

      .form-error {
        color: red;
      }
    }
  `}
`;
