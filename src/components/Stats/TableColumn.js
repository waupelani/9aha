import React from 'react';
import PropTypes from 'prop-types';

const TableColumn = ({
  value, format, label, link,
}) => (
  <tr>
    <td width="90%">{label}</td>
    <td>{link ? <a href={link}>{format(value)}</a> : format(value)}</td>
  </tr>
);

TableColumn.propTypes = {
  format: PropTypes.func,
  label: PropTypes.string.isRequired,
  link: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
};

TableColumn.defaultProps = {
  format: (x) => x,
  link: null,
  value: null,
};

export default TableColumn;
