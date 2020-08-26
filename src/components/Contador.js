import React, { useState } from 'react';

const Contador = () => {
	const [contador, setContador] = useState(0);

	return (
		<div>
			<h4>{contador < 2 ? 'es menor a dos' : 'es mayor a dos'}</h4>
			<h4>{contador}</h4>
			<button onClick={() => setContador(contador + 1)}>Click</button>
		</div>
	);
};

export default Contador;
