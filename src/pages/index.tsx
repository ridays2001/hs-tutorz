import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/SEO';
import Working from '../components/Working';
import { text } from '../theme';

const IndexPage = () => (
	<Layout page='home'>
		<SEO title='Home' description='The home page.' />
		<div
			style={{
				display: 'grid',
				height: '90vh',
				width: '100%'
			}}
		>
			<StaticImage
				style={{
					gridArea: '1/1',
					filter: 'brightness(75%)'
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
					<div className='col-md-4 mx-auto my-4 d-flex justify-content-evenly'>
						<Link className='btn btn-primary btn-lg' to='/contact'>
							Book A Demo
						</Link>
					</div>
					<div className='row'></div>
					<div className='col-md-4 mx-auto my-4 d-flex justify-content-evenly'>
						<Link className='btn btn-secondary btn-lg' to='/careers'>
							Teach With Us
						</Link>
					</div>
				</div>
			</div>
		</div>

		{/* Intro Para */}

		<Working style={{ marginTop: '10vh' }} />
	</Layout>
);

export default IndexPage;
