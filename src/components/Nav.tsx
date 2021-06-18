import React, { useEffect, useState } from 'react';
import NavLink from '../styles/NavLink';
import AppHeader from '../styles/AppHeader';

// Think of a name for 'become-a-tutor'. Preferably a one or two words.
export type Pages = 'home' | 'about' | 'blog' | 'contact' | 'pricing' | 'careers';

interface Props {
	active?: Pages;
}

const links: Array<{ name: string; id: Pages; to: string }> = [
	{
		id: 'home',
		name: 'Home',
		to: '/'
	},
	{
		id: 'about',
		name: 'About',
		to: '/about'
	},
	{
		id: 'blog',
		name: 'Blog',
		to: '/blog'
	},
	{
		id: 'pricing',
		name: 'Pricing',
		to: '/pricing'
	},
	{
		id: 'contact',
		name: 'Contact',
		to: '/contact'
	}
];

const Nav = ({ active }: Props) => {
	const [bg, setBg] = useState(false);

	useEffect(() => {
		let mounted = true;
		if (mounted) {
			if (window.scrollY > 10) setBg(true);
			else setBg(false);

			window.addEventListener('scroll', () => {
				if (window.scrollY > 10) setBg(true);
				else setBg(false);
			});
		}

		return () => {
			mounted = false;
		};
	}, [bg]);

	return (
		<AppHeader bg={bg ? 1 : 0}>
			Nav{' '}
			{links.map(({ id, name, to }) => (
				<NavLink to={to} id={id} active={active === id ? 1 : 0}>
					{name}
				</NavLink>
			))}
		</AppHeader>
	);
};

export default Nav;
