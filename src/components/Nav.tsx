import React, { useEffect, useState, Fragment } from 'react';
import NavLink from '../styles/NavLink';
import AppHeader from '../styles/AppHeader';
import { Link } from 'gatsby';

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
	const [open, setOpen] = useState(false);

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

	const NavLinks = (
		<Fragment>
			{links.map(({ id, name, to }) => (
				<NavLink to={to} id={id} active={active === id ? 1 : 0} key={id}>
					{name}
				</NavLink>
			))}
		</Fragment>
	);

	return (
		<Fragment>
			<AppHeader bg={bg ? 1 : 0} className='mt-1 d-none row d-md-flex justify-content-between sticky-top py-2'>
				<Link
					to='/'
					style={{ textDecoration: 'none', color: '#000000', backgroundColor: 'inherit !import' }}
					className='col-md-4 col-xxl-3 text-start ps-5'
				>
					<h2>HS Tutorialz</h2>
				</Link>
				<nav className='col-md-7 col-lg-6 col-xl-5 col-xxl-4 d-flex justify-content-evenly align-items-center'>
					{NavLinks}
				</nav>
			</AppHeader>
			<AppHeader className='d-flex row d-md-none mt-1 justify-content-between sticky-top' bg={bg ? 1 : 0}>
				<Link
					to='/'
					style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit !import' }}
					className='col-8 d-flex align-items-center ps-4'
				>
					<h2 className='d-flex align-items-center'>HS Tutorialz</h2>
				</Link>
				<button
					className={`d-flex p-0 offset-2 col-2 h-100 ${open ? 'open' : ''}`}
					onClick={() => setOpen(!open)}
					aria-label='Main Menu'
					aria-expanded={open}
					style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
				>
					<svg width='50' height='50' viewBox='0 0 100 100'>
						<path
							className='line line1'
							d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
						/>
						<path className='line line2' d='M 20,50 H 80' />
						<path
							className='line line3'
							d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
						/>
					</svg>
				</button>
				{open && (
					<nav className={`text-center ${open ? 'slide-in' : ''}`} id='mobile-nav'>
						<div className='row mt-1 mx-2'>
							<Link
								to='/'
								style={{ textDecoration: 'none', color: 'inherit', backgroundColor: 'inherit !import' }}
								className='d-flex col-8 align-items-center nope'
							>
								<h2 className='d-flex align-items-center' style={{ top: '10px', left: '0' }}>
									HS Tutorialz
								</h2>
							</Link>
							<button
								className={`d-flex p-0 offset-2 col-2 h-100 ${open ? 'open' : ''}`}
								onClick={() => {
									if (open) {
										const nav = document.getElementById('mobile-nav') as HTMLElement;
										nav.classList.remove('slide-in');
										nav.classList.add('slide-out');
										setTimeout(() => setOpen(false), 525);
									} else {
										setOpen(true);
									}
								}}
								aria-label='Main Menu'
								aria-expanded={open}
								style={{ backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
							>
								<svg width='50' height='50' viewBox='0 0 100 100'>
									<path
										className='line line1'
										d='M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058'
									/>
									<path className='line line2' d='M 20,50 H 80' />
									<path
										className='line line3'
										d='M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942'
									/>
								</svg>
							</button>
						</div>
						{NavLinks}
					</nav>
				)}
			</AppHeader>
		</Fragment>
	);
};

export default Nav;
