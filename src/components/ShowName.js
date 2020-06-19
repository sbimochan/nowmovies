import React from "react";
import { PropTypes } from "prop-types";

const ShowName = ({ info }) => <span>{info.name}</span>;

ShowName.propTypes = {
  info: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
};
export default ShowName;
