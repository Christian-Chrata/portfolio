"use client";

import PacmanLoader from "react-spinners/PacmanLoader";

const LoadingState = () => {
	return (
		<div className="flex w-full h-full items-center justify-center p-8 cursor-wait animate-pulse">
			<PacmanLoader size={50} color="silver" />
		</div>
	);
};

export default LoadingState;
