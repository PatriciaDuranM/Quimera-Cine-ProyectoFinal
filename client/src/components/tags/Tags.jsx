import { StyledAge } from './tags.styles';

const Tag = ({ type, values, size }) => {
	console.log(size);
	if (type === 'age')
		return (
			<StyledAge $size={size} $color={values.color}>
				{values.text}
			</StyledAge>
		);
};

export default Tag;
