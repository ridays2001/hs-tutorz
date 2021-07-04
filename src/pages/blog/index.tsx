import { graphql, Link } from 'gatsby';
import React, { Fragment } from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

interface Post {
	node: {
		excerpt: string;
		frontmatter: {
			date: string;
			desc: string;
			path: string;
			title: string;
		};
	};
}

interface Props {
	data: {
		allMarkdownRemark: {
			edges: Array<Post>;
		};
	};
}

const BlogHomePage = ({ data }: Props) => {
	const { edges } = data.allMarkdownRemark;
	const posts = edges.map(e => ({ excerpt: e.node.excerpt, ...e.node.frontmatter }));
	return (
		<Layout page='blog'>
			<SEO title='Blog' description='The blog home page.' />
			Blog Home Page
			{posts.map(post => (
				<Fragment key={post.path}>
					<br />
					<Link to={post.path} key={post.path}>
						{post.title}
					</Link>
				</Fragment>
			))}
		</Layout>
	);
};

export default BlogHomePage;

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					excerpt(pruneLength: 200)
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						desc
					}
				}
			}
		}
	}
`;
