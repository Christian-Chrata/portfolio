"use client";

import { useTheme } from "next-themes";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

const ThemeSwitch = () => {
	const { setTheme } = useTheme();
	const { language } = useTranslationStore();

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button variant="outline" size="icon">
					<IoSunny className="absolute h-4 w-4 dark:scale-0" />
					<BsFillMoonStarsFill className="absolute h-3 w-3 dark:scale-100 scale-0" />
					<span className="sr-only">Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => setTheme("light")}>
					{TRANSLATION[language].global.theme.light}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("dark")}>
					{TRANSLATION[language].global.theme.dark}
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => setTheme("system")}>
					{TRANSLATION[language].global.theme.system}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default ThemeSwitch;
