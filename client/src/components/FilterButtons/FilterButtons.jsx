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
			<StyledList $list={list} onClick={() => setList(true)}>
				<img
					src='/assets/images/Icons/ListListIcon.svg'
					alt='Ver películas en modo lista'
				/>
			</StyledList>
			<StyledBlock $list={list} onClick={() => setList(false)}>
				<img
					src='/assets/images/Icons/ColumnListIcon.svg'
					alt='Ver películas en modo columnas'
				/>
			</StyledBlock>
		</StyledFiltersBox>
	);
};

export default FilterButtons;
