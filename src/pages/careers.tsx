import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import CareersSection from '../styles/CareersSection';
import { StaticImage } from 'gatsby-plugin-image';
import SelectionSteps from '../components/SelectionSteps';

const CareersPage = () => {
	const perks: Array<{ title: string; para: string; img: JSX.Element }> = [
		{
			title: 'Money',
			para: 'Earn money by taking remote classes from home.',
			img: (
				<StaticImage
					src='../images/money.svg'
					alt='illustration'
					layout='fullWidth'
					placeholder='dominantColor'
				/>
			)
		},
		{
			title: 'Expand your horizon',
			para: 'Teach students from across the world.',
			img: (
				<StaticImage
					src='../images/world.svg'
					alt='illustration'
					layout='fullWidth'
					placeholder='dominantColor'
				/>
			)
		},
		{
			title: 'Grades IX - UG',
			para: 'Take structured classes with full support.',
			img: (
				<StaticImage
					src='../images/teacher.svg'
					alt='illustration'
					layout='fullWidth'
					placeholder='dominantColor'
				/>
			)
		},
		{
			title: 'Be part of a movement',
			para: 'Change the way children learn across the world.',
			img: (
				<StaticImage
					src='../images/movement.svg'
					alt='illustration'
					layout='fullWidth'
					placeholder='dominantColor'
				/>
			)
		},
		{
			title: 'Flexible Timing.',
			para: 'Choose your hours. Make time to do the things you love.',
			img: (
				<StaticImage
					src='../images/clock.svg'
					alt='illustration'
					layout='fullWidth'
					placeholder='dominantColor'
				/>
			)
		}
	];
	return (
		<Layout page='careers'>
			<SEO title='Teach With Us' description='Teacher registration with HS Tutorialz.' />
			<CareersSection className='col-md-9 col-lg-8 col-xl-6 mx-auto mb-5'>
				<h1 className='text-center my-3'>Teach With Us</h1>

				<section className='row mx-md-auto' id='first-para'>
					At HS Tutorialz, we aim to create a sustainable community where students and tutors can work
					together and solve problems. We want to gather like-minded individuals who enjoy both teaching and
					‘learning-by-teaching’. We invite problem solvers to join us in our effort to build a team that is
					committed to helping students succeed in their studies. We hand pick individuals who possess the
					academic knowledge needed to teach students and the personal skills needed to connect with them.
					Together we can create an effective learning environment for students at all levels of education.
					<br />
				</section>

				<div className='text-center my-5'>
					<a href={process.env.GATSBY_CAREERS_FORM} className='btn btn-primary'>
						Apply Now!
					</a>
				</div>

				<h3 className='text-center my-5'>Perks</h3>
				<div className='row justify-content-evenly' id='grid'>
					{perks.map(p => (
						<div className='col-md-3' key={p.title}>
							<div className='col-8 mx-auto mb-4'>{p.img}</div>
							<h4 className='text-center'>{p.title}</h4>
							<p>{p.para}</p>
						</div>
					))}
				</div>

				<h3 className='text-center my-5'>What do you need?</h3>
				<section className='row justify-content-evenly' id='needs'>
					<div className='col-md-5'>
						<h5 className='text-center'>Skills</h5>

						<ul>
							{[
								'An affinity for or interest in your chosen subject',
								'Strong communication skills',
								'Basic computer literacy',
								'Patience and passion for teaching'
							].map(e => (
								<li key={e}>{e}</li>
							))}
						</ul>
					</div>
					<div className='col-md-5'>
						<h5 className='text-center'>Requirements</h5>

						<ul>
							{[
								'A personal computer/laptop and a headset',
								'Consistent availability during chosen class hours',
								'High-speed internet (8Mbps or higher)'
							].map(e => (
								<li key={e}>{e}</li>
							))}
						</ul>
					</div>
				</section>

				<SelectionSteps />

				<div className='text-center my-5'>
					<a href={process.env.GATSBY_CAREERS_FORM} className='btn btn-primary'>
						Apply Now!
					</a>
				</div>
			</CareersSection>
		</Layout>
	);
};

export default CareersPage;
