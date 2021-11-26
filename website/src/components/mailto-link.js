import {
	Link,
	Typography
} from '@mui/material';



export const MailtoLink = (props) => (

	<Link href={`mailto:${props.email}?subject=${props.subject}`}>
		<Typography variant={props.variant}>
			<u>{props.children}</u>
		</Typography>
	</Link>
);

export default MailtoLink;
