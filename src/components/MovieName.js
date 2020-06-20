import React from 'react';
import { PropTypes } from 'prop-types';

const MovieName = ({ title }) => <span>{title}</span>;

MovieName.propTypes = {
  title: PropTypes.string.isRequired
};
export default MovieName;
