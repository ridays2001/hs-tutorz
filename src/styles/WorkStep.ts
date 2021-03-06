import styled from 'styled-components';
import { devices, shadows } from '../theme';

interface Props {
	even: 0 | 1;
	color: string;
	border: string;
}
const WorkStep = styled.div<Props>`
	margin-top: 0;
	margin-bottom: 0;
	padding: 3em 1em;
	background-color: ${({ color }) => color};

	.icon {
		margin-bottom: 2.5em;
		width: 75%;
	}
	.icon2 {
		margin-bottom: 2.5em;
	}

	${devices.xs} {
		.icon {
			width: 50%;
		}
	}

	${devices.sm} {
		.icon {
			width: 40%;
		}
	}

	${devices.md} {
		margin-top: 2em;
		margin-bottom: 2em;
		border-radius: 21px;
		box-shadow: ${shadows.layer1};
		border: 2px solid ${({ border }) => border || 'transparent'};

		.icon {
			margin-bottom: 0;
			order: ${({ even }) => (even ? -1 : 1)};
		}
	}
`;

export default WorkStep;
