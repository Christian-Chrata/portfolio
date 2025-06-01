"use client";

import posthog from "posthog-js";
import { PostHogProvider } from "posthog-js/react";

import { useCookies } from "@/hooks/useCookies";

export function CSPostHogProvider({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	const cookieState = useCookies();

	if (cookieState.cookies !== "accepted") {
		posthog.reset();
		posthog.opt_out_capturing();

		return <>{children}</>;
	}

	if (typeof window !== "undefined") {
		posthog.init("phc_L3NHv8InckoGWuu5A8DrIM92Nhjw8K3J4aYuS2Mfo6V", {
			api_host: "https://eu.i.posthog.com",
		});

		return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
	}

	return <>{children}</>;
}
