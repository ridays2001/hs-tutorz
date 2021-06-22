import styled from 'styled-components';
import { colors, devices, shadows } from '../theme';

const TutOption = styled.div`
	border-radius: 21px;
	box-shadow: ${shadows.layer2};
	border: 2px solid ${colors.primary};
	padding: 2.5em 1em;
	margin-top: 1.25em;

	${devices.md} {
		margin-top: 0;
	}

	ul {
		margin-top: 1em;
	}
`;

export default TutOption;
