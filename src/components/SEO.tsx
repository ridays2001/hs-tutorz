import React from 'react';
import { Helmet } from 'react-helmet';

interface Props {
	title: string;
	description: string;
}

const desc = 'Online tutorials for high school and undergraduate arts and commerce.';

const SEO = ({ title, description }: Props) => (
	<Helmet>
		<title>{title} | HS Tutorz</title>
		<meta name='description' content={description || desc} />
		<meta name='subject' content='HS Tutorz' />
		<meta name='rating' content='General' />

		<meta property='og:title' content='HS Tutorz' />
		<meta property='og:description' content={desc} />
		<meta property='og:locale' content='en_IN' />
		<meta property='article:author' content='Riday Shah' />
	</Helmet>
);

export default SEO;
