import {
	StyledBlock,
	StyledFilter,
	StyledFiltersBox,
	StyledList
} from './FilterButtons.styles';

const FilterButtons = () => {
	return (
		<StyledFiltersBox>
			<StyledFilter>Filtrar</StyledFilter>
			<StyledList>
				<img
					src='/assets/images/Icons/ListListIcon.svg'
					alt='Ver películas en modo lista'
				/>
			</StyledList>
			<StyledBlock>
				<img
					src='/assets/images/Icons/ColumnListIcon.svg'
					alt='Ver películas en modo columnas'
				/>
			</StyledBlock>
		</StyledFiltersBox>
	);
};

export default FilterButtons;
