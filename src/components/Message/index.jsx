import * as Styled from './styles';

import PropTypes from 'prop-types';

import attachmentIcon from '../../assets/icons/attachment-icon.svg';

export const Message = ({ message }) => (
  <Styled.Container>
    <h5 className="message-title">{message.title}</h5>
    <p className="message-text">{message.text}</p>
    {message.attachments.length > 0 &&
      message.attachments.map((attachment) => (
        <div className="message-attachment" key={attachment.attachmentName + attachment.extension}>
          <img src={attachmentIcon} />
          <p>
            {attachment.name}
            {attachment.extension} - {attachment.size}
          </p>
        </div>
      ))}
  </Styled.Container>
);

Message.propTypes = {
  message: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    attachments: PropTypes.array,
  }).isRequired,
};
