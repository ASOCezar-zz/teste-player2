import * as Styled from './styles';

import messages from './dataMessages';
import { Message } from '../Message';

export const MessagesContainer = () => (
  <Styled.Container>
    {messages.map((message) => (
      <Message key={message.title} message={message} />
    ))}
  </Styled.Container>
);
