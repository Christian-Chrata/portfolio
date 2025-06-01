"use client";

interface SubtitleProps {
	text: string;
}

const Subtitle = ({ text }: SubtitleProps) => {
	return (
		<div className="text-center p-2 min-w-48 w-full max-w-96 items-center justify-center backdrop-blur-md bg-linear-to-r from-background via-foreground/50 to-background border-y">
			<pre className="text-sm text-background">{text}</pre>
		</div>
	);
};

export default Subtitle;
