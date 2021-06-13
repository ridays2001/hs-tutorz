module.exports = {
	siteMetadata: {
		title: 'HS Tutorialz'
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-typescript',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		}
	]
};
