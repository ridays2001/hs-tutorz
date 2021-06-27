import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import styled from 'styled-components';
import testimonials from '../util/testimonials';

const Container = styled.div`
	margin-bottom: 10vh;
	cursor: grab;

	&:active {
		cursor: grabbing;
	}
`;

const Testimonials = () => (
	<Fragment>
		<Helmet>
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
			/>
			<link
				rel='stylesheet'
				type='text/css'
				href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
			/>
		</Helmet>
		<Container className='col-11 col-md-9 col-lg-8 col-xl-6 mx-auto'>
			<Slider
				speed={500}
				slidesToScroll={1}
				slidesToShow={1}
				autoplaySpeed={5000}
				easing='in-out'
				dots
				infinite
				autoplay
			>
				{testimonials.map(({ name, review }, i) => (
					<div key={i.toString()}>
						By {name}
						<br />
						{review}
					</div>
				))}
			</Slider>
		</Container>
	</Fragment>
);

export default Testimonials;
