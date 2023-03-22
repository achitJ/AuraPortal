import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
	masterContainer: {
		display: 'grid',
		gridTemplateRows: 'auto 1fr auto',
		minHeight: '100vh',
		margin: '0 auto',
		padding: '0px',
		maxWidth: '100%',
	},
}));

export default useStyles;