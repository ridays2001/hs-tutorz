const desc = 'Online Economics tutorials for high school and college level.';

module.exports = {
	siteMetadata: {
		title: 'HS Tutorialz',
		description: desc,
		// Change this URL later!
		siteUrl: 'http://192.168.29.xx'
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
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'HS Tutorialz',
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
					families: ['Playfair Display', 'Playfair Display SC']
				}
			}
		}
	]
};
