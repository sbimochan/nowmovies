import React, { Suspense } from "react";
import { PropTypes } from "prop-types";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const MediaCard = React.lazy(() => import("components/MediaCard/MediaCard"));

const MediaColumn = ({ results, title }) => (
  <div className="bar">
    <h2 className="heading">{title}</h2>
    <div className="row">
      {results.map((result, index) => {
        return (
          <Suspense fallback={<CardSkeleton />} key={index}>
            <MediaCard info={result} key={index} />;
          </Suspense>
        );
      })}
    </div>
  </div>
);

const CardSkeleton = () => {
  const useStyles = makeStyles(() => ({
    root: {
      backgroundColor: "#353940",
    },
  }));
  const classes = useStyles();

  return (
    <Box>
      <Skeleton variant="text" width={200} classes={{ root: classes.root }} />
      <Skeleton
        variant="rect"
        width={864}
        height={300}
        classes={{ root: classes.root }}
      />
    </Box>
  );
};

MediaColumn.propTypes = {
  results: PropTypes.array,
  title: PropTypes.string,
};
export default MediaColumn;
