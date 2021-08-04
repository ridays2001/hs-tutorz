import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import PricingPlans from '../../components/PricingPlans';
import getRegion from '../../util/getRegion';
import { block, custom, group, lesson, plansEu as plans } from '../../util/pricingPlans';

const EuPricingPage = () => {
	useEffect(() => {
		let mounted = true;

		if (mounted) {
			(async () => {
				const region = await getRegion();
				if (region !== 'eu') return navigate(`/pricing/${region}/`);
			})();
		}

		return () => {
			mounted = false;
		};
	}, []);

	return <PricingPlans block={block} currency='EUR €' custom={custom} group={group} lesson={lesson} plans={plans} />;
};

export default EuPricingPage;
