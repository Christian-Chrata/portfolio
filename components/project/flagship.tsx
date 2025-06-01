"use client";

import { MdStars } from "react-icons/md";

interface FlagShipProps {
	text: string;
}

const FlagShip = ({ text }: FlagShipProps) => {
	return (
		<div className="border text-xs text-foreground/50 py-1 px-3 rounded-sm w-fit flex flex-row items-center gap-1 border-foreground">
			<MdStars className="w-3 h-3" />
			<p>{text}</p>
		</div>
	);
};

export default FlagShip;
