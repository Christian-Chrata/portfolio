"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { useCookies } from "@/hooks/useCookies";

import ContactButton from "./contact";
import CookiesPreferences from "./cookiespreferences";
import LanguageSwitch from "./languageswitch";
import Logo from "./logo";
import Shortcuts from "./shortcuts";
import ThemeSwitch from "./themeswitch";

const Navbar = () => {
	const cookieState = useCookies();
	const pathName = usePathname();

	const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
	const [mousePosition, setMousePosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const updateScrollDirection = () => {
			const scrollY = window.scrollY;
			if (scrollY > lastScrollY) {
				setScrollDirection("down");
			} else if (scrollY < lastScrollY) {
				setScrollDirection("up");
			}
			lastScrollY = scrollY;
		};

		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
		};

		window.addEventListener("scroll", updateScrollDirection);
		window.addEventListener("mousemove", updateMousePosition);

		return () => {
			window.removeEventListener("scroll", updateScrollDirection);
			window.removeEventListener("mousemove", updateMousePosition);
		};
	}, []);

	useEffect(() => {
		const checkDisplay = () => {
			if (mousePosition.y < 140) {
				setScrollDirection("up");
			}
		};

		checkDisplay();
	}, [mousePosition]);

	return (
		<div
			className={`flex z-50 pointer-events-none p-12 group fixed w-full justify-center items-center bg-linear-to-b from-background to-transparent transition-transform duration-1000 ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
				}`}
		>
			<div className="group-hover:shadow-lg group-hover:shadow-black/50 dark:group-hover:shadow-purple-500 shadow-black/25 bg-background border-t-2 border-x shadow-md min-w-[180px] w-full max-w-[2440px] flex justify-between items-center rounded-xl p-2 transition group-hover:duration-200 duration-1000 flex-col sm:flex-row gap-2 pointer-events-auto">
				<div className="flex flex-row gap-2">
					<Logo />
					<div className="block sm:hidden">
						<CookiesPreferences />
					</div>
				</div>
				{typeof window !== "undefined" && pathName === "/" && (
					<div className="hidden lg:block">
						<Shortcuts />
					</div>
				)}
				<div className="flex flex-row gap-2">
					{cookieState.cookies !== "declined" && (
						<>
							<LanguageSwitch />
							<ThemeSwitch />
						</>
					)}
					<div className="hidden sm:block">
						<CookiesPreferences />
					</div>
					<ContactButton />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
