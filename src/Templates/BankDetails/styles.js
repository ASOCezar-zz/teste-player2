import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.background};
    box-sizing: border-box;
    max-width: 100%;
    height: 100vh;
    overflow: hidden;
    padding-inline: 24px;
    align-items: center;
    justify-content: center;

    ${theme.media.tablet} {
      padding-inline: 46px;
    }

    ${theme.media.desktop} {
      padding-inline: 68px;
    }

    main {
      max-width: 100%;
      height: calc(100% - 80px);
      overflow-y: scroll;
      display: flex;
      flex-direction: column;

      .main-content {
        box-shadow: 0px 4px 20px rgba(71, 79, 99, 0.05);
        border-radius: 8px;
        padding: 24px;
        background-color: ${theme.colors.white};
        margin-top: 24px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        .bank-details {
          width: 100%;
          border-bottom: 1px solid ${theme.colors.darkGray};
          padding-block-end: 24px;

          .header-title {
            margin-bottom: 12px;
          }

          .section-title {
            font-size: 12px;
            line-height: 16px;
            color: ${theme.colors.neutralDark};
            margin-bottom: 4px;
          }
          .section-subtitle {
            font-size: 14px;
            line-height: 20px;
            font-weight: 400;
            color: ${theme.colors.primaryFont};
            margin-bottom: 12px;
          }
        }

        .messages-container {
          padding-block-start: 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 24px;

          .message-content {
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
          }
        }
      }
    }
  `}
`;
