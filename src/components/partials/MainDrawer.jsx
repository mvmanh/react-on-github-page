import { Drawer, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import { SampleList } from "../common/SampleList";

export const MainDrawer = ({ className, onChange }) => {
	return (
		<Drawer
			variant="permanent"
			anchor="left"
			className={className}
			classes={{ paper: className }} // cần overide kích thước của paper bên trong drawer nhằm thay đổi kích thước cho drawer
		>
			{/* Bên trong drawer ta cũng đặt một toolbar để tạo khoảng trống ngang bằng với toolbar bên trong appbar
			 */}
			<Toolbar>
				<Typography variant="h6">Note Management</Typography>
			</Toolbar>
			<SampleList onChange={onChange} />
			<div style={{ marginBottom: 16 }}>
				<Typography
					variant="body2"
					align="center"
					color="textSecondary"
				>
					Copyright &copy; MVM
				</Typography>
			</div>
		</Drawer>
	);
};
