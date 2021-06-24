import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Testimonials from '../components/Testimonials';
import TutOpts from '../components/TutOpts';
import Working from '../components/Working';
import Intro from '../styles/Intro';
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

		<h1 className='text-center mt-5'>Who We Are:</h1>
		<Intro className='col-md-9 col-lg-8 col-xl-6 mx-auto'>
			<p>
				HS Tutorialz began with a simple idea that the lecture hall/ classroom setting was insufficient for
				unlocking the learning potential of each student. We are resourceful, patient, and well equipped to
				cater to a variety of different learning styles. With specializing in Economics, Business Studies and
				English, we tutor students at High School and Undergraduate level.
			</p>
			<p>
				At HS Tutorialz, learning is tailored to your needs. Our primary small group courses give students the
				opportunity to share, speak up and build communication skills alongside their academic knowledge.
				Private one-on-one programs offer a targeted approach to individual learning needs.
			</p>
			<p>
				No matter whether you are in a private one on one tutoring or a part of a group, we always make sure you
				understand your concepts well. Our motto is to target conceptual understanding to improve academic
				grades.
			</p>
			<p>So don’t delay, Sign up to get better grades today!</p>
		</Intro>
		<Working style={{ marginTop: '2em' }} />
		<TutOpts />

		{/* Testimonials */}
		<Testimonials />
	</Layout>
);

export default IndexPage;
