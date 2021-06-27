export const blockInEu = [
	'3 x 1 hour sessions per week (12 sessions/mo)',
	'One Subject',
	'Personalized attention',
	'Tailor made lectures',
	'1 on 1 doubt solving',
	'Regular tests',
	'Personalized feedback'
];
export const blockUs = [
	'2 x 1 hour sessions per week (8 sessions/mo)',
	'One Subject',
	'Personalized attention',
	'Tailor made lectures',
	'1 on 1 doubt solving',
	'Regular tests',
	'Personalized feedback'
];

export const group = [
	'3 x 1 hour sessions per week (12 sessions/mo)',
	'One Subject',
	'Interactive sessions',
	'Doubt solving sessions',
	'Opportunity to learn from others’ doubts',
	'Regular tests and quizzes',
	'Personalized feedback'
];

export const lesson = [
	'Book single 1 on 1 session',
	'One Subject',
	'Tailor made lecture for chosen topic',
	'Doubt solving',
	'Worksheet/ Practice questions given at the end of the lecture',
	'Personalized feedback'
];

export const custom = [
	'Want tutoring for more than one subject?',
	'Want a different number of sessions per week?',
	'Have a group of more than 5 students?',
	'Want only revision or exam preparation?',
	'Any other customization or negotiation?'
];

export interface PlansPerLevel {
	id: string;
	level: string;
	blockStrike: number;
	blockAnnum: number;
	blockMonth: number;
	groupStrike: number;
	groupAnnum: number;
	groupMonth: number;
	single: number;
}
export const plansIn: Array<PlansPerLevel> = [
	{
		id: '9-10',
		level: 'IX and X Grades',
		blockStrike: 102000,
		blockAnnum: 87000,
		blockMonth: 8500,
		groupStrike: 84000,
		groupAnnum: 73000,
		groupMonth: 7000,
		single: 800
	},
	{
		id: '11-12',
		level: 'XI and XII Grades',
		blockStrike: 114000,
		blockAnnum: 100000,
		blockMonth: 9500,
		groupStrike: 96000,
		groupAnnum: 83000,
		groupMonth: 8000,
		single: 900
	},
	{
		id: 'UG',
		level: 'Undergraduate',
		blockStrike: 120000,
		blockAnnum: 103000,
		blockMonth: 10000,
		groupStrike: 102000,
		groupAnnum: 87000,
		groupMonth: 8500,
		single: 1000
	}
];
export const plansEu: Array<PlansPerLevel> = [
	{
		id: '9-10',
		level: 'IX and X Grades (Ages: 15 - 16)',
		blockStrike: 1800,
		blockAnnum: 1550,
		blockMonth: 150,
		groupStrike: 1500,
		groupAnnum: 1300,
		groupMonth: 125,
		single: 15
	},
	{
		id: '11-12',
		level: 'XI and XII Grades (Ages: 17 - 18)',
		blockStrike: 3000,
		blockAnnum: 2550,
		blockMonth: 250,
		groupStrike: 2400,
		groupAnnum: 2100,
		groupMonth: 200,
		single: 25
	},
	{
		id: 'UG',
		level: 'Undergraduate',
		blockStrike: 4200,
		blockAnnum: 3650,
		blockMonth: 350,
		groupStrike: 3000,
		groupAnnum: 2600,
		groupMonth: 250,
		single: 35
	}
];
export const plansUs: Array<PlansPerLevel> = [
	{
		id: '9-10',
		level: 'High School Years 1 - 2 (Ages: 15 - 16)',
		blockStrike: 1800,
		blockAnnum: 1550,
		blockMonth: 150,
		groupStrike: 1500,
		groupAnnum: 1300,
		groupMonth: 125,
		single: 25
	},
	{
		id: '11-12',
		level: 'High School Years 3 - 4 (Ages: 17 - 18)',
		blockStrike: 3000,
		blockAnnum: 2550,
		blockMonth: 250,
		groupStrike: 2400,
		groupAnnum: 2100,
		groupMonth: 200,
		single: 35
	},
	{
		id: 'UG',
		level: 'Undergraduate',
		blockStrike: 3960,
		blockAnnum: 3400,
		blockMonth: 330,
		groupStrike: 3000,
		groupAnnum: 2600,
		groupMonth: 250,
		single: 45
	}
];
