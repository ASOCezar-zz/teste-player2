import * as Styled from './styles';

import PropTypes from 'prop-types';

import { CardBank } from '../CardBank';

export const GridBanks = ({ array = [], handleDeleteBank, handleRedirect }) => {
  return (
    <Styled.Container>
      {array.map((item) => (
        <CardBank
          key={item.ispb}
          name={item.name}
          code={item.code}
          ispb={item.ispb}
          handleDeleteBank={handleDeleteBank}
          handleRedirect={handleRedirect}
        />
      ))}
    </Styled.Container>
  );
};

GridBanks.propTypes = {
  array: PropTypes.array,
  handleDeleteBank: PropTypes.func.isRequired,
  handleRedirect: PropTypes.func.isRequired,
};
