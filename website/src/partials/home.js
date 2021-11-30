import React from 'react';
import {
	Box,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Grid,
	Link,
	Divider,
	Typography,
	Paper
} from '@mui/material';
import ExternalLink from '../components/external-link.js';
import CheckedIcon from '@mui/icons-material/CheckBoxTwoTone';
import UncheckedIcon from '@mui/icons-material/CloseTwoTone';
import LineIcon from '@mui/icons-material/IndeterminateCheckBoxTwoTone';
import { red, green, yellow } from '@mui/material/colors';

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

			<Grid id="problem" item xs={12} mt={5}>
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

				<Typography variant="body2" mt={1}>
					During one of our GCC line group conversations the following issue came to light...

					<Grid container justifyContent="center" alignItems="center" mt={0}>
						<Grid item xs={11}>
							<pre style={{ whiteSpace: 'pre-wrap', fontSize: 16 }}>
								Easiest (relatively) to use website is mrhost.com.tw. The CDC just has a list of hotels with phone numbers....oy. Unfortunately, even the mrhost webite requires you to hunt and peck by hotel individually and then check one by one if they offer meals and what dates they are free. An unbelievably labour intensive process. Why on earth they couldn't design a website with parameters that you input dates, mealplan, price point and minimum needs (window etc) and then just show you what hotels meet those parameters is beyond me. Or beyond them, apparently. There is at least a chat function on the website but I wonder if Taiwanese web design is generally stuck in 1990s mode.
							</pre>

							<Box textAlign="right">
								- Donal H.
							</Box>
						</Grid>
					</Grid>

 				</Typography>
			</Grid>












			<Grid container mt={0}>

				<Grid id="research"item xs={12} mb={0}>
					<Typography variant="h4">
						Current Solutions
					</Typography>
				</Grid>


				<Grid item xs={12} md={6}>
					<Typography variant="h6" my={2}>
						<ExternalLink url="https://quarantinehotel.gov.taipei">Quarantine Hotel Gov.tw</ExternalLink>
					</Typography>

					<Paper variant="outlined">
						<Typography variant="body2">
							<List>
								<ListItem>
									<ListItemText>
										✅ Ability to communicate with Platform (through Facebook Chat)
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										✅ Photos
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										✅ Hotel Features
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										✅ View listings across Taiwan, not only Taipei
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										✅  Reviews
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										✅  Ratings
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										❌ Ability to search listing
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										❌  Ability to communicate with the Hotel
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										❌ Ability to book online
									</ListItemText>
								</ListItem>
							</List>
						</Typography>
						</Paper>
				</Grid>

				<Grid item xs={12} md={6}>
					<Typography variant="h6" my={2}>
						<ExternalLink url="https://www.mrhost.com.tw">MrHost</ExternalLink>
					</Typography>

					<Paper variant="outlined">
						<Typography variant="body2">
							<List>
								<ListItem>
									<ListItemText>
										✅  Ability to search listing
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										✅  Ability to communicate with the Hotel (by form)
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										🟨  Photos (1 Photo per room)
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										❌ Search listings across Taiwan, not only Taipei
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										❌ Ability to communicate with Platform
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										❌ Hotel Features
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										❌ Reviews
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										❌ Ratings
									</ListItemText>
								</ListItem>
								<ListItem>
									<ListItemText>
										❌ Cancellation Policy
									</ListItemText>
								</ListItem>
							</List>
						</Typography>
						</Paper>
				</Grid>
			</Grid>




			<Grid container mt={8}>
				<Grid id="research"item xs={12} mb={2}>
					<Typography variant="h4">
						Discussion
					</Typography>

					<Typography variant="body2">

						<ol>
							<li>
								Is this a real problem?
							</li>
							<li>
								Are there any valid solutions that solve this problem?
							</li>

							<li>
								Is booking a Quarantine Hotel so bad that it requires a (at scale) software solution
								<ul>
									<li><i>Are there better ways of solving this problem? For example having a dedicated english speaking person that will book a hotel for you at some price ($$$)</i></li>
								</ul>
							</li>
							<li>
								Does the community have access to the people that would grant access to data required to build a solution and move it forward?
							</li>

							<li>
								Which features are most important to you?
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
							</li>
							<li>
								Is this service/website required to work in multiple languages?
							</li>
						</ol>

					</Typography>

				</Grid>
			</Grid>



			<Grid container mt={8}>
				<Grid id="research"item xs={12} mb={2}>
					<Typography variant="h4">
						Questions/Comments
					</Typography>



					<Box textAlign="center" mt={6}>
						<Typography variant="body2">
							If you want to get involved, contribute or give feedback you
							can message me at <EmailLink variant="emailDefault" email="marcin.k.cebula@gmail.com" subject="Add me to GCC Labs">marcin.k.cebula@gmail.com</EmailLink><br />
							or join on <ExternalLink url="https://github.com/GoldCardCommunity/goldcardcommunity.github.io/discussions">GitHub</ExternalLink>.
						</Typography>
					</Box>
				</Grid>
			</Grid>
		</Grid>


	</React.Fragment>
)

export default HomeSection;
