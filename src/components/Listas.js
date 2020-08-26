import React, { useState } from 'react';

const Listas = () => {
	const valoresIniciales = [
		{ id: 1, texto: 'tarea 1' },
		{ id: 2, texto: 'tarea 2' },
		{ id: 3, texto: 'tarea 3' },
	];
	const [listas, setListas] = useState(valoresIniciales);

	const agregarElemento = () => {
		setListas([...listas, { id: 4, texto: 'tarea 4' }]);
	};
	return (
		<div>
			<h3>Listas:</h3>

			{listas.map((item, index) => (
				<h3 key={index}>{item.texto}</h3>
			))}
			<button onClick={() => agregarElemento()}>Agregar</button>
		</div>
	);
};

export default Listas;
