import { navigate } from 'gatsby';
import React, { Fragment, useEffect } from 'react';
import SEO from '../../components/SEO';
import getRegion from '../../util/getRegion';

// Redirect to pricing page based on region.
const PricingPage = () => {
	useEffect(() => {
		let mounted = true;
		if (mounted && typeof window !== undefined) {
			(async () => {
				const region = await getRegion();
				if (region) return navigate(`/pricing/${region}/`);
			})();
		}
		return () => {
			mounted = false;
		};
	}, []);
	return (
		<Fragment>
			<SEO title='Pricing' description='The pricing page.' />
			Please wait while we load the plans...
		</Fragment>
	);
};

export default PricingPage;
