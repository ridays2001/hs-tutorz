import { createGlobalStyle } from 'styled-components';
import { colors } from '../theme';

const Global = createGlobalStyle`
	body {
		font-family: 'Playfair Display';
		letter-spacing: 0.75px;
		background-color: #fafafa;
	}

	h1, h2, h3, h4, h5, h6 {
		font-family: 'Playfair Display SC';
	}

	.btn-primary {
		background-color: ${colors.primary};
		color: #ffffff;
	}
	.btn-primary:hover {
		background-color: ${colors.dark};
	}
	.btn-primary:focus {
		outline: none;
		background-color: ${colors.dark};
		box-shadow: 0 0 0 0.25rem ${colors.highlight};
	}
	.btn-lg {
		padding: 0.5rem 1rem;
		font-size: 1.25rem;
	}

	.btn-secondary {
		color: #ffffff;
		border: 1px solid #ffffff;
	}
	.btn-secondary:hover {
		background-color: #ffffff;
		color: #000000;
	}
	.btn-secondary:focus {
		outline: none;
		box-shadow: 0 0 0 0.25rem rgba(255, 255, 255, 0.3);
	}
	.btn-secondary:hover svg {
		fill: rgba(0, 0, 0, 0.75);
	}
`;

export default Global;
