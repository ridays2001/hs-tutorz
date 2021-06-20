import React from 'react';
import Bootstrap from '../styles/Bootstrap';
import Nav from './Nav';
import type { Pages } from './Nav';

interface Props {
	page: Pages;
}

const Layout: React.FC<Props> = ({ children, page }) => (
	<>
		<Bootstrap />
		{/* Add a container to prevent things from overflowing. */}
		<main className='container-fluid'>
			<Nav active={page} />
			{children}
		</main>
	</>
);

export default Layout;
