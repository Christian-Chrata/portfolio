import { create } from "zustand";

interface TranslationState {
	language: "en" | "id";
	setLanguage: (language: "en" | "id") => void;
}

export const useTranslationStore = create<TranslationState>((set) => ({
	language: (() => {
		if (typeof window !== "undefined") {
			return localStorage.getItem("language") === "id" ? "id" : "en";
		}

		return "en";
	})(),
	setLanguage: (language: "en" | "id") => {
		const consent = localStorage.getItem("cookies");

		if (consent !== "accepted" && consent !== "necessary") {
			return;
		}

		set({ language });
		localStorage.setItem("language", language);
	},
}));
