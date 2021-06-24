import React from 'react';
import { RecordingIcon, GrowthIcon, StepUpIcon } from '../components/icons';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { CompanySection, OfferingBox, FounderSection } from '../styles/AboutSection';
import { StaticImage } from 'gatsby-plugin-image';

interface Offering {
	icon: JSX.Element;
	color: string;
	border: string;
	title: string;
	para: JSX.Element;
}
const offerings: Array<Offering> = [
	{
		color: '#99E5FF',
		border: '#6BA0B2',
		icon: <RecordingIcon />,
		title: 'Session Recordings',
		para: (
			<p>
				High Quality video recordings of the lectures which allow you to revise the concepts at any given point
				of time.
			</p>
		)
	},
	{
		color: '#FDCEE4',
		border: '#CAA4B6',
		icon: <GrowthIcon />,
		title: 'Progress Reports',
		para: (
			<p>
				Up-to-date progress reports of students to ensure that you are getting the right mentorship at the right
				pace.
			</p>
		)
	},
	{
		color: '#98FB98',
		border: '#69AE69',
		icon: <StepUpIcon />,
		title: 'Guided Tutoring',
		para: <p>Guidance is provided to students to help them realize their true potential.</p>
	}
];
const AboutPage = () => (
	<Layout page='about'>
		<SEO title='About Us' description='The about page.' />
		<CompanySection className='col-md-9 col-lg-8 col-xl-6 mx-auto mb-5 text-center'>
			<h1 className='my-3'>About Us</h1>

			<section className='row text-start mx-auto' id='about'>
				HS Tutorialz began with a simple idea that the lecture hall/ classroom setting was insufficient for
				unlocking the learning potential of each student. But to an industry that relied on conformity, the idea
				of building a peer-to-peer tutoring model that acknowledged the unique learning style of the individual
				was revolutionary.
				<br />
				<ul>
					{/* Comfort sub section */}
					<li>
						<h6 className='sub'>Comfort</h6>
						<p>
							You can learn from home, or anywhere you want. Our unique approach means no more rushing
							around or waiting in traffic. Since all of our sessions are delivered online, you can focus
							on learning wherever it suits you.
						</p>
					</li>
					{/* Tailor-made Lessons sub section */}
					<li>
						<h6 className='sub'>Tailor-made Lessons</h6>
						<p>
							After an initial ‘consultation lesson’, we provide a personalized learning scheme, with
							lessons tailored according to your goals.
						</p>
					</li>
					{/* Collaboration sub section */}
					<li>
						<h6 className='sub'>Collaboration</h6>
						<p>
							Sessions are designed to be fun and engaging, with access to interactive tools like
							collaborative whiteboards, video and audio capabilities.
						</p>
					</li>
					{/* Individual Needs sub section */}
					<li>
						<h6 className='sub'>Individual Needs</h6>
						<p>
							At HS Tutorialz, learning is tailored to your needs. Our primary small group courses give
							students the opportunity to share, speak up and build communication skills alongside their
							academic knowledge. Private one-to-one programs offer a targeted approach to individual
							learning needs.
						</p>
					</li>
					{/* Improving grades */}
					<li>
						<h6 className='sub'>Improving Grades</h6>
						<p>
							It is a tried and tested method that when students understand the concepts better, their
							grades steadily improve. We employ various tools and technologies to help students
							understand the concepts. This results in a gradual improvement in their grades.
						</p>
					</li>
				</ul>
			</section>

			<h2 className='text-center my-3'>Our Offerings:</h2>

			{offerings.map(({ border, color, icon, para, title }, i) => (
				<OfferingBox
					color={color}
					border={border}
					className='row justify-content-evenly nope'
					even={(i % 2) as 0 | 1}
				>
					<aside className='icon mx-auto mx-md-0 col-lg-4 d-flex align-items-center'>{icon}</aside>
					<aside className='col-md-6 col-lg-5'>
						<h6 className='sub'>{title}</h6>
						{para}
					</aside>
				</OfferingBox>
			))}
		</CompanySection>
		<h2 className='text-center my-3'>The Founder</h2>

		{/* 2 section layout. Image + text. */}
		<FounderSection className='row col-md-9 text-start mx-auto'>
			<aside className='col-md-9 mx-md-auto mx-xl-0 col-xl-6 text-center' id='pfp'>
				<StaticImage
					src='../images/pfp.png'
					style={{
						filter: 'grayscale(0.4)'
					}}
					alt='My Picture'
					layout='constrained'
					aspectRatio={1 / 1}
					formats={['auto', 'webp']}
					placeholder='dominantColor'
				/>
			</aside>
			<aside className='col-xl-6' id='about'>
				<p>
					Even before I was a professional teacher, I was always teaching things to children and my peers.
					That led to many people suggesting me to take on teaching as a profession but I always had some or
					the other profession in mind that I could go for instead.
				</p>

				<p>
					When I graduated, I had a number of options to choose from. Each more attractive than the one
					before. It wasn't until I qualified my MBA entrance with 98.9 percentile, that I had my calling. I
					realized I am an academician. I didn't want to sit in an office making money! I wanted to get out
					there and shape the young minds of tomorrow.
				</p>

				<p>So I dropped everything in favor of teaching.</p>

				<p>
					But, I soon realized that the lecture hall/ classroom setting was insufficient for unlocking the
					learning potential of each student. Besides, I couldn’t reach as many students as I would have
					liked, while in the confines of a classroom. So I decided to get out there and try to reach out to
					as many students as possible.
				</p>

				<p>
					Today, I have been teaching professionally for quite a few years and I am now dedicated to further
					my tutoring journey by continuing to share methods of teaching that work effectively for both tutors
					and students.
				</p>

				<p>
					I believe that teaching is not just about making students study, but actually helping them learn
					something. I have always ensured that my students understand the concepts clearly. In addition to
					teaching, I usually counsel my students on professional opportunities available to them.
				</p>

				<p>
					I always look forward to meeting students who are as passionate about learning as I am about
					teaching.
				</p>
			</aside>
		</FounderSection>
	</Layout>
);

export default AboutPage;
