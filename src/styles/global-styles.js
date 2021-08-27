import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {

    ::-webkit-scrollbar {
      width: 10px
    } 
   
    ::-webkit-scrollbar-thumb {   
      background-color: ${({ theme }) => theme.colors.green};
      border-radius: 8px;
    }
  }

  h2 {
    color: ${({ theme }) => theme.colors.secondaryFont};
    font-size: 24px;
    font-weight: 500;
  }

  h3, h4 {
    color: ${({ theme }) => theme.colors.primaryFont};
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
  }

  h4 {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;
