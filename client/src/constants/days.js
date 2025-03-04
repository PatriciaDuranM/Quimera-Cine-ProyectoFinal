export const ObtenerDias = () => {
	const diasSemana = ['LUN', 'MAR', 'MIER', 'JUE', 'VIE', 'SAB', 'DOM'];

	const meses = [
		'ENE',
		'FEB',
		'MAR',
		'ABR',
		'MAY',
		'JUN',
		'JUL',
		'AGO',
		'SEP',
		'OCT',
		'NOV',
		'DIC'
	];

	const hoy = new Date();
	let semana = [];

	for (let i = 0; i < 7; i++) {
		let diaActual = new Date(hoy);
		diaActual.setDate(hoy.getDate() + i);

		semana.push({
			diaSemana: diasSemana[diaActual.getDay()], // Nombre del día
			numero: diaActual.getDate(), // Número del día
			mes: meses[diaActual.getMonth()] // Nombre del mes
		});
	}

	return semana;
};

console.log(ObtenerDias());

const getWeekData = () => {
	const semana = [];
	const diasSemana = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
	const meses = [
		'ENE',
		'FEB',
		'MAR',
		'ABR',
		'MAY',
		'JUN',
		'JUL',
		'AGO',
		'SEP',
		'OCT',
		'NOV',
		'DIC'
	];

	const today = new Date();

	for (let i = 0; i < 7; i++) {
		const currentDate = new Date();
		currentDate.setDate(today.getDate() + i);

		const dayNumber = currentDate.getDate();
		const dayName = diasSemana[currentDate.getDay()];
		const monthName = meses[currentDate.getMonth()];

		semana[i] = { dayNumber, dayName, monthName };
	}

	return semana;
};

// Exporta el objeto con los datos de la semana
export const semana = getWeekData();

/*sucio*/
// {semana.map(dayInfo =>
// 	{ if /*(saber si day.Info.dayname coincide con los dias que tenemos en horarios, si coincide se devuelve, si no no)*/

// 	return <DiaSemana
// 		key={dayInfo.dayNumber}
// 		month={dayInfo.monthName}
// 		number={dayInfo.dayNumber}
// 		name={dayInfo.dayName}
// 		action={() => setSelectedDay(dayInfo)}
// 		isSelected={selectedDay === dayInfo}
// 	/>

// })}
