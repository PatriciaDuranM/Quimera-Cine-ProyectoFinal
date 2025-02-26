import { useState } from 'react';
import { StyledDay, StyledH2, StyledH3 } from './DiaSemana.styles';

const DiaSemana = () => {
	const [selectedDay, setSelectedDay] = useState(false);

	return (
		<>
			<StyledDay
				$selectedDay={selectedDay}
				onClick={() => setSelectedDay(!selectedDay)}
			>
				<StyledH2>HOY</StyledH2>
				<StyledH3>08 FEB</StyledH3>
			</StyledDay>
		</>
	);
};

export default DiaSemana;
