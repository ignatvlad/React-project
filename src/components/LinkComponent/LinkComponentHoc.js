import React from 'react';
import LinkComponent from './LinkComponent';

const LinkComponentHoc = (props) => {
	const { value, name} = props;
	if (value && name) {
		return <LinkComponent {...props} />
	} else if (!value && !name) {
		return <span> пусто совсем пусто </span>
	} else if (!value) {
		return <span>нет пути, куда идти</span>
	} else if (!name) {
		return <LinkComponent value={value} name={value} />
	} else {
		return <span> непридвиденная ситуация </span>
	}
}

export default LinkComponentHoc;