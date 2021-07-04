import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

interface Props {
	data: {
		markdownRemark: {
			html: string;
			frontmatter: {
				date: string;
				desc: string;
				path: string;
				title: string;
			};
		};
	};
}

const BlogPost = ({ data }: Props) => {
	const post = {
		html: data.markdownRemark.html,
		...data.markdownRemark.frontmatter
	};
	return (
		<Layout page='blog'>
			<SEO title={post.title} description={post.desc} />
			<div dangerouslySetInnerHTML={{ __html: post.html }}></div>
		</Layout>
	);
};

export default BlogPost;

export const pageQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				path
				title
				desc
			}
		}
	}
`;
