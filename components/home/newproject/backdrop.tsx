"use client";

interface BackdropProps {
	children: React.ReactNode;
}

const Backdrop = ({ children }: BackdropProps) => {
	return (
		<div className="flex gradient-background animate-gradient-background rounded-xl p-4 w-full h-48 backdrop-blur-lg">
			{children}
		</div>
	);
};

export default Backdrop;
