import styled from 'styled-components';
import { colors, devices, shadows } from '../theme';

const Intro = styled.article`
	padding: 1.25em;

	${devices.md} {
		padding: 2em;
		margin-top: 3em;
		border-radius: 21px;
		border: 2px solid ${colors.dark};
		box-shadow: ${shadows.layer1};
	}
`;

export default Intro;
