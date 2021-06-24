import styled from 'styled-components';
import { colors, shadows } from '../theme';

const Intro = styled.article`
	margin-top: 3em;
	border-radius: 21px;
	box-shadow: ${shadows.layer1};
	padding: 2em;
	border: 2px solid ${colors.dark};
`;

export default Intro;
