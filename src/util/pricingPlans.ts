export const block = [
	'3 x 1 hour sessions per week (12 sessions/mo)',
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
		blockStrike: 89988,
		blockAnnum: 79999,
		blockMonth: 7499,
		groupStrike: 71988,
		groupAnnum: 63999,
		groupMonth: 5999,
		single: 700
	},
	{
		id: '11-12',
		level: 'XI and XII Grades',
		blockStrike: 101988,
		blockAnnum: 89999,
		blockMonth: 8499,
		groupStrike: 83988,
		groupAnnum: 74999,
		groupMonth: 6999,
		single: 800
	},
	{
		id: 'UG',
		level: 'Undergraduate',
		blockStrike: 107988,
		blockAnnum: 94999,
		blockMonth: 8999,
		groupStrike: 89988,
		groupAnnum: 76999,
		groupMonth: 7499,
		single: 900
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
		single: 20
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
		single: 30
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
		single: 40
	}
];
