"use client";

import { useEffect, useState } from "react";

const useScreenSize = () => {
	const [screenSize, setScreenSize] = useState(() => {
		if (typeof window !== "undefined") {
			return {
				width: window.innerWidth,
				height: window.innerHeight,
			};
		}

		return {
			width: 0,
			height: 0,
		};
	});

	useEffect(() => {
		const handleResize = () => {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		};

		if (typeof window !== "undefined") {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});

			window.addEventListener("resize", handleResize);

			return () => {
				window.removeEventListener("resize", handleResize);
			};
		} else {
			setScreenSize({
				width: 0,
				height: 0,
			});
		}
	}, []);

	return screenSize;
};

export default useScreenSize;
