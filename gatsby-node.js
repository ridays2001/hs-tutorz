const path = require('path');

exports.createPages = async ({ actions, graphql, reporter }) => {
	const { createPage } = actions;
	const template = path.resolve('src/templates/blog.tsx');

	const result = await graphql(`
		{
			allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 100) {
				edges {
					node {
						frontmatter {
							path
						}
					}
				}
			}
		}
	`);

	if (result.errors) {
		reporter.panicOnBuild('Error while running GraphQL query.');
		return undefined;
	}

	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
			path: node.frontmatter.path,
			component: template,
			context: {}
		});
	});
};
