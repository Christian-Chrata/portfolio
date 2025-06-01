"use client";

import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import { Button } from "../../ui/button";
import TitleVideo from "./video";

const Title = () => {
	const { language } = useTranslationStore();

	return (
		<div
			id="title"
			className="flex flex-row h-full lg:h-[720px] justify-center items-center gap-2"
		>
			<div className="flex flex-col gap-12 lg:w-3/5 pr-10">
				<div className="w-full text-left flex flex-col gap-2">
					<h2 className="text-2xl">
						{TRANSLATION[language].index.title.header.hello}
					</h2>
					<h1 className="gradient-text w-fit text-transparent text-4xl sm:text-6xl font-extrabold animate-gradient">
						Christian,
					</h1>
					<p className="text-xl">
						{TRANSLATION[language].index.title.header.subtitle}
					</p>
				</div>
				<Dialog>
					<DialogTrigger asChild>
						<Button className="w-fit gap-2 items-center">
							<IoMail className="w-4 h-4" />
							<p>{TRANSLATION[language].index.title.messageBtn.btnTxt}</p>
						</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-md">
						<DialogHeader>
							<DialogTitle>
								{TRANSLATION[language].index.title.messageBtn.dialog.title}
							</DialogTitle>
							<DialogDescription>
								{TRANSLATION[language].index.title.messageBtn.dialog.subtitle}
							</DialogDescription>
						</DialogHeader>
						<div className="flex flex-col items-center gap-2 w-full">
							<Link
								className="w-full"
								href="https://wa.link/k8isy8"
								target="_blank"
							>
								<Button className="w-full gap-2 items-center">
									<FaWhatsapp className="w-5 h-5" />
									<p>Telegram @joonarafael</p>
								</Button>
							</Link>
							<Link
								className="w-full"
								href="mailto:chrata.main@gmail.com"
								target="_blank"
							>
								<Button
									variant="secondary"
									className="w-full items-center gap-2"
								>
									<IoMail className="w-5 h-5" />
									<p>chrata.main@gmail.com</p>
								</Button>
							</Link>
						</div>
						<DialogFooter className="w-full">
							<DialogClose asChild>
								<Button type="button" className="w-full" variant="outline">
									{TRANSLATION[language].index.title.messageBtn.dialog.closeBtn}
								</Button>
							</DialogClose>
						</DialogFooter>
					</DialogContent>
				</Dialog>
			</div>
			<TitleVideo />
		</div>
	);
};

export default Title;
