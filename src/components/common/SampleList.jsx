import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import CameraIcon from "@material-ui/icons/Camera";
import CastIcon from "@material-ui/icons/Cast";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import React, { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export const SampleList = ({ onChange }) => {
	const menuItems = [
		{ label: "Home", path: "/", icon: <HomeIcon /> },
		{ label: "Product", path: "/product", icon: <BusinessCenterIcon /> },
		{ label: "Category", path: "/category", icon: <CameraIcon /> },
		{ label: "Customer", path: "/customer", icon: <CastIcon /> },
		{ label: "Settings", path: "/settings", icon: <SettingsIcon /> },
	];

	const location = useLocation();

	return (
		<List style={{ flexGrow: 1 }}>
			{menuItems.map(({ label, icon, path }) => (
				<ListItem
					button
					component={Link}
					to={path}
					key={label}
					onClick={() => onChange(label)}
					selected={path === location.pathname}
				>
					<ListItemIcon>{icon}</ListItemIcon>
					<ListItemText>{label}</ListItemText>
				</ListItem>
			))}
		</List>
	);
};
