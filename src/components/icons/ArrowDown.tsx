import React from 'react';

interface Props {
	width: number;
	height: number;
	className: string;
}
const ArrowDown = ({ height, width, className }: Props) => (
	<svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 512 512'>
		<title>Arrow Down</title>
		<path
			fill='none'
			stroke='currentColor'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='48'
			d='M112 268l144 144 144-144M256 392V100'
		/>
	</svg>
);

export default ArrowDown;
