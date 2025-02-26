import {
	Box,
	StyledDay,
	StyledDiv,
	StyledHour,
	StyledLabel
} from './DatePicker.styles';

const DatePicker = () => {
	return (
		<>
			<StyledDiv>
				<Box>
					<StyledLabel>Día</StyledLabel>
					<StyledDay type='day'></StyledDay>
				</Box>
				<Box>
					<StyledLabel>Hora</StyledLabel>
					<StyledHour type='hour'></StyledHour>
				</Box>
			</StyledDiv>
		</>
	);
};

export default DatePicker;
