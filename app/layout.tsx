import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
import { Suspense } from "react";

import CookiesConsent from "@/components/cookiesconsent";
import Footer from "@/components/footer";
import LoadingState from "@/components/loadingstate";
import Navbar from "@/components/navbar/navbar";
import { CSPostHogProvider } from "@/components/posthogprovider";
import ThemeProvider from "@/components/themeprovider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://joonakettuen.netlify.app"),
	title: "Portfolio | Christian",
	description: "Portfolio of Christian",
	twitter: {
		card: "summary_large_image",
	},
	openGraph: {
		images: [
			{
				url: new URL("https://joonakettunen.netlify.app/opengraph-image.png")
					.href,
				width: 1400,
				height: 425,
				alt: "Portfolio | Christian",
			},
		],
	},
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ThemeProvider>
					<CSPostHogProvider>
						<Navbar />
						<main className="min-h-screen bg-background">
							<div className="flex flex-col gap-32 w-full pt-56 sm:pt-52 items-center min-h-screen justify-between">
								<Suspense fallback={<LoadingState />}>{children}</Suspense>
								<Footer />
								<CookiesConsent />
							</div>
						</main>
					</CSPostHogProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
