import styled from 'styled-components';
import { colors, shadows } from '../theme';

interface Props {
	bg: 1 | 0;
}

const AppHeader = styled.header<Props>`
	background-color: ${({ bg }) => (bg ? colors.white3 : 'inherit')};
	box-shadow: ${({ bg }) => (bg ? shadows.layer2 : 'none')};
	#mobile-nav {
		height: 100vh;
		position: fixed;
		z-index: 1;
		top: 0;
		right: -100px;
		background-color: ${colors.white1};
		overflow: hidden;
		transition: 0.5s;
	}
	h2 {
		color: #000000;
	}
	/* Hamburger menu on mobile. */
	.line {
		fill: none;
		stroke: rgba(41, 42, 45, 0.75);
		stroke-width: 6;
		transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
			stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
	}
	.line1 {
		stroke-dasharray: 60 207;
		stroke-width: 6;
	}
	.line2 {
		stroke-dasharray: 60 60;
		stroke-width: 6;
	}
	.line3 {
		stroke-dasharray: 60 207;
		stroke-width: 6;
	}
	.open .line1 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}
	.open .line2 {
		stroke-dasharray: 1 60;
		stroke-dashoffset: -30;
		stroke-width: 6;
	}
	.open .line3 {
		stroke-dasharray: 90 207;
		stroke-dashoffset: -134;
		stroke-width: 6;
	}
	.slide-in {
		animation: slide-in 0.5s forwards;
	}
	.slide-out {
		animation: slide-out 0.5s forwards;
	}
	@keyframes slide-in {
		100% {
			right: 0%;
		}
	}
	@keyframes slide-out {
		100% {
			right: -100%;
		}
	}
`;

export default AppHeader;
