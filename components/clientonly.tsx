"use client";

import dynamic from "next/dynamic";

interface ClientOnlyProps {
	children: React.ReactNode;
}

const ClientOnly = ({ children }: ClientOnlyProps) => {
	return children;
};

export default dynamic(() => Promise.resolve(ClientOnly), {
	ssr: false,
});
