import {
	StyledBlock,
	StyledFilter,
	StyledFiltersBox,
	StyledList
} from './FilterButtons.styles';

const FilterButtons = ({ list, setList }) => {
	return (
		<StyledFiltersBox>
			<StyledFilter>Filtrar</StyledFilter>
			<StyledList onClick={() => setList(!list)}>
				<img
					src='/assets/images/Icons/ListListIcon.svg'
					alt='Ver películas en modo lista'
				/>
			</StyledList>
			<StyledBlock onClick={() => setList(list === false)}>
				<img
					src='/assets/images/Icons/ColumnListIcon.svg'
					alt='Ver películas en modo columnas'
				/>
			</StyledBlock>
		</StyledFiltersBox>
	);
};

export default FilterButtons;
