import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { MainAppbar } from "./partials/MainAppbar";
import { MainContent } from "./partials/MainContent";
import { MainDrawer } from "./partials/MainDrawer";
import { BrowserRouter as Router } from "react-router-dom";



const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	// container phải là flex nhằm bố trí drawer và main contain thành 2 cột side by side
	container: {
		display: "flex",
	},
	drawer: {
		width: drawerWidth, // container thường chỉ chiếm 240px
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flexGrow: 1, // content thì chiếm phần còn lại nên phải dùng thuộc tính này
		margin: theme.spacing(2),
	},
	appbar: {
		width: `calc(100% - ${drawerWidth}px)`, // appbar trong trường hợp này không che phần drawer nên chỉ chiếm width một phần bằng full width - 240
	},
}));

export const MasterView = () => {
	const classes = useStyles();
	const [title, setTitle] = useState("Home");

	const handlePageChange = (title) => {
		setTitle(title);
		document.title = title;
	};

	return (
		<Router>
			<div className={classes.container}>
				<MainAppbar className={classes.appbar} title={title} />
				<MainDrawer
					className={classes.drawer}
					onChange={handlePageChange}
				/>
				<MainContent className={classes.content} />
			</div>
		</Router>
	);
};
