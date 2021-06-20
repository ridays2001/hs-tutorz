import React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { text } from '../theme';

const IndexPage = () => (
	<Layout page='home'>
		<div style={{ display: 'grid', height: '80vh' }}>
			<StaticImage
				style={{
					gridArea: '1/1',
					filter: 'brightness(70%)'
				}}
				layout='fullWidth'
				aspectRatio={3 / 1}
				alt=''
				src='../images/books.png'
				formats={['auto', 'webp', 'avif']}
			/>
			<div
				style={{
					gridArea: '1/1',
					position: 'relative',
					placeItems: 'center',
					display: 'grid',
					color: text.high
				}}
			>
				<h1>Logo</h1>
				<button className='btn btn-primary'>Book A Demo</button>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
