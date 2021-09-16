import React from 'react';
import PropTypes from 'prop-types';

import TableRow from './TableRow';

const Table = ({ data }) => (
  <table>
    <tbody>
      {data.map((pair) => (
        <TableRow
          value={pair.value}
          format={pair.format}
          key={pair.label}
          label={pair.label}
          link={pair.link}
        />
      ))}
    </tbody>
  </table>
);

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    format: PropTypes.func,
    link: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.number,
      PropTypes.string,
    ]),
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default Table;
