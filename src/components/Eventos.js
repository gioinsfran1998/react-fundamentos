import React, { useState } from 'react';

const Eventos = () => {
	const [texto, setTexto] = useState('Texto desde estado');

	const eventoClick = () => {
		console.log('Me diste un click');
		setTexto('cambiando texto desde funcion');
	};
	return (
		<>
			<h4>{texto}</h4>
			<button onClick={() => eventoClick()}>Click</button>
		</>
	);
};

export default Eventos;
