import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ShowName from 'components/ShowName';
import MovieName from 'components/MovieName';
import Button from '@material-ui/core/Button';
import GetAppIcon from '@material-ui/icons/GetApp';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { DashboardContext } from 'components/Dashboard';
import { withStyles, Paper, Typography, Tooltip } from '@material-ui/core';
import { getImdbUrl, youtubeSearchQueryGenerator, ytsQuery } from 'utils/interpolate';

import styles from './styles';

import { textTruncate } from '../../utils/utils';
import { imgUrlMaker } from '../../utils/imgUrlMaker';

class MediaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: props.info,
      imdbUrl: '',
      youtubeUrl: '',
      torrentLink: ''
    };
  }

  makeImdbUrl = async () => {
    const imdbUrl = await getImdbUrl(this.state.info.id, this.state.info.media_type);

    this.setState({
      imdbUrl: imdbUrl
    });
  };

  makeSearchQueries = () => {
    const mediaName = this.state.info.title || this.state.info.name;
    const youtubeUrl = youtubeSearchQueryGenerator(mediaName);
    const ytsUrl = ytsQuery(mediaName);

    this.setState({
      youtubeUrl: youtubeUrl,
      torrentLink: ytsUrl
    });
  };

  componentDidMount() {
    this.makeImdbUrl();
    this.makeSearchQueries();
  }
  render() {
    const classes = this.props.classes;

    return (
      <DashboardContext.Consumer>
        {(genre) => {
          const filteredGenres = genre.filter((genreList) => this.state.info.genre_ids.includes(genreList.id));
          const filteredGenreNames = filteredGenres.map((genres) => genres.name);

          return (
            <Paper className={classes.movieCard} elevation={20}>
              <div className={classes.infoSection}>
                <header className={classes.movieHeader}>
                  <Typography className={classes.movieTitle} variant="h1" color="inherit">
                    {this.state.info.media_type === 'movie' ? (
                      <MovieName info={this.state.info} />
                    ) : (
                      <ShowName info={this.state.info} />
                    )}
                  </Typography>
                  <div className="vote">
                    {this.state.info.vote_average}
                    <span className="out-of-10">/10</span>
                  </div>
                  <Typography className={classes.duration} variant="body1" color="inherit">
                    {this.state.info.first_air_date || this.state.info.release_date}
                  </Typography>
                  <Typography className={classes.genre} variant="body1" color="inherit">
                    {filteredGenreNames.map((genre, index) => (
                      <li className="genre-list" key={index}>
                        {genre}
                      </li>
                    ))}
                  </Typography>
                </header>

                <div className={classes.description}>
                  <Typography className={classes.descriptionText} variant="body1" color="inherit">
                    {textTruncate(this.state.info.overview, 250)}
                  </Typography>
                </div>
              </div>
              <div
                className={classes.blurBackground}
                style={{
                  backgroundImage: `url(${imgUrlMaker(this.state.info.backdrop_path || this.state.info.poster_path)})`
                }}
              />
              <div className={classes.actions}>
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.marginRight20}
                  classes={{ containedSecondary: classes.youtubeRed }}
                  startIcon={<YouTubeIcon />}
                  href={this.state.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Watch Trailer
                </Button>
                <Tooltip classes={{ tooltip: classes.tooltip }} arrow title="Heuristic. Might show empty results.">
                  <Button
                    variant="outlined"
                    color="primary"
                    classes={{ outlinedPrimary: classes.ytsGreen }}
                    startIcon={<GetAppIcon />}
                    href={this.state.torrentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download Torrent
                  </Button>
                </Tooltip>
              </div>
            </Paper>
          );
        }}
      </DashboardContext.Consumer>
    );
  }
}

MediaCard.propTypes = {
  info: PropTypes.object.isRequired
};
export default withStyles(styles)(MediaCard);
