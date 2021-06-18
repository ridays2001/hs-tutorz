import { Link } from 'gatsby';
import styled from 'styled-components';
import { breakpoints, colors, text } from '../theme';

interface Props {
	active: 1 | 0;
}

const NavLink = styled(Link)<Props>`
	color: ${({ active }) => (active ? text.high : colors.primary)};
	background-color: ${({ active }) => (active ? colors.highlight : 'none')};

	text-decoration: none;
	padding: 5px 10px;
	border-radius: 3.5px;
	display: inline-block;
	transition: all 0.3s ease-in-out;

	:hover,
	:focus {
		color: ${text.high};
		background-color: ${colors.highlight};
		text-decoration: none;
	}

	@media (max-width: ${parseInt(breakpoints.md, 10) - 1}px) {
		width: 100%;
		display: block;
		padding: 7.5% 5px;
		margin: 6.5% auto;
		text-align: center;
	}
	@media (max-width: ${breakpoints.xs}) {
		width: 100%;
		display: block;
		padding: 2% 5px;
		font-size: 0.9rem;
		margin: 4% auto;
	}
`;

export default NavLink;
