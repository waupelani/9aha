import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({
  link, format, hours, minutes, seconds,
}) => (
  <tr>
    <td>{link ? <a href={link}>{format(hours)}</a> : format(hours)}</td>
    <td>{link ? <a href={link}>{format(minutes)}</a> : format(minutes)}</td>
    <td width="50%">{seconds}</td>
  </tr>
);

TableRow.propTypes = {
  format: PropTypes.func,
  link: PropTypes.string,
  hours: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
  minutes: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
  seconds: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.number,
    PropTypes.string,
  ]),
};

TableRow.defaultProps = {
  format: (x) => x,
  link: null,
  hours: null,
  minutes: null,
  seconds: null,
};

export default TableRow;
