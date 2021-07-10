import React, { Fragment } from 'react';
import WorkStep from '../styles/WorkStep';
import { ArrowDownIcon } from './icons';
import { StaticImage } from 'gatsby-plugin-image';

interface StepProps {
	color: string;
	border: string;
	icon: JSX.Element;
	title?: string;
	para?: JSX.Element;
	index: number;
}
const Step = ({ border, color, icon, para, title, index }: StepProps) => (
	<Fragment>
		<WorkStep className='row justify-content-evenly' color={color} border={border} even={1}>
			<div className='icon2 mx-auto mx-md-0 col-lg-3'>{icon}</div>

			<div className='col-md-6 col-lg-8'>
				<h4 className='text-center'>{title}</h4>
				{para}
			</div>
		</WorkStep>
		{index !== 4 ? <ArrowDownIcon className='d-none d-md-inline my-3' width={48} height={48} /> : ''}
	</Fragment>
);

interface StepType {
	color: string;
	border: string;
	icon: JSX.Element;
	title: string;
	para: JSX.Element;
}
const steps: Array<StepType> = [
	{
		title: '1. Profile Shortlisting',
		color: '#F7CAC9',
		border: '#C3A09F',
		icon: (
			<StaticImage
				alt='illustration'
				src='../images/selection.svg'
				layout='fullWidth'
				placeholder='dominantColor'
			/>
		),
		para: (
			<p>
				Once you submit the application, we will call you to explain the opportunity, understand your profile,
				and answer all your questions. Your application will then be shortlisted based on a quick background
				check.
			</p>
		)
	},
	{
		title: '2. Video Interview',
		color: '#FDFD96',
		border: '#CACA77',
		icon: (
			<StaticImage
				alt='illustration'
				src='../images/video-chat.svg'
				layout='fullWidth'
				placeholder='dominantColor'
			/>
		),
		para: (
			<p>
				Next, there will be a short 15-20 min personal interview where you answer a few questions for us to
				assess you on parameters such as English proficiency, work background, speech delivery, teaching
				environment, posture and energy, etc. You don't need prior teaching experience, only a strong grasp of
				your subject’s fundamental concepts, a good desktop/laptop, a web camera, a good bandwidth internet
				connection, and a will to become the best!
			</p>
		)
	},
	{
		title: '3. Registration',
		color: '#87DAD5',
		border: '#578D8A',
		icon: (
			<StaticImage
				alt='illustration'
				src='../images/register.svg'
				layout='fullWidth'
				placeholder='dominantColor'
			/>
		),
		para: (
			<p>
				Once shortlisted, you'll have to pay a small one-time fee for training and a PenTablet. You can earn
				back this investment within 1 month of tutoring on HS Tutorz.
			</p>
		)
	},
	{
		title: '4. Training and Evaluation',
		color: '#CAA2FF',
		border: '#8D71B2',
		icon: (
			<StaticImage
				alt='illustration'
				src='../images/training.svg'
				layout='fullWidth'
				placeholder='dominantColor'
			/>
		),
		para: (
			<p>
				We will train you to become an expert in the best ways to make kids learn. The program is designed so
				you can finish training in 1 week and start teaching from the next. Once you finish your training, our
				senior expert teachers will do a final evaluation with a full demo class.
			</p>
		)
	},
	{
		title: '5. Category',
		color: '#ff9448',
		border: '#ff6700',
		icon: (
			<StaticImage
				alt='illustration'
				src='../images/category.svg'
				layout='fullWidth'
				placeholder='dominantColor'
			/>
		),
		para: (
			<p>
				Upon clearing the evaluation, we will place you in a category (Bronze, Silver, Gold) based on your
				academic credentials, performance and past experience. You can then start earning by taking classes on
				flexible timings from the comfort of your home. Your compensation will increase as your category
				upgrades and with the number of classes you take.
			</p>
		)
	}
];

const SelectionSteps = () => (
	<div className='mt-5 text-center'>
		<div className='row justify-content-evenly mb-5'>
			<h1>5 Step Selection Process</h1>
		</div>

		{steps.map((props, i) => (
			<Step {...props} index={i} key={props.title} />
		))}
	</div>
);

export default SelectionSteps;
