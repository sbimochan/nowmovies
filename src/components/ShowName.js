import React from 'react';
import { PropTypes } from 'prop-types';

const ShowName = ({ name }) => <span>{name}</span>;

ShowName.propTypes = {
  name: PropTypes.string.isRequired
};
export default ShowName;
