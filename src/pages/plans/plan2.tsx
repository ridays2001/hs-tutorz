import React, { Fragment, useEffect } from 'react';
import SEO from '../../components/SEO';

// For group classes plan.
const Plan2Page = () => {
	useEffect(() => {
		if (typeof window !== undefined) {
			// Redirect to configured Google Form.
			window.location.href = process.env.GATSBY_PLAN2_FORM as string;
		}
	}, []);
	return (
		<Fragment>
			<SEO title='Book Group Classes' description='Book group classes at HS Tutorialz.' />
			Please Wait...
		</Fragment>
	);
};

export default Plan2Page;
