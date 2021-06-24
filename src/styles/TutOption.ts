import styled from 'styled-components';
import { devices, shadows } from '../theme';

const TutOption = styled.div`
	border-radius: 21px;
	box-shadow: ${shadows.layer2};
	border: 2px solid #bd8e45;
	padding: 2.5em 1em;
	margin-top: 1.25em;
	background-color: #fbbd5c;

	${devices.md} {
		margin-top: 0;
	}

	ul {
		margin-top: 1em;
	}
`;

export default TutOption;
