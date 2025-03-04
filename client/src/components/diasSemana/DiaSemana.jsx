import { useState } from 'react';
import { StyledDay, StyledH2, StyledH3 } from './DiaSemana.styles';

const DiaSemana = ({ isSelected, action, month, name, number }) => {
	return (
		<>
			<StyledDay $isSelected={isSelected} onClick={action}>
				<StyledH2>{name}</StyledH2>
				<StyledH3>
					{number} {month}
				</StyledH3>
			</StyledDay>
		</>
	);
};

export default DiaSemana;
