import { LoadingContext } from "react-router-loading";
import React, { useContext } from "react";
import { SampleParagraphs } from "../common/SampleParagraphs";

export const HomePage = () => {
	const loadingContext = useContext(LoadingContext);
	setTimeout(() => {
		loadingContext.done();
	}, 2500);
	return <SampleParagraphs />;
};
