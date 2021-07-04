import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import BlogArticle, { Tag } from '../styles/BlogArticle';

interface Props {
	data: {
		markdownRemark: {
			html: string;
			frontmatter: {
				date: string;
				desc: string;
				path: string;
				title: string;
				tags: Array<'parents' | 'students' | 'teachers' | 'world'>;
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
			<main className='text-center mt-3 mb-md-5'>
				<h1 className='mb-3'>{post.title}</h1>
				<div className='d-flex justify-content-evenly'>
					{post.tags.map(tag => (
						<Tag type={tag} key={tag}>
							{tag
								.replace('parents', 'For Parents')
								.replace('students', 'For Students')
								.replace('teachers', 'For Teachers')
								.replace('world', 'Around The World')}
						</Tag>
					))}
				</div>
			</main>
			<BlogArticle
				dangerouslySetInnerHTML={{ __html: post.html }}
				className='col-md-9 col-xl-6 mx-md-auto'
			></BlogArticle>
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
				tags
			}
		}
	}
`;
