import React, { Fragment, useEffect } from 'react';
import SEO from '../../components/SEO';

// For 1-on-1 classes plan.
const Plan1Page = () => {
	useEffect(() => {
		if (typeof window !== undefined) {
			// Redirect to configured Google Form.
			window.location.href = process.env.GATSBY_PLAN1_FORM as string;
		}
	}, []);
	return (
		<Fragment>
			<SEO title='Book 1-on-1 Classes' description='Book one-on-one classes at HS Tutorialz.' />
			Please Wait...
		</Fragment>
	);
};

export default Plan1Page;
