import styled from 'styled-components';
import { colors, devices, shadows } from '../theme';

const ContactSection = styled.section`
	section {
		border-radius: 21px;
		box-shadow: ${shadows.layer1};
		padding: 2em;
	}

	#num {
		margin-top: 2em;
	}

	.highlight {
		display: inline-block;
		margin-left: 5px;
		margin-right: 5px;
		padding-left: 5px;
		padding-right: 5px;
		font-family: 'Roboto Slab';
		background-color: ${colors.highlightMid};
	}

	${devices.md} {
		#num {
			margin-top: 0;
		}
	}
`;

export default ContactSection;
