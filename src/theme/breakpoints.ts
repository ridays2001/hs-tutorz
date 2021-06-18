export const breakpoints = {
	xs: '320px',
	sm: '544px',
	md: '768px',
	lg: '1012px',
	xl: '1280px',
	xxl: '1536px'
};

export const devices = {
	xs: `@media (min-width: ${breakpoints.xs})`,
	sm: `@media (min-width: ${breakpoints.sm})`,
	md: `@media (min-width: ${breakpoints.md})`,
	lg: `@media (min-width: ${breakpoints.lg})`,
	xl: `@media (min-width: ${breakpoints.xl})`,
	xxl: `@media (min-width: ${breakpoints.xxl})`
};
