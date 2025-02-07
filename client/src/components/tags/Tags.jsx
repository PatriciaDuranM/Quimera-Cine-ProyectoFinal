import { StyledAge, StyledGenre } from './tags.styles';

const Tag = ({ type, values, size }) => {
	console.log(size);
	if (type === 'age')
		return (
			<StyledAge $size={size} $color={values.color}>
				{values.text}
			</StyledAge>
		);

	if (type === 'genre')
		return (
			<StyledGenre $size={size} $color={values.color}>
				{values.text}
			</StyledGenre>
		);
};

export default Tag;
