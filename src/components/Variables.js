import React from 'react';

const Variables = () => {
	const saluda = 'Hola desde constante';
	const imagen =
		'https://static4.depositphotos.com/1006994/298/v/450/depositphotos_2983099-stock-illustration-grunge-design.jpg';

	return (
		<div>
			<h2>Variables</h2>
			<p>{saluda}</p>
			<img src={imagen} />
		</div>
	);
};

export default Variables;
