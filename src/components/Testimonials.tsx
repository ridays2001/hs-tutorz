import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Slider from 'react-slick';
import styled from 'styled-components';

const Container = styled.div`
	margin-bottom: 10vh;
	cursor: grab;

	&:active {
		cursor: grabbing;
	}
`;

interface Testimonial {
	name: string;
	review: string;
}

// cSpell: disable
const testimonials: Array<Testimonial> = [
	{
		name: 'Test',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
			' In vitae placerat lorem. Pellentesque velit elit, facilisis eu magna et, maximus vehicula turpis.' +
			' Aliquam fermentum justo quis urna fermentum auctor. Donec scelerisque quis lectus euismod condimentum.' +
			' Maecenas neque odio, interdum ac efficitur bibendum, facilisis quis est.' +
			' Ut vulputate sapien sed rhoncus bibendum.' +
			' Etiam luctus, nisi a laoreet dictum, ex odio egestas dui, eu vestibulum metus ipsum molestie quam.' +
			' Vivamus quis nulla sem.' +
			' Nullam feugiat, lectus ut sollicitudin auctor, nibh eros feugiat urna, non tempor nisl tortor id neque.'
	},
	{
		name: 'Test',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
			' In vitae placerat lorem. Pellentesque velit elit, facilisis eu magna et, maximus vehicula turpis.' +
			' Aliquam fermentum justo quis urna fermentum auctor. Donec scelerisque quis lectus euismod condimentum.' +
			' Maecenas neque odio, interdum ac efficitur bibendum, facilisis quis est.' +
			' Ut vulputate sapien sed rhoncus bibendum.' +
			' Etiam luctus, nisi a laoreet dictum, ex odio egestas dui, eu vestibulum metus ipsum molestie quam.' +
			' Vivamus quis nulla sem.' +
			' Nullam feugiat, lectus ut sollicitudin auctor, nibh eros feugiat urna, non tempor nisl tortor id neque.'
	},
	{
		name: 'Test',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
			' In vitae placerat lorem. Pellentesque velit elit, facilisis eu magna et, maximus vehicula turpis.' +
			' Aliquam fermentum justo quis urna fermentum auctor. Donec scelerisque quis lectus euismod condimentum.' +
			' Maecenas neque odio, interdum ac efficitur bibendum, facilisis quis est.' +
			' Ut vulputate sapien sed rhoncus bibendum.' +
			' Etiam luctus, nisi a laoreet dictum, ex odio egestas dui, eu vestibulum metus ipsum molestie quam.' +
			' Vivamus quis nulla sem.' +
			' Nullam feugiat, lectus ut sollicitudin auctor, nibh eros feugiat urna, non tempor nisl tortor id neque.'
	},
	{
		name: 'Test',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
			' In vitae placerat lorem. Pellentesque velit elit, facilisis eu magna et, maximus vehicula turpis.' +
			' Aliquam fermentum justo quis urna fermentum auctor. Donec scelerisque quis lectus euismod condimentum.' +
			' Maecenas neque odio, interdum ac efficitur bibendum, facilisis quis est.' +
			' Ut vulputate sapien sed rhoncus bibendum.' +
			' Etiam luctus, nisi a laoreet dictum, ex odio egestas dui, eu vestibulum metus ipsum molestie quam.' +
			' Vivamus quis nulla sem.' +
			' Nullam feugiat, lectus ut sollicitudin auctor, nibh eros feugiat urna, non tempor nisl tortor id neque.'
	},
	{
		name: 'Test',
		review:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
			' In vitae placerat lorem. Pellentesque velit elit, facilisis eu magna et, maximus vehicula turpis.' +
			' Aliquam fermentum justo quis urna fermentum auctor. Donec scelerisque quis lectus euismod condimentum.' +
			' Maecenas neque odio, interdum ac efficitur bibendum, facilisis quis est.' +
			' Ut vulputate sapien sed rhoncus bibendum.' +
			' Etiam luctus, nisi a laoreet dictum, ex odio egestas dui, eu vestibulum metus ipsum molestie quam.' +
			' Vivamus quis nulla sem.' +
			' Nullam feugiat, lectus ut sollicitudin auctor, nibh eros feugiat urna, non tempor nisl tortor id neque.'
	}
];
// cSpell: enable

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
