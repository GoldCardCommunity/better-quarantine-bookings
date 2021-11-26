import {
	Container,
	Divider,
	Grid,
	Box,


	Typography,
	Breadcrumbs,
	Link,


} from '@mui/material';

import NavigationMenu from './partials/navigation-menu.js';
import HomeSection from './partials/home.js';

function App() {
  return (
		<div className="App">
			<Container fixed>
				<Grid container justifyContent="center" alignItems="center">

					<NavigationMenu />

					<HomeSection />
					{ false &&
						<Grid item xs={12} mt={20} mb={20}><Divider orientation="horizontal" /></Grid>
					}

					<Grid item xs={12} mt={50} mb={5}>
						<Divider orientation="horizontal" />
						<Box textAlign="center">
							<pre>v0.1</pre>
						</Box>
					</Grid>

				</Grid>
			</Container>
		</div>
	);
}

export default App;
