"use client";

import Link from "next/link";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiPlusCircle } from "react-icons/hi";
import { IoMail } from "react-icons/io5";
import { RxGithubLogo } from "react-icons/rx";

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

const NewProjectPanel = () => {
	const { language } = useTranslationStore();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="group hover:cursor-pointer transition hover:duration-100 duration-300 hover:scale-[1.03] shadow-md shadow-black/50 w-full h-96 flex flex-col rounded-xl items-center justify-center bg-secondary border-t-2 border-x">
					<HiPlusCircle className="h-48 w-48 text-foreground/50" />
					<p className="font-bold text-xl">
						{TRANSLATION[language].projects.newProject.new}
					</p>
				</div>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>
						{TRANSLATION[language].projects.newProject.dialog.title}
					</DialogTitle>
					<DialogDescription>
						{TRANSLATION[language].projects.newProject.dialog.subtitle}
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center gap-2 w-full">
					<div className="flex flex-row gap-2 w-full">
						<Link
							className="w-full"
							href="https://github.com/Christian-Chrata"
							target="_blank"
						>
							<Button className="px-3 py-0 w-full">
								<RxGithubLogo className="w-5 h-5" />
							</Button>
						</Link>
						<Link
							className="w-full"
							href="https://www.linkedin.com/in/christian-christian-9666a6361/"
							target="_blank"
						>
							<Button className="px-3 py-0 w-full">
								<FaLinkedin className="w-5 h-5" />
							</Button>
						</Link>
						<Link
							className="w-full"
							href="https://wa.link/k8isy8"
							target="_blank"
						>
							<Button className="px-3 py-0 w-full">
								<FaWhatsapp className="w-5 h-5" />
							</Button>
						</Link>
					</div>
					<Link
						className="w-full"
						href="mailto:chrata.main@gmail.com"
						target="_blank"
					>
						<Button
							variant="secondary"
							className="px-3 py-0 w-full items-center gap-2"
						>
							<IoMail className="w-5 h-5" />
							<p>chrata.main@gmail.com</p>
						</Button>
					</Link>
				</div>
				<DialogFooter className="w-full">
					<DialogClose asChild>
						<Button className="w-full" type="button" variant="outline">
							{TRANSLATION[language].projects.newProject.dialog.closeBtn}
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default NewProjectPanel;
