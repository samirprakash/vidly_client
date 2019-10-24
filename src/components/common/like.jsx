import PropTypes from 'prop-types';
import React from 'react';

const Like = ({ onClick, liked }) => {
  let classes = 'fa fa-heart';
  if (!liked) {
    classes += '-o';
  }
  return (
    <i
      onClick={onClick}
      style={{ cursor: 'pointer' }}
      className={classes}
      aria-hidden="true"
    ></i>
  );
};

Like.propTypes = {
  onClick: PropTypes.func.isRequired,
  liked: PropTypes.bool.isRequired
};

export default Like;
