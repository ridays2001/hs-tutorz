import styled from 'styled-components';
import { devices, shadows } from '../theme';

const BlogArticle = styled.article`
	h1,
	h2,
	h3 {
		text-align: center;
	}
	h1,
	h2,
	h3,
	h4 {
		margin-top: 1em;
		margin-bottom: 1em;
	}
	h5 {
		margin-top: 1.25em;
	}
	padding: 2.5em;
	margin-bottom: 5em;

	img {
		max-width: 100%;
		border-radius: 14px;
		margin-top: 12px;
		margin-bottom: 12px;
	}

	${devices.md} {
		box-shadow: ${shadows.layer1};
		border-radius: 21px;
	}
`;

export default BlogArticle;

interface TagProps {
	type: 'parents' | 'students' | 'teachers' | 'world';
}
export const Tag = styled.span<TagProps>`
	padding: 10px 20px;
	border-radius: 14px;
	${({ type }) => {
		if (type === 'parents') {
			return `
				background-color: #ddf4f0;
				color: #005738;
				border: 1px solid #005738;
			`;
		}
		if (type === 'students') {
			return `
				background-color: #FFEBEE;
				color: #7A0004;
				border: 1px solid #7A0004;
			`;
		}
		if (type === 'teachers') {
			return `
				background-color: #fff3e0;
				color: #682708;
				border: 1px solid #682708;
			`;
		}
		return `
				background-color: #e9e9fc;
				color: #0000b0;
				border: 1px solid #0000b0;
			`;
	}}
`;
