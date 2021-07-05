import styled from 'styled-components';
import { shadows } from '../theme';

const BlogHome = styled.section`
	.post {
		display: flex;
		flex-wrap: wrap;
		padding: 2em;
		box-shadow: ${shadows.layer1};
		border-radius: 21px;
		text-decoration: none;
		color: #000000;
		transition: all 0.3s;
	}

	.post:hover {
		box-shadow: ${shadows.layer2};
		transform: translateY(-12px);
	}

	.tags {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}

	img {
		max-width: 100%;
		border-radius: 14px;
	}
`;

export default BlogHome;
