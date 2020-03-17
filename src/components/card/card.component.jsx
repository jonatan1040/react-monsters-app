import React from 'react';

import './card.styles.css';

export const Card = (props) => {
	const { monster } = props;
	return (
		<div className="card-container">
			<img src={`https://robohash.org/${monster.id}?set=set2&size=150x150`} alt="monster" />
			<h2>{monster.name}</h2>
			<p>{monster.email}</p>
		</div>
	);
};
