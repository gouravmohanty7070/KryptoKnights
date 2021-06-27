import React from 'react';
import { Typography } from '@material-ui/core';

function DisplayComponent(props) {
  const h = () => {
    if (props.time.h === 0) {
      return '';
    } else {
      return <span>{(props.time.h >= 10) ? props.time.h : "0" + props.time.h}</span>;
    }
  }
  return (
    <div>
      <Typography variant="h2" align="center" style={{ color: "#2F5D62" }} gutterBottom>
        Timer
      </Typography>
      <Typography variant="h5" align="center" color="textSecondary" paragraph style={{ color: "#558776" }}>
        Use this timer during your productive hours so it can help you to keep a check on yourself.
      </Typography>
      {h()}&nbsp;&nbsp;
      <span>{(props.time.m >= 10) ? props.time.m : "0" + props.time.m}</span>&nbsp;:&nbsp;
      <span>{(props.time.s >= 10) ? props.time.s : "0" + props.time.s}</span>&nbsp;:&nbsp;
      <span>{(props.time.ms >= 10) ? props.time.ms : "0" + props.time.ms}</span>
    </div>
  );
}

export default DisplayComponent;