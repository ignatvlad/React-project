import React from 'react';
import { Link } from 'dva/router';

import style from './style.less';

const LinkComponent = ({value, name}) => {
	return (
		<span className={style.root}>
			<Link activeClassName={style.activeLink} to={value}>{name}</Link>
		</span>
	);
}

export default LinkComponent;