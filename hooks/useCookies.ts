import { create } from "zustand";

interface CookiesState {
	cookies: "accepted" | "necessary" | "declined";
	setCookies: (consent: "accepted" | "necessary" | "declined") => void;
}

export const useCookies = create<CookiesState>((set) => ({
	cookies: (() => {
		if (typeof window !== "undefined") {
			const consent = localStorage.getItem("cookies");

			if (consent === "accepted" || consent === "necessary") {
				return consent;
			}
		}

		return "declined";
	})(),
	setCookies: (consent) => {
		set({ cookies: consent });
	},
}));
