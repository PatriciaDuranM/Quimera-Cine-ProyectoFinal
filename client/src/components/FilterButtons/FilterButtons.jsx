import {
	StyledBlock,
	StyledFilter,
	StyledFiltersBox,
	StyledList
} from './FilterButtons.styles';

const FilterButtons = ({ setModalOpen, list, setList }) => {
	return (
		<StyledFiltersBox>
			<StyledFilter onClick={() => setModalOpen(true)}>Filtrar</StyledFilter>

			<StyledBlock $list={list} onClick={() => setList(false)}>
				<img
					src='/assets/images/Icons/ColumnListIcon.svg'
					alt='Ver películas en modo columnas'
				/>
			</StyledBlock>
			<StyledList $list={list} onClick={() => setList(true)}>
				<img
					src='/assets/images/Icons/ListListIcon.svg'
					alt='Ver películas en modo lista'
				/>
			</StyledList>
		</StyledFiltersBox>
	);
};

export default FilterButtons;
