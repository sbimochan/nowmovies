import React from "react";
import {PropTypes} from 'prop-types';

const MovieName = ({info}) => (
  <span>{info.title}</span>
);

MovieName.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired
  })
}
export default MovieName;