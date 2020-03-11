import React from 'react';
import MediaCard from './MediaCard';
import {PropTypes} from 'prop-types';

const MediaColumn = ({ results, title, logo }) => (
    <div className="bar">
      {logo && <img src={logo} height="50px" alt="main logo" className="main-logo"/>}
      <h2 className="heading">{title}</h2>
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