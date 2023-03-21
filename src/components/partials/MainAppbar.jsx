import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";

export const MainAppbar = ({ className, title }) => {
	return (
		<AppBar color="inherit" className={className}>
			<Toolbar>
				<IconButton color="inherit">
					<MenuIcon />
				</IconButton>
				<Typography>{title}</Typography>
			</Toolbar>
		</AppBar>
	);
};
