import React from 'react';
import Bootstrap from '../styles/Bootstrap';
import Global from '../styles/Global';
import type { Pages } from './Nav';
import Nav from './Nav';

interface Props {
	page: Pages;
}

const Layout: React.FC<Props> = ({ children, page }) => (
	<>
		<Bootstrap />
		<Global />
		{/* Add a container to prevent things from overflowing. */}
		<main className='container-fluid'>
			<Nav active={page} />
			{children}
		</main>
	</>
);

export default Layout;
