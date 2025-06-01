"use client";

import { RxCookie } from "react-icons/rx";

import { useCookies } from "@/hooks/useCookies";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import { Button } from "./ui/button";

const CookiesConsent = () => {
	const { language } = useTranslationStore();
	const cookieState = useCookies();

	if (typeof window === "undefined") {
		return null;
	}

	const consent = localStorage.getItem("cookies");

	if (consent) {
		return null;
	}

	const acceptCookies = () => {
		localStorage.setItem("cookies", "accepted");
		cookieState.setCookies("accepted");
	};

	const declineUnnecessary = () => {
		localStorage.setItem("cookies", "necessary");
		cookieState.setCookies("necessary");
	};

	const declineCookies = () => {
		localStorage.setItem("cookies", "declined");
		cookieState.setCookies("declined");
	};

	return (
		<div className="fixed bottom-0 w-full bg-background z-99">
			<div className="shadow-light dark:shadow-neon relative z-100 flex w-full items-center justify-center flex-col gap-4 pt-8 pb-8 md:pb-16 px-4 border-t">
				<div className="flex flex-row gap-3 items-center">
					<RxCookie className="w-8 h-8 text-foreground" />
					<h1 className="flex font-extrabold text-3xl">
						{TRANSLATION[language].global.cookies.title}
					</h1>
				</div>
				<p className="text-center">
					{TRANSLATION[language].global.cookies.description}
				</p>
				<div className="flex flex-col lg:flex-row gap-2">
					<div className="flex flex-col md:flex-row gap-2">
						<Button
							onClick={() => {
								acceptCookies();
							}}
						>
							{TRANSLATION[language].global.cookies.buttons.accept}
						</Button>
						<Button variant="outline" onClick={declineUnnecessary}>
							{TRANSLATION[language].global.cookies.buttons.acceptNecessary}
						</Button>
					</div>
					<Button variant="destructive" onClick={declineCookies}>
						{TRANSLATION[language].global.cookies.buttons.decline}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CookiesConsent;
