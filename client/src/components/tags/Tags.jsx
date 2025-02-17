import { StyledAge, StyledGenre } from './tags.styles';

const Tag = ({ type, values, size, position }) => {
	if (type === 'age')
		return (
			<StyledAge $size={size} $color={values.color} $position={position}>
				{values.text}
			</StyledAge>
		);

	if (type === 'genre')
		return (
			<StyledGenre $size={size} $color={values.color} $position={position}>
				{values.text}
			</StyledGenre>
		);
};

export default Tag;
