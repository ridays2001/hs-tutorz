import React from 'react';
import TutOption from '../styles/TutOption';

const TutOpts = () => (
	<div className='col-md-10 col-lg-9 mx-auto text-center' style={{ marginBottom: '2.5em' }}>
		<div className='row justify-content-evenly mb-3'>
			<h1>Tutoring Options</h1>
		</div>
		<div className='row justify-content-evenly'>
			<TutOption className='col-11 col-md-5 col-xl-3'>
				<h4>Subjects Offered</h4>
				<ul className='text-start'>
					{[
						'Economics',
						'Business Studies',
						'English',
						'Psychology',
						'Sociology',
						'Geography',
						'History',
						'Political Science (Civics)',
						'Public Administration',
						'Home Science'
					].map(s => (
						<li key={s}>{s}</li>
					))}
				</ul>
			</TutOption>
			<TutOption className='col-11 col-md-5 col-xl-4 col-xxl-3'>
				<h4>Levels of Teaching</h4>
				<ul className='text-start'>
					{['9th and 10th Grade', '11th and 12th Grade', 'Undergraduate'].map(l => (
						<li key={l}>{l}</li>
					))}
				</ul>
			</TutOption>
		</div>
	</div>
);

export default TutOpts;
