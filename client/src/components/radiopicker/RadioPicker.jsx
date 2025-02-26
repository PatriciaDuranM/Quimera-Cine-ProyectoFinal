import {
	StyledDiv,
	StyledLabel,
	StyledRadioButton
} from './RadioPicker.styled';

const RadioPicker = ({ value, action, label }) => {
	return (
		<StyledDiv>
			<StyledRadioButton value={value} onChange={action} type='checkbox' />
			<StyledLabel>{label}</StyledLabel>
		</StyledDiv>
	);
};

export default RadioPicker;
