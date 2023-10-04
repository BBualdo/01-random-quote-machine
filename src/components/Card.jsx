import React from 'react';

import classes from './Card.module.scss';

const Card = (props) => {
	return (
		<div id='quote-box' className={classes.card}>
			{props.children}
		</div>
	);
};

export default Card;
