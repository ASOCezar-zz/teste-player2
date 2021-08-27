import * as Styled from './styles';

import PropTypes from 'prop-types';

import { CardBank } from '../CardBank';

export const GridBanks = ({ array = [], banks = [], searchBanks = [], setBanks, setSearchBanks }) => {
  return (
    <Styled.Container>
      {array.map((item) => (
        <CardBank
          key={item.ispb}
          name={item.name}
          code={item.code}
          ispb={item.ispb}
          banks={banks}
          searchBanks={searchBanks}
          setBanks={setBanks}
          setSearchBanks={setSearchBanks}
        />
      ))}
    </Styled.Container>
  );
};

GridBanks.propTypes = {
  array: PropTypes.array,
  banks: PropTypes.array,
  searchBanks: PropTypes.array,
  setBanks: PropTypes.func.isRequired,
  setSearchBanks: PropTypes.func.isRequired,
};
