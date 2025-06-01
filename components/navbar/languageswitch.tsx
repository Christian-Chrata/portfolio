"use client";

import { IoChevronDownOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslationStore } from "@/hooks/useTranslation";

const LanguageSwitch = () => {
	const { language, setLanguage } = useTranslationStore();

	const handleLanguageSwitch = (lang: "en" | "fi") => {
		setLanguage(lang);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="ghost"
					size="icon"
					className="gap-1 items-center flex flex-row"
				>
					<p className="text-xs font-light">{language.toUpperCase()}</p>
					<IoChevronDownOutline className="w-3 h-3" />
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<DropdownMenuItem onClick={() => handleLanguageSwitch("en")}>
					EN
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleLanguageSwitch("fi")}>
					FI
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LanguageSwitch;
