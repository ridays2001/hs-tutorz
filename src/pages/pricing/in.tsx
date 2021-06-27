import { navigate } from 'gatsby';
import React, { useEffect } from 'react';
import PricingPlans from '../../components/PricingPlans';
import getRegion from '../../util/getRegion';
import { blockInEu as block, custom, group, lesson, plansIn as plans } from '../../util/pricingPlans';

const InPricingPage = () => {
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

	return <PricingPlans block={block} currency='INR ₹' custom={custom} group={group} lesson={lesson} plans={plans} />;
};

export default InPricingPage;
