import styled from 'styled-components';

const StyledDiv = styled.div`
	display: flex;
	flex-direction: row;
	gap: 18px;
`;

const StyledBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-shrink: 0;
`;

const StyledLabel = styled.label`
	display: flex;
	height: 45px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border-radius: 10px 10px 0px 0px;
	background: rgba(196, 182, 220, 0.3);
`;

const StyledDay = styled.input`
	display: flex;
	height: 48px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border-radius: 0px 0px 10px 10px;
	background: #c4b6dc;
`;
const StyledHour = styled.input`
	display: flex;
	height: 48px;
	padding: 10px;
	justify-content: center;
	align-items: center;
	align-self: stretch;
	border-radius: 0px 0px 10px 10px;
	background: #c4b6dc;
`;

export { StyledDiv, StyledBox, StyledLabel, StyledHour, StyledDay };
