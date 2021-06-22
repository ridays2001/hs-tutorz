import styled from 'styled-components';
import { devices, shadows } from '../theme';

interface Props {
	even: 0 | 1;
}
const WorkStep = styled.div<Props>`
	margin-top: 0;
	margin-bottom: 0;
	padding: 3em 1em;

	.icon {
		margin-bottom: 2.5em;
	}

	${devices.md} {
		margin-top: 2em;
		margin-bottom: 2em;
		border-radius: 21px;
		box-shadow: ${shadows.layer2};

		.icon {
			margin-bottom: 0;
			order: ${({ even }) => (even ? -1 : 1)};
		}
	}
`;

export default WorkStep;
