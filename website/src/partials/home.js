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

			<Grid container justifyContent="center" alignItems="center" my={3} spacing={2}>
				<Grid item>
					<ExternalLink url="https://github.com/GoldCardCommunity/better-quarantine-bookings/discussions">Join the Discussion</ExternalLink>
				</Grid>
				<Grid item>
					<EmailLink variant="emailAction" email="marcin.k.cebula@gmail.com" subject="Add me to [BQB] Better Quarantine Bookings ">Join the Project</EmailLink>
				</Grid>

			</Grid>



			<Grid container justifyContent="" alignItems="center" mt={0}>

				<Grid item xs={12} mt={5}>
					<Typography variant="h4">
						Define the Problem
					</Typography>

					<Typography variant="body2">
						As a non-native Mandarin speaker coming to Taiwan I would like to easily find and book a Quarantine Hotel with commonly establishes user experience, design and processes established by the western world.
 					</Typography>


					<Typography variant="body1" mt={2}>
						Features that would improve my experience
					</Typography>

					<Typography variant="body2">
						<ul>
							<li>Ability to search Quarantine Hotels by:</li>
							<ul>
								<li>Date, Location, Price, Size, Ratings</li>
								<li><b>Extras</b>: Meal Plans, Has Window, Has Balcony,</li>
							</ul>
							<li>Ability to read reviews</li>
							<li>Ability to communication through the platform</li>
							<li>Ability to Book and Pay through the platform</li>
						</ul>
					</Typography>



					<Typography variant="h4" mt={5}>
						Problem Origin
					</Typography>

					<Typography variant="body2">
						<pre style={{ whiteSpace: 'pre-wrap' }}>
							Easiest (relatively) to use website is mrhost.com.tw. The CDC just has a list of hotels with phone numbers....oy. Unfortunately, even the mrhost webite requires you to hunt and peck by hotel individually and then check one by one if they offer meals and what dates they are free. An unbelievably labour intensive process. Why on earth they couldn't design a website with parameters that you input dates, mealplan, price point and minimum needs (window etc) and then just show you what hotels meet those parameters is beyond me. Or beyond them, apparently. There is at least a chat function on the website but I wonder if Taiwanese web design is generally stuck in 1990s mode.
							</pre> - Donal H.
 					</Typography>


				</Grid>

			</Grid>

		</React.Fragment>
)

export default HomeSection;
