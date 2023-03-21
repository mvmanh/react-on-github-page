import React from "react";
import ReactDOM from "react-dom";
import { MasterView } from "./components/MasterView";
import { topbar } from "react-router-loading";

topbar.config({
	barColors: {
		0: "rgba(19, 126, 240, 1.0)",
		".3": "rgba(19, 126, 240, 1.0)",
		"1.0": "rgba(19, 126, 240,  1.0)",
	},
	shadowBlur: 0,
});

ReactDOM.render(
	<React.StrictMode>
		<React.Fragment>
			<MasterView />
		</React.Fragment>
	</React.StrictMode>,
	document.getElementById("root")
);
