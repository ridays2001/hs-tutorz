import styled from 'styled-components';
import { colors, devices, shadows } from '../theme';

const PricingSection = styled.section`
	.card {
		cursor: default;
		margin: 1.5em 1em;
		transition: all 0.25s ease;
		background-color: #ffffff;
		box-shadow: ${shadows.layer1};
		border-radius: 14px;
		text-align: center;
		font-size: 14px;
	}
	.card:hover,
	.card:focus {
		transform: translateY(-7.5px);
		box-shadow: ${shadows.layer2};
	}
	.card-title {
		font-family: 'Playfair Display SC';
		font-size: 20px;
	}
	.card-text,
	.list-group,
	.card-subtitle {
		font-family: 'Roboto Slab';
	}
	.card-subtitle {
		font-size: 11px;
		color: ${colors.grey};
	}
	${devices.md} {
		.card-subtitle {
			font-size: 12px;
		}
	}

	.card-body {
		border-bottom-right-radius: 14px !important;
		border-bottom-left-radius: 14px !important;
	}
	ul.list-group {
		background-color: ${colors.white3} !important;
		border-radius: 7px;
	}
	.list-group-item {
		border: none;
	}
	li::before {
		content: '✔';
		margin-right: 10px;
		color: ${colors.primary};
		font-size: 14px;
	}
	.list-group-item:first-of-type {
		margin-top: 12px;
	}
	.card-body {
		border-bottom: 1px solid rgba(0, 0, 0, 0.25);
	}

	.price {
		font-size: 18px;
	}
	.strike {
		text-decoration: line-through;
		font-size: 12px;
		margin-right: 5px;
	}

	.rec {
		border: 4px solid ${colors.dark};
	}

	.btn:focus,
	.btn:active {
		outline: none;
	}
	.btn-2 {
		color: ${colors.primary};
		border: 1px solid ${colors.highlightgrey};
	}
	.btn-2:hover {
		background-color: ${colors.highlightLow};
		color: ${colors.dark};
	}

	#individual ul {
		margin-top: 7em;
	}

	#custom .card-title {
		margin-bottom: 3.5em;
	}
	#custom ul {
		margin-top: 7em;
	}
`;

export default PricingSection;
