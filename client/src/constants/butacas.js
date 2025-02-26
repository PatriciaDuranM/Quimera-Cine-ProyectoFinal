export const BUTACAS = Array(40)
	.fill(0)
	.map((_, index) => {
		const row = Math.floor(index / 8) + 1; // Filas del 1 al 5 (7 columnas por fila)
		const column = String.fromCharCode(65 + (index % 8)); // Columnas de A a G
		return { row, column, state: 0 };
	});
console.log(BUTACAS);
