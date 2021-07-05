import { graphql, Link } from 'gatsby';
import React, { Fragment } from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import { Tag } from '../../styles/BlogArticle';
import BlogHome from '../../styles/BlogHome';

interface Post {
	node: {
		frontmatter: {
			date: string;
			desc: string;
			img: string;
			path: string;
			title: string;
			tags: Array<'parents' | 'students' | 'teachers' | 'world'>;
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
	const posts = edges.map(e => e.node.frontmatter);
	return (
		<Layout page='blog'>
			<SEO title='Blog' description='Our blog where we post various case studies and stories.' />
			<BlogHome className='col-md-9 mx-md-auto'>
				<h1 className='text-center mb-5'>Our Blog Articles</h1>
				<section className='row row-cols-1 row-cols-md-2 row-cols-xl-3 align-items-start justify-content-evenly'>
					{posts.map(post => (
						<Fragment key={post.path}>
							<Link to={post.path} key={post.path} className='col align-self-stretch post'>
								<img src={post.img} alt='Header Image' className='mb-3' />
								<h3 className='text-center mb-4'>{post.title}</h3>
								<div className='tags'>
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
							</Link>
						</Fragment>
					))}
				</section>
			</BlogHome>
		</Layout>
	);
};

export default BlogHomePage;

export const pageQuery = graphql`
	query IndexQuery {
		allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
			edges {
				node {
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						path
						desc
						tags
						img
					}
				}
			}
		}
	}
`;
