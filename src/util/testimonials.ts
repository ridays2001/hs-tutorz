interface Testimonial {
	name: string;
	review: string;
}

// cSpell: disable
const testimonials: Array<Testimonial> = [
	{
		name: 'Sia (Student)',
		review:
			'Himaani Ma’am is the first teacher that I’ve met who actually seems to care about me.' +
			' She is always ready to clear my doubts, even when we are doing a completely different topic.' +
			' She also makes sure that I understand everything properly. Also, even if I ask about something not' +
			' directly related to my studies, she readily helps me and gives me advice.' +
			' I’m really happy that I joined and would definitely recommend people to join.'
	},
	{
		name: 'Hunny (Parent)',
		review:
			'I am really happy with the teaching methods and techniques by which she makes learning fun!' +
			' I would wholeheartedly recommend tutoring with Ms. Himaani.'
	},
	{
		name: 'Nisha (Parent)',
		review:
			'The teacher taught Aarna (my daughter) academics very well and explained her concepts nicely.' +
			' She even explained her life challenges very nicely how to deal with them and kept fun sessions' +
			' which were quite knowledgeable.'
	},
	{
		name: 'Prachi (Student)',
		review:
			'Ms. Himaani is an extraordinary teacher! Her teaching is amazing and her teaching technique' +
			' is different from others. I want to thank her for giving us something to carry home each day, something to' +
			' help us grow with every lesson. She always kept saying ‘You can do better’ and those words made me work harder.' +
			' Today I’ve become who I am because she kept pushing. I really like her and would readily recommend her.'
	}
];
// cSpell: enable

export default testimonials;
