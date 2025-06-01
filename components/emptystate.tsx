"use client";

import Container from "./container";

interface ContainerProps {
	children: React.ReactNode;
}

const EmptyState = ({ children }: ContainerProps) => {
	return (
		<div className="h-[80svh]">
			<Container>{children}</Container>
		</div>
	);
};

export default EmptyState;
