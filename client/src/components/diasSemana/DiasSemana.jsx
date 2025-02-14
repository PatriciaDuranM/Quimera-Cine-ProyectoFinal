import { useState } from 'react';
import { StyledDay, StyledH2, StyledH3, StyledWeek } from './DiasSemana.styles';

const DiasSemana = () => {
	const [selectedDay, setSelectedDay] = useState(false);
	return (
		<StyledWeek>
			<StyledDay
				$selectedDay={selectedDay}
				onClick={() => setSelectedDay(!selectedDay)}
			>
				<StyledH2>HOY</StyledH2>
				<StyledH3>08 FEB</StyledH3>
			</StyledDay>
			<StyledDay
				$selectedDay={selectedDay}
				onClick={() => setSelectedDay(!selectedDay)}
			>
				<StyledH2>DOM</StyledH2>
				<StyledH3>09 FEB</StyledH3>
			</StyledDay>
		</StyledWeek>
	);
};

export default DiasSemana;
