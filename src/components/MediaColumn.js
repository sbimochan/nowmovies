import React from 'react';
import MediaCard from './MediaCard';
import {PropTypes} from 'prop-types';

const MediaColumn = ({ results, title }) => (
    <div className="bar">
      <span>{title}</span>
      <div className="row">
        {results.map((result,index)=> {
          return <MediaCard info={result} key={index}/>
        })}
      </div>
    </div>
  );

MediaColumn.propTypes = {
  results: PropTypes.array,
  title: PropTypes.string
}
export default MediaColumn;