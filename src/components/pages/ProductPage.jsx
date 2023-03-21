import { Grid, makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { deepOrange } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ShareIcon from "@material-ui/icons/Share";
import { LoadingContext } from "react-router-loading";
import React, { useContext } from "react";

const useStyles = makeStyles((theme) => ({
	avatar: {
		backgroundColor: deepOrange[500],
	},
	media: {
		height: 0,
		paddingTop: "56.25%", // 16:9
	},
}));

export const ProductPage = ({ image }) => {
	const cls = useStyles();
	const loadingContext = useContext(LoadingContext);
	setTimeout(() => {
		loadingContext.done();
	}, 500);
	return (
		<Grid container spacing={3}>
			{[...Array(30)].map((m, index) => (
				<Grid key={index} item xs={12} sm={12} md={4} lg={3}>
					<Card sx={{ maxWidth: 345 }} elevation={3}>
						<CardHeader
							avatar={
								<Avatar
									className={cls.avatar}
									aria-label="recipe"
								>
									R
								</Avatar>
							}
							action={
								<IconButton aria-label="settings">
									<MoreVertIcon />
								</IconButton>
							}
							title="Shrimp and Chorizo Paella"
							subheader="September 14, 2016"
						/>
						<CardMedia
							className={cls.media}
							image={image}
							title="Paella dish"
						/>
						<CardContent>
							<Typography variant="body2" color="textSecondary">
								This impressive paella is a perfect party dish
								and a fun meal to cook together with your
								guests. Add 1 cup of frozen peas along with the
								mussels, if you like.
							</Typography>
						</CardContent>
						<CardActions disableSpacing>
							<IconButton aria-label="add to favorites">
								<FavoriteIcon />
							</IconButton>
							<IconButton aria-label="share">
								<ShareIcon />
							</IconButton>
						</CardActions>
					</Card>
				</Grid>
			))}
		</Grid>
	);
};
