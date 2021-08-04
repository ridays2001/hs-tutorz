import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import PricingPlans from '../../components/PricingPlans';
import getRegion from '../../util/getRegion';
import { block, custom, group, lesson, plansUs as plans } from '../../util/pricingPlans';

const UsPricingPage = () => {
	useEffect(() => {
		let mounted = true;

		if (mounted) {
			(async () => {
				const region = await getRegion();
				if (region !== 'in') return navigate(`/pricing/${region}/`);
			})();
		}

		return () => {
			mounted = false;
		};
	}, []);

	return <PricingPlans block={block} currency='USD $' custom={custom} group={group} lesson={lesson} plans={plans} />;
};

export default UsPricingPage;
