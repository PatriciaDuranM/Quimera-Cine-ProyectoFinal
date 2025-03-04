import {
	StyledDiv,
	StyledLabel,
	StyledRadioButton
} from './RadioPicker.styled';

const RadioPicker = ({ value, action, label, checked }) => {
	return (
		<StyledDiv>
			<StyledRadioButton
				defaultChecked={checked}
				value={value}
				onChange={action}
				type='checkbox'
			/>
			<StyledLabel>{label}</StyledLabel>
		</StyledDiv>
	);
};

export default RadioPicker;
