import styled from 'styled-components';
import { colors, devices, shadows } from '../theme';

const CareersSection = styled.section`
	#first-para {
		box-shadow: ${shadows.layer1};
		padding: 2.5em;
		margin-top: 2em;
		margin-bottom: 2em;
	}

	#grid > div {
		box-shadow: ${shadows.layer1};
		border-radius: 21px;
		padding: 2.5em;
		border: 2px solid ${colors.primary};
		margin: 1em;
	}

	#needs {
		padding: 2.5em;
		border-radius: 21px;
		box-shadow: ${shadows.layer1};
	}

	${devices.md} {
		#first-para {
			border-radius: 21px;
		}
	}
`;

export default CareersSection;
