import React from 'react';
import Layout from '../../components/Layout';
import SEO from '../../components/SEO';
import PricingSection from '../../styles/PricingSection';

const PricingPage = () => {
	const block = [
		'2 x 1 hour sessions per week (8 sessions/mo)',
		'One Subject',
		'Personalized attention',
		'Tailor made lectures',
		'1 on 1 doubt solving',
		'Regular tests',
		'Personalized feedback'
	];

	const group = [
		'3 x 1 hour sessions per week (12 sessions/mo)',
		'One Subject',
		'Interactive sessions',
		'Doubt solving sessions',
		'Opportunity to learn from others’ doubts',
		'Regular tests and quizzes',
		'Personalized feedback'
	];

	const lesson = [
		'Book single 1 on 1 session',
		'One Subject',
		'Tailor made lecture for chosen topic',
		'Doubt solving',
		'Worksheet/ Practice questions given at the end of the lecture',
		'Personalized feedback'
	];

	const custom = [
		'Want tutoring for more than one subject?',
		'Want a different number of sessions per week?',
		'Any other customization or negotiation?',
		'Have a group of more than 5 students?',
		'Want only revision or exam preparation?'
	];

	interface PlansPerLevel {
		id: string;
		level: string;
		blockStrike: number;
		blockAnnum: number;
		blockMonth: number;
		groupStrike: number;
		groupAnnum: number;
		groupMonth: number;
		single: number;
	}
	const plans: Array<PlansPerLevel> = [
		{
			id: '9-10',
			level: 'High School Years 1 - 2 (Ages: 15 - 16)',
			blockStrike: 1800,
			blockAnnum: 1550,
			blockMonth: 150,
			groupStrike: 1500,
			groupAnnum: 1300,
			groupMonth: 125,
			single: 25
		},
		{
			id: '11-12',
			level: 'High School Years 3 - 4 (Ages: 17 - 18)',
			blockStrike: 3000,
			blockAnnum: 2550,
			blockMonth: 250,
			groupStrike: 2400,
			groupAnnum: 2100,
			groupMonth: 200,
			single: 35
		},
		{
			id: 'UG',
			level: 'Undergraduate',
			blockStrike: 3960,
			blockAnnum: 3400,
			blockMonth: 330,
			groupStrike: 3000,
			groupAnnum: 2600,
			groupMonth: 250,
			single: 45
		}
	];

	return (
		<Layout page='pricing'>
			<SEO title='Pricing' description='The pricing page.' />
			<PricingSection className='col-md-9 mx-md-auto'>
				<h1 className='text-center'>Pricing Plans</h1>

				{plans.map(
					({
						id,
						level,
						blockStrike,
						blockAnnum,
						blockMonth,
						groupStrike,
						groupAnnum,
						groupMonth,
						single
					}) => (
						<section className='block' key={id}>
							<h2 className='text-center'>{level}</h2>
							<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 align-items-start justify-content-center'>
								{/* 1 on 1 sessions */}
								<div className='d-flex col align-self-stretch' id='1o1'>
									<div className='card w-100'>
										<div className='card-body'>
											<div className='card-title'>1-on-1 Sessions</div>
											<div className='card-subtitle mb-5'>Block Booking</div>
											<div className='card-text text-center'>
												<button className='btn btn-2 price'>
													USD $ <span className='strike'>{blockStrike.toLocaleString()}</span>
													{blockAnnum.toLocaleString()} annually
												</button>
												<p className='mt-4'>
													Or pay monthly
													<br />
													<button className='btn btn-3 price'>
														USD $ {blockMonth.toLocaleString()}
													</button>
												</p>
											</div>
											<ul className='list-group list-group-flush text-start'>
												{block.map(b => (
													<li className='list-group-item' key={b}>
														{b}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								{/* Group Sessions */}
								<div className='d-flex col align-self-stretch' id='group'>
									<div className='card w-100 rec'>
										<div className='card-body'>
											<div className='card-title'>Online Group Booking</div>
											<div className='card-subtitle mb-4'>2 - 5 students</div>
											<div className='card-text text-center'>
												<span>Price Per Student:</span>
												<button className='btn btn-primary price'>
													USD $ <span className='strike'>{groupStrike.toLocaleString()}</span>
													{groupAnnum.toLocaleString()} annually
												</button>
												<p className='mt-4'>
													Or pay monthly
													<br />
													<button className='btn btn-3 price'>
														USD $ {groupMonth.toLocaleString()}
													</button>
												</p>
											</div>
											<ul className='list-group list-group-flush text-start'>
												{group.map(b => (
													<li className='list-group-item' key={b}>
														{b}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								{/* Individual Lessons */}
								<div className='d-flex col align-self-stretch' id='individual'>
									<div className='card w-100'>
										<div className='card-body'>
											<div className='card-title'>Individual Lessons</div>
											<div className='card-subtitle mb-5'>Single Student</div>
											<div className='card-text text-center'>
												<button className='btn btn-2 price'>
													USD $ {single.toLocaleString()} per hour
												</button>
											</div>
											<ul className='list-group list-group-flush text-start'>
												{lesson.map(b => (
													<li className='list-group-item' key={b}>
														{b}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>

								{/* Custom */}
								<div className='d-flex col align-self-stretch' id='custom'>
									<div className='card w-100'>
										<div className='card-body'>
											<div className='card-title'>Custom</div>
											<div className='card-text text-center'>
												<button className='btn btn-2 price'>Make your own plan</button>
											</div>
											<ul className='list-group list-group-flush text-start'>
												{custom.map(b => (
													<li className='list-group-item' key={b}>
														{b}
													</li>
												))}
											</ul>
										</div>
									</div>
								</div>
							</div>
						</section>
					)
				)}
			</PricingSection>
		</Layout>
	);
};

export default PricingPage;
