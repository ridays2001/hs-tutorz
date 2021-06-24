import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import TutOpts from '../components/TutOpts';
import Working from '../components/Working';
import { text } from '../theme';

const IndexPage = () => (
	<Layout page='home'>
		<SEO title='Home' description='The home page.' />
		<div
			className='row'
			style={{
				display: 'grid',
				height: '90vh'
			}}
		>
			<StaticImage
				style={{
					gridArea: '1/1',
					filter: 'brightness(75%)'
				}}
				layout='fullWidth'
				aspectRatio={3 / 1}
				alt='background image'
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
				className='row mx-auto'
			>
				<div className='col-md-6 mx-auto d-flex justify-content-evenly'>
					<h1>Logo</h1>
				</div>
				<div className='row mx-auto'>
					<div className='row mx-auto justify-content-center my-3'>
						<div className='text-center'>
							<Link className='btn btn-primary btn-lg' to='/contact'>
								Book A Demo
							</Link>
						</div>
					</div>

					<div className='row mx-auto justify-content-center my-3'>
						<div className='text-center'>
							<Link className='btn btn-secondary btn-lg' to='/careers'>
								Teach With Us
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* Intro Para */}

		<Working style={{ marginTop: '10vh' }} />

		<TutOpts />

		{/* Testimonials */}
		<Testimonials />
	</Layout>
);

export default IndexPage;
