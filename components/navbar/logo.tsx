"use client";

import { usePathname } from "next/navigation";

import { Button } from "../ui/button";

const Logo = () => {
	const pathname = usePathname();

	return (
		<Button
			onClick={() => {
				if (pathname !== "/") {
					window.open("/", "_self");
				} else {
					const element = document.getElementById("title");
					element?.scrollIntoView({ behavior: "smooth", block: "center" });
				}
			}}
			variant="link"
		>
			<div className="flex flex-row text-xl">
				<pre>{`<`}</pre>
				<pre className="text-purple-500">{`Chrata`}</pre>
				<pre>{` />`}</pre>
			</div>
		</Button>
	);
};

export default Logo;
