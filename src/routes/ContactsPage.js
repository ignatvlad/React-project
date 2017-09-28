import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';

function ContactsPage() {
  return (
    <div>
      <h1>Contact us:</h1>
      <h3>+123456789</h3>
    </div>
  );
}

ContactsPage.propTypes = {
};

export default ContactsPage;
