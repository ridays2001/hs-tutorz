import React, { Fragment, useEffect } from 'react';
import SEO from '../../components/SEO';

// For custom plan.
const Plan4Page = () => {
	useEffect(() => {
		if (typeof window !== undefined) {
			// Redirect to configured Google Form.
			window.location.href = process.env.GATSBY_PLAN4_FORM as string;
		}
	}, []);
	return (
		<Fragment>
			<SEO title='Make Your Plan' description='Make your own plan for learning sessions at HS Tutorz.' />
			Please Wait...
		</Fragment>
	);
};

export default Plan4Page;
