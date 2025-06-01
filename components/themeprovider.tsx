"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { useCookies } from "@/hooks/useCookies";

interface ThemeProviderProps {
	children: React.ReactNode;
}

const ThemeProvider = ({ children }: Readonly<ThemeProviderProps>) => {
	const cookieState = useCookies();

	if (typeof window !== "undefined") {
		if (
			cookieState.cookies !== "accepted" &&
			cookieState.cookies !== "necessary"
		) {
			return <>{children}</>;
		}

		return (
			<NextThemesProvider
				attribute="class"
				defaultTheme="system"
				enableSystem
				disableTransitionOnChange
			>
				{children}
			</NextThemesProvider>
		);
	}

	return <>{children}</>;
};

export default ThemeProvider;
