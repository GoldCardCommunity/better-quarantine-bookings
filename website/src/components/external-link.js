import {
	Link,
	Typography
} from '@mui/material';



export const ExternalLink = (props) => (

	<Link underline="hover" color="inherit" href={props.url} target="_blank">
		<Typography component="span" fontSize={20} fontWeight={500} color="#FF4B55">
			<u>{props.children}</u>
		</Typography>
	</Link>

);

export default ExternalLink;
