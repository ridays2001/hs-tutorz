import React, { Fragment, useEffect } from 'react';
import SEO from '../../components/SEO';

// To book a demo lecture.
const DemoPlanPage = () => {
	useEffect(() => {
		if (typeof window !== undefined) {
			// Redirect to configured Google Form.
			window.location.href = process.env.GATSBY_DEMO_FORM as string;
		}
	}, []);

	return (
		<Fragment>
			<SEO title='Book Demo Lecture' description='Book a demo lecture at HS Tutorialz.' />
			Please Wait...
		</Fragment>
	);
};

export default DemoPlanPage;
