import React from 'react';
import ShowName from 'src/components/ShowName';
import MovieName from 'src/components/MovieName';

const MediaCard = ({ info }) => (
  <div className="card">
    {info.media_type === 'movie'
      ? <MovieName info={info}/>
      : <ShowName info={info}/>}

  </div>
)

export default MediaCard;