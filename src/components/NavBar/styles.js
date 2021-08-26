import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    position: fixed;
    inset-inline: 0;
    width: 44px;
    height: 44px;
    background-image: linear-gradient(0deg, #0ea4c2 0%, #13cfb9 100%);

    .btn-open-menu {
      padding: 0;
      border: none;
      width: 100%;
      height: 100%;
      background-color: transparent;
      outline: none;
    }

    .options-group,
    .options-logout {
      display: none;
      visibility: hidden;
    }

    ${theme.media.desktop} {
      height: 80px;
    }
  `}
`;
