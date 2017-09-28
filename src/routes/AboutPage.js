import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';

import LinkComponent from '../components/LinkComponent';

function AboutPage({children}) {
  return (
    <div>
      <h1>A short story about us</h1>
      <div>
        <LinkComponent value="about/mission" name="Our Mission" />
        <LinkComponent value="about/launch" name="The Great Launch" />
      </div>
      <div>{children}</div>
    </div>
  );
}

AboutPage.propTypes = {
};

export default AboutPage;
