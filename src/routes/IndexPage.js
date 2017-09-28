import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.less';

import LinkComponent from '../components/LinkComponent';

const LINKS = [{
	name: 'home',
	value: '/home'
}, {
	name: 'about',
	value: '/about'
}, {
	name: 'action',
	value: '/action'
}, {
	name: 'contacts',
	value: '/contacts'
}, {
	name: 'POKEMONS',
	value: '/pokemons'
}, {
	name: 'carspage',
	value: '/carspage'
}, {
	value: 'google.com'
}, {
	name: 'asdasdas'
}
];


const IndexPage = ({children}) => (
  <div className={styles.root}>
    <div>
    	{LINKS.map(({value, name}, index) => <LinkComponent key={`IndexPage-link-${index}`} name={name} value={value} />)}
    </div>
    <div>{children}</div>
  </div>
);

IndexPage.propTypes = {
};

export default IndexPage;
