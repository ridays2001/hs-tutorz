const getRegion = async () => {
	if (typeof window !== undefined) {
		const region = window.localStorage.getItem('region');
		if (region) return region as 'in' | 'us' | 'eu';

		const ipdata = await fetch(`https://api.ipdata.co?api-key=${process.env.GATSBY_IPDATA_KEY}`).then(res =>
			res.json()
		);
		if (ipdata.country_code === 'IN') {
			window.localStorage.setItem('region', 'in');
			return 'in';
		}
		if (ipdata.continent_code === 'EU') {
			window.localStorage.setItem('region', 'eu');
			return 'eu';
		}
		window.localStorage.setItem('region', 'us');
		return 'us';
	}
	return 'in';
};

export default getRegion;
