import React, { Fragment } from 'react';
import {} from 'swiper/react';

interface Testimonial {
	name: string;
	review: string;
}
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

const Testimonials = () => (
	<Fragment>
		{/* <div className='container'>
			{testimonials.map(({ name, review }, i) => (
				<div key={i}>
					By {name}
					{review}
				</div>
			))}
		</div> */}
	</Fragment>
);

export default Testimonials;
