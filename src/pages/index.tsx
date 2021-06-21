import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import { text } from '../theme';

const IndexPage = () => (
	<Layout page='home'>
		<SEO title='Home' description='The home page.' />
		<div style={{ display: 'grid', height: '85vh' }}>
			<StaticImage
				style={{
					gridArea: '1/1',
					filter: 'brightness(60%)'
				}}
				layout='fullWidth'
				aspectRatio={3 / 1}
				alt=''
				src='../images/books.png'
				formats={['auto', 'webp']}
				placeholder='dominantColor'
			/>
			<div
				style={{
					gridArea: '1/1',
					position: 'relative',
					placeItems: 'center',
					color: text.high
				}}
				className='row'
			>
				<div className='col-md-6 mx-auto d-flex justify-content-evenly'>
					<h1>Logo</h1>
				</div>
				<div className='row'>
					<div className='col-9 col-md-4 mx-auto my-4 d-flex justify-content-evenly'>
						<button className='btn btn-primary btn-lg'>Book A Demo</button>
					</div>
					<div className='row'></div>
					<div className='col-9 col-md-4 mx-auto my-4 d-flex justify-content-evenly'>
						<button className='btn btn-secondary btn-lg'>Teach with Us</button>
					</div>
				</div>
			</div>
		</div>
	</Layout>
);

export default IndexPage;
