import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import styled from 'styled-components';
import { devices, shadows } from '../theme';
import testimonials from '../util/testimonials';

const Container = styled.div`
	margin-bottom: 10vh;
	cursor: grab;

	&:active {
		cursor: grabbing;
	}

	${devices.md} {
		.testimonial {
			width: 85%;
			margin: 0 auto;
			margin-top: 1em;
			margin-bottom: 2em;
			box-shadow: ${shadows.layer1};
			border-radius: 21px;
			padding: 2.5em;
		}
	}
	.name {
		text-align: end;
		font-weight: 600;
		font-style: italic;
		font-size: 20px;
	}
	.review {
		font-weight: 400;
		font-style: italic;
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
			<h3 className='text-center mt-5 mb-2'>What our students say:</h3>
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
						<div className='testimonial'>
							<p className='review'>{review}</p>
							<p className='name'>By {name}</p>
						</div>
					</div>
				))}
			</Slider>
		</Container>
		<div className='mb-5 text-center' style={{ marginTop: '-20px' }}>
			<a href={process.env.GATSBY_TESTIMONIALS} className='btn btn-primary'>
				Give Feedback
			</a>
		</div>
	</Fragment>
);

export default Testimonials;
