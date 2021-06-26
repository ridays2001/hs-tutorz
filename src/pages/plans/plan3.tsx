import React, { Fragment, useEffect } from 'react';
import SEO from '../../components/SEO';

// For individual lessons plan.
const Plan3Page = () => {
	useEffect(() => {
		if (typeof window !== undefined) {
			// Redirect to configured Google Form.
			window.location.href = process.env.GATSBY_PLAN3_FORM as string;
		}
	}, []);
	return (
		<Fragment>
			<SEO title='Book Individual Lesson' description='Book an individual lesson at HS Tutorialz.' />
			Please Wait...
		</Fragment>
	);
};

export default Plan3Page;
