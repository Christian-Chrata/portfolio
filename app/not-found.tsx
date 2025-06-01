"use client";

import Link from "next/link";
import { IoIosArrowDropleft } from "react-icons/io";

import ClientOnly from "@/components/clientonly";
import EmptyState from "@/components/emptystate";
import { Button } from "@/components/ui/button";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

const NotFound = () => {
	const { language } = useTranslationStore();

	if (typeof window !== "undefined") {
		document.title = "404 | Joona Kettunen";
	}

	return (
		<ClientOnly>
			<EmptyState>
				<div className="flex flex-col gap-12 items-center justify-center">
					<h1 className="text-4xl font-extrabold">404</h1>
					<p>{TRANSLATION[language].notFound.subtitle}</p>
					<Link href="/">
						<Button className="w-min items-center gap-2">
							<IoIosArrowDropleft className="w-4 h-4" />
							<p>{TRANSLATION[language].notFound.btnText}</p>
						</Button>
					</Link>
				</div>
			</EmptyState>
		</ClientOnly>
	);
};

export default NotFound;
