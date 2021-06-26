import React, { Fragment } from 'react';
import { navigate } from 'gatsby';
import SEO from '../../components/SEO';

// Redirect to pricing page based on region.
const PricingPage = () => (
	<Fragment>
		<SEO title='Pricing' description='The pricing page.' />
		{navigate('/pricing/in/')}
	</Fragment>
);

export default PricingPage;
