import {
	Box,
	Grid,
	Link,
	Typography,
	Breadcrumbs
} from '@mui/material';



export const NavigationMenu = (props) => (
	<Grid item>
    <Box mt={3} mb={3}>
			<Breadcrumbs aria-label="breadcrumb">
				<Link underline="hover" color="inherit" href="#problem">
					<Typography fontSize={16} fontWeight={300}>
						The Problem
					</Typography>
				</Link>
				<Link underline="hover" color="inherit" href="#research">
					<Typography fontSize={16} fontWeight={300}>
						UX Research
					</Typography>
				</Link>
				<Link underline="hover" color="inherit" href="https://github.com/GoldCardCommunity/better-quarantine-bookings/discussions/4" target="_blank">
					<Typography fontSize={16} fontWeight={500} color="#FF4B55">
						<u>Join the Discussion!</u>
					</Typography>
				</Link>
				<Link underline="hover" color="inherit" href="https://goldcardcommunity.github.io/" target="_blank">
					<Typography fontSize={16} fontWeight={300} color="#0088CC">
						<u>GCC Labs</u>
					</Typography>
				</Link>

			</Breadcrumbs>
		</Box>
	</Grid>
)

export default NavigationMenu;
