require('dotenv').config();

process.noDeprecation = true; // https://github.com/webpack/webpack/issues/6568

const desc = 'Online Economics tutorials for high school and college level.';

module.exports = {
	siteMetadata: {
		title: 'HS Tutorz',
		description: desc,
		// Change this URL later!
		siteUrl: 'https://hs-tutorz.netlify.app'
	},
	plugins: [
		'gatsby-plugin-styled-components',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-plugin-typescript',
			options: {
				isTSX: true,
				jsxPragma: 'jsx',
				allExtensions: true
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'markdown-pages',
				path: `${__dirname}/src/blog-posts`
			}
		},
		'gatsby-transformer-remark',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/'
			},
			__key: 'images'
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'HS Tutorz',
				short_name: 'HST',
				description: desc,
				start_url: '/',
				background_color: '#79352B',
				theme_color: '#79352B',
				icon: 'src/images/icon.png',
				include_favicon: true,
				cache_busting_mode: 'query',
				crossOrigin: `use-credentials`,
				display: 'minimal-ui'
			}
		},
		{
			resolve: 'gatsby-plugin-web-font-loader',
			options: {
				google: {
					families: [
						'Playfair Display:regular,regularitalic,bold,bolditalic',
						'Playfair Display SC',
						'Roboto Slab'
					]
				}
			}
		}
	]
};
