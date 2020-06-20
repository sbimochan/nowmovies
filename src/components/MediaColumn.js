import React, { Suspense } from 'react';
import { PropTypes } from 'prop-types';
import Skeleton from '@material-ui/lab/Skeleton';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const MediaCard = React.lazy(() => import('components/MediaCard/MediaCard'));

const MediaColumn = ({ results, title }) => (
  <div className="bar">
    <Typography variant="h4" className="heading">
      {title}
    </Typography>
    <div className="row">
      {results.map((result, index) => {
        return (
          <Suspense fallback={<CardSkeleton />} key={index}>
            <MediaCard info={result} key={index} />
          </Suspense>
        );
      })}
    </div>
  </div>
);

const CardSkeleton = () => {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: '#353940',
      marginBottom: 10
    },
    wrapper: {
      margin: '5px 10px'
    }
  }));
  const classes = useStyles();

  return (
    <Box classes={{ root: classes.wrapper }}>
      <Skeleton variant="text" width={200} height={25} classes={{ root: classes.root }} />
      <Skeleton variant="text" width={70} height={20} classes={{ root: classes.root }} />
      <Skeleton variant="text" width={200} height={50} classes={{ root: classes.root }} />
      <Skeleton variant="rect" width={864} height={240} classes={{ root: classes.root }} />
      <Box style={{ display: 'flex' }}>
        <Skeleton variant="rect" width={170} height={35} classes={{ root: classes.root }} style={{ marginRight: 20 }} />
        <Skeleton variant="rect" width={170} height={35} classes={{ root: classes.root }} />
      </Box>
    </Box>
  );
};

MediaColumn.propTypes = {
  results: PropTypes.array,
  title: PropTypes.string
};
export default MediaColumn;
