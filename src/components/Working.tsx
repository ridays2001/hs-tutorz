import type { CSSProperties } from 'react';
import React, { Fragment } from 'react';
import WorkStep from '../styles/WorkStep';
import { ArrowDownIcon, BookingIcon, ContactIcon, LearningIcon, SelectIcon } from './icons';

interface StepProps {
	color: string;
	border: string;
	icon?: JSX.Element;
	title?: string;
	para?: JSX.Element;
	link?: string;
	linkText?: string;
	index: number;
}
const Step = ({ border, color, icon, link, linkText, para, title, index }: StepProps) => (
	<Fragment>
		<WorkStep className='row justify-content-evenly' color={color} border={border} even={(index % 2) as 0 | 1}>
			<div className='icon mx-auto mx-md-0 col-lg-4 d-flex align-items-center'>{icon}</div>

			<div className='col-md-6 col-lg-5'>
				<h4 className='text-center'>{title}</h4>
				{para}
				{link && (
					<a href={link} target='_blank'>
						{linkText} ↗
					</a>
				)}
			</div>
		</WorkStep>
		{index !== 3 ? <ArrowDownIcon className='d-none d-md-inline my-3' width={48} height={48} /> : ''}
	</Fragment>
);

interface StepType {
	color: string;
	border: string;
	icon: JSX.Element;
	title: string;
	para: JSX.Element;
	link?: string;
	linkText?: string;
}
const steps: Array<StepType> = [
	{
		title: 'Contact',
		color: '#F7CAC9',
		border: '#C3A09F',
		icon: <ContactIcon />,
		para: (
			<p>
				Have doubts? Want to know more?
				<br />
				Fill out the contact form and wait for a reply from us, or you may directly reach us to skip the wait!
				Specify your needs and get your questions answered.
			</p>
		),
		link: '/contact',
		linkText: 'Contact Us'
	},
	{
		title: 'Book A Demo',
		color: '#FDFD96',
		border: '#CACA77',
		icon: <BookingIcon />,
		para: (
			<p>
				Still having doubts?
				<br />
				Book a free demo class to get a first-hand experience and know what you are in for. No upfront payment
				required!
			</p>
		),
		link: '/plans/demo',
		linkText: 'Book A Demo'
	},
	{
		title: 'Select A Package',
		color: '#87DAD5',
		border: '#578D8A',
		icon: <SelectIcon />,
		para: (
			<p>
				Decided to join us?
				<br />
				Browse our available packages to select the one which meets your needs or contact us for a customized
				package.
			</p>
		),
		link: '/pricing',
		linkText: 'Select A Package'
	},
	{
		title: 'Start Learning',
		color: '#CAA2FF',
		border: '#8D71B2',
		icon: <LearningIcon />,
		para: (
			<p>
				Let's start!
				<br />
				Start attending live online lectures which are tailored to suit your needs. Learn one-on-one, or in a
				group, based on your preferences.
			</p>
		)
	}
];

interface MainProps {
	style: CSSProperties;
}
const Working = ({ style }: MainProps) => (
	<div className='col-md-9 col-lg-8 col-xl-6 mx-auto mb-5 text-center' style={style}>
		<div className='row justify-content-evenly mb-5'>
			<h1>How It Works</h1>
		</div>

		{steps.map((props, i) => (
			<Step {...props} index={i} key={props.title} />
		))}
	</div>
);

export default Working;
