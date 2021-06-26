import React, { Fragment, useEffect } from 'react';
import { navigate } from 'gatsby';
import SEO from '../../components/SEO';

// Redirect to pricing page based on region.
const PricingPage = () => {
	useEffect(() => {
		let mounted = true;
		if (mounted && typeof window !== undefined) {
			(async () => {
				const region = window.localStorage.getItem('region');
				if (region) return navigate(`/pricing/${region}/`);
				const ip = await fetch(`https://api.ipdata.co?api-key=${process.env.GATSBY_IPDATA_KEY}`).then(res =>
					res.json()
				);

				if (ip.country_code === 'IN') {
					window.localStorage.setItem('region', 'in');
					return navigate('/pricing/in/');
				}
				if (ip.continent_code === 'EU') {
					window.localStorage.setItem('region', 'eu');
					return navigate('/pricing/eu/');
				}
				window.localStorage.setItem('region', 'us');
				return navigate('/pricing/us/');
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
