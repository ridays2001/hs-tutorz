import styled from 'styled-components';
import { colors, devices, shadows } from '../theme';

const TutOption = styled.div`
	border-radius: 21px;
	box-shadow: ${shadows.layer1};
	padding: 2.5em 1em;
	margin-top: 1.25em;
	border: 2px solid ${colors.dark};

	${devices.md} {
		margin-top: 0;
	}

	ul {
		margin-top: 1em;
	}
`;

export default TutOption;
