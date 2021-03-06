import styled from 'styled-components';
import { colors, devices, shadows } from '../theme';

interface OfferingProps {
	color: string;
	border: string;
	even: 0 | 1;
}
export const OfferingBox = styled.section<OfferingProps>`
	background-color: ${({ color }) => color};
	padding: 2.5em;
	box-shadow: ${shadows.layer1};

	.icon {
		margin-bottom: 2.5em;
		height: 75%;
	}

	${devices.xs} {
		.icon {
			height: 50%;
		}
	}

	${devices.sm} {
		.icon {
			height: 40%;
		}
	}

	${devices.md} {
		margin-top: 2em;
		margin-bottom: 2em;
		border-radius: 21px;
		border: 2px solid ${({ border }) => border || 'transparent'};

		.icon {
			margin-bottom: 0;
			order: ${({ even }) => (even ? -1 : 1)};
		}
	}
`;

export const CompanySection = styled.section`
	#about {
		box-shadow: ${shadows.layer1};
		padding: 2.5em;
		margin-top: 2em;
		margin-bottom: 2em;
		background-color: #e0acd5;
	}

	${devices.md} {
		#about {
			border-radius: 21px;
			border: 2px solid #93718c;
		}
	}

	h6.sub {
		margin-top: 2em;
		font-weight: 600;
		text-decoration: underline;
		text-underline-offset: 5px;
		letter-spacing: 1.5px;
	}
`;

export const FounderSection = styled.section`
	background-color: ${colors.primary};
	padding: 2em;
	margin-bottom: 2em;
	color: #ffffff;
	box-shadow: ${shadows.layer1};

	#about {
		margin-top: 1.25em;
	}

	${devices.md} {
		border: 2px solid ${colors.dark};
		border-radius: 21px;
	}

	${devices.xl} {
		#about {
			margin-top: 0;
			color: #000000;
			background-color: rgba(255, 255, 255, 0.85);
			border-radius: 14px;
			padding: 1.5em;
		}
	}

	#pfp {
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 14px;
	}

	#pfp img {
		border-radius: 14px;
	}
`;
