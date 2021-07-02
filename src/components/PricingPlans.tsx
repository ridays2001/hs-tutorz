import React, { useEffect, useState } from 'react';
import type { PlansPerLevel } from '../util/pricingPlans';
import Layout from './Layout';
import SEO from './SEO';
import PricingSection from '../styles/PricingSection';
import { navigate } from 'gatsby';

interface Props {
	currency: string;
	plans: Array<PlansPerLevel>;
	lesson: Array<string>;
	block: Array<string>;
	group: Array<string>;
	custom: Array<string>;
}
const PricingPlans = ({ block, currency, custom, group, lesson, plans }: Props) => {
	const [selected, setSelected] = useState(plans);
	const [filter, setFilter] = useState<undefined | string>(undefined);

	useEffect(() => {
		if (filter !== 'all') setSelected(plans.filter(p => p.id === filter));
		else setSelected(plans);
	}, [filter]);

	return (
		<Layout page='pricing'>
			<SEO title='Pricing' description='The pricing page.' />
			<PricingSection className='col-md-10 col-xl-9 mx-md-auto'>
				<h1 className='text-center'>Pricing Plans</h1>

				<div className='col-9 col-md-6 col-xl-4 mx-auto mt-3'>
					<select className='form-select' onChange={e => setFilter(e.target.value)}>
						<option value='all'>Select your level</option>
						<option value='9-10'>Grades IX and X</option>
						<option value='11-12'>Grades XI and XII</option>
						<option value='UG'>Undergraduate</option>
					</select>
				</div>

				{selected.map(
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
						<section className='block my-4' key={id}>
							<h2 className='text-center'>{level}</h2>
							<div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 align-items-start justify-content-center'>
								{/* 1 on 1 sessions */}
								<div className='d-flex col align-self-stretch' id='1o1'>
									<div className='card w-100'>
										<div className='card-body'>
											<div className='card-title'>1-on-1 Sessions</div>
											<div className='card-subtitle mb-5'>Block Booking</div>
											<div className='card-text text-center'>
												<button
													className='btn btn-2 price'
													onClick={() => navigate('/plans/plan1')}
												>
													{currency}{' '}
													<span className='strike'>{blockStrike.toLocaleString()}</span>
													{blockAnnum.toLocaleString()} annually
												</button>
												<p className='mt-4'>
													Or pay monthly
													<br />
													<button
														className='btn btn-2 price'
														onClick={() => navigate('/plans/plan1/')}
													>
														{currency} {blockMonth.toLocaleString()}
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
												<button
													className='btn btn-primary price'
													onClick={() => navigate('/plans/plan2/')}
												>
													{currency}{' '}
													<span className='strike'>{groupStrike.toLocaleString()}</span>
													{groupAnnum.toLocaleString()} annually
												</button>
												<p className='mt-4'>
													Or pay monthly
													<br />
													<button
														className='btn btn-2 price'
														onClick={() => navigate('/plans/plan2/')}
													>
														{currency} {groupMonth.toLocaleString()}
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
												<button
													className='btn btn-2 price'
													onClick={() => navigate('/plans/plan3/')}
												>
													{currency} {single.toLocaleString()} per hour
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
												<button
													className='btn btn-2 price'
													onClick={() => navigate('/plans/plan4/')}
												>
													Make your own plan
												</button>
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

				<section className='col-md-10 col-xl-9 mx-auto my-5'>
					<h4>Cancellation Policy:</h4>
					<p>
						12 hours cancellation policy. If the lessons are cancelled less than 12 hours prior to scheduled
						time, the full cost of the lesson wil be payable.
					</p>
					<p>
						Rescheduling of lectures can be done upto 3 hours prior to the scheduled time. No rescheduling
						requests will be entertained after that.
					</p>

					<h4>Referral Offer:</h4>
					<p>5% cashback on your fees for every student who enrolls due to your referral.</p>
				</section>
			</PricingSection>
		</Layout>
	);
};

export default PricingPlans;
