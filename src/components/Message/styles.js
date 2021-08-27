import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;

    .message-title {
      font-size: 12px;
      line-height: 16px;
      color: ${theme.colors.neutralDark};
    }

    .message-text {
      color: ${theme.colors.primaryFont};
      font-weight: 400;
      line-height: 20px;
      font-size: 14px;
    }

    .message-attachment {
      display: flex;
      flex-direction: row;
      gap: 6.25px;

      p {
        font-size: 12px;
        font-weight: 400;
        line-height: 16px;
        color: ${theme.colors.gray};
      }
    }
  `}
`;
