import styled from 'styled-components';
import { colors, shadows } from '../theme';

const ContactSection = styled.section`
	section {
		border-radius: 21px;
		box-shadow: ${shadows.layer1};
		padding: 2em;
		background-color: ${colors.primary};
		color: #ffffff;
	}
`;

export default ContactSection;
