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
		<Nav active={page} />
		{children}
	</>
);

export default Layout;
