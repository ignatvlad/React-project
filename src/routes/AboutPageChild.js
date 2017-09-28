import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

export const Mission = () => {
  return (
    <div>
      <h2>Here is what we are to bring to this world:</h2>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
  );
};

export const Launch = () => {
  return (
    <div>
      <h2>Lo and behold! We've launched that thing!</h2>
      <div>Red do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
      <div>sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
    </div>
  );
};
