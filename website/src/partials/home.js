import React from 'react';
import {
	Box,
	Grid,
	Link,
	Typography,
} from '@mui/material';
import ExternalLink from '../components/external-link.js';

import bqbLogo from '../assets/bqb-logo.png';
import EmailLink from '../components/mailto-link.js';

export const HomeSection = (props) => (
	<React.Fragment>

		<Grid id="home" container justifyContent="center" alignItems="center" mt={12}>
			<Grid item xs={12}>
				<Box textAlign="center">
					<img src={bqbLogo} alt="Gold Card Community Logo" width="80" height="80" />
				</Box>
			</Grid>
		</Grid>

		<Grid container justifyContent="center" alignItems="center" mt={4}>
			<Grid item xs={12}>
				<Box textAlign="center">
					<Typography variant="h1">
						Better Quarantine Bookings
					</Typography>
				</Box>
			</Grid>
		</Grid>



		<Grid container justifyContent="center" alignItems="center" mt={4}>

			<Grid item xs={12} mt={5}>
				<Box textAlign="center">
					<Typography variant="body2">
						This project is addressing the issue of booking a quarentine hotel in Taiwan for the GC Community Members.
						<br />
						<br />
						The project is in the idea stage.<br />
						 The project is looking for members to
						<br />---<br />
					</Typography>

					<Typography variant="body1">
						Validate this is a real problem<br />
						Propose and Vote on a solution<br />
						Connect us with people that can push the project forward<br />
						Create an Plan of Action  Build and Maintain the solution
					</Typography>

				</Box>
			</Grid>


			<Grid container justifyContent="center" alignItems="center" my={3} spacing={2}>

				<Grid item>
					<ExternalLink url="https://goldcardcommunity.github.io/better-quarantine-bookings">Learn more about the Project</ExternalLink>
				</Grid>
				<Grid item>
					<ExternalLink url="https://github.com/GoldCardCommunity/better-quarantine-bookings/discussions">Join the Discussion</ExternalLink>
				</Grid>
				<Grid item>
					<EmailLink variant="emailAction" email="marcin.k.cebula@gmail.com" subject="Add me to [BQB] Better Quarantine Bookings ">Join the Project</EmailLink>
				</Grid>

			</Grid>

		</Grid>

	</React.Fragment>
)

export default HomeSection;
