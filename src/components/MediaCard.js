import React from 'react';
import ShowName from 'src/components/ShowName';
import MovieName from 'src/components/MovieName';
import { imgUrlMaker } from '../utils/imgUrlMaker';

const MediaCard = ({ info }) => (
  <div className="card">
    <img src={imgUrlMaker(info.poster_path)} alt="shows of thumbnails" className="thumbnail"/>
    <div className="media-body">
      <div className="vote">{`${info.vote_average}/10`}</div>
      <div className="media-title">{
        info.media_type === 'movie'
          ? <MovieName info={info}/>
          : <ShowName info={info}/>
      }</div>
    </div>
  </div>
)

export default MediaCard;