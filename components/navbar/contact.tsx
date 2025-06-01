"use client";

import Link from "next/link";
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
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

import { Button } from "../ui/button";

interface ContactButtonProps {
	btnTxt?: string;
}

const ContactButton = ({ btnTxt }: ContactButtonProps) => {
	const { language } = useTranslationStore();

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="ghost"
					className="bg-purple-500 text-white hover:bg-purple-500/75 hover:text-white/75"
				>
					<p>{btnTxt ?? TRANSLATION[language].global.contact.btnTxt}</p>
				</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-md">
				<DialogHeader>
					<DialogTitle>
						{TRANSLATION[language].global.contact.dialog.title}
					</DialogTitle>
					<DialogDescription>
						{TRANSLATION[language].global.contact.dialog.subtitle}
					</DialogDescription>
				</DialogHeader>
				<div className="flex flex-col items-center gap-2 w-full">
					<div className="flex flex-row gap-2 w-full">
						<Link
							className="w-full"
							href="https://github.com/joonarafael"
							target="_blank"
						>
							<Button className="px-3 py-0 w-full">
								<RxGithubLogo className="w-5 h-5" />
							</Button>
						</Link>
						<Link
							className="w-full"
							href="https://www.linkedin.com/in/joonakettunen/"
							target="_blank"
						>
							<Button className="px-3 py-0 w-full">
								<FaLinkedin className="w-5 h-5" />
							</Button>
						</Link>
						<Link
							className="w-full"
							href="https://t.me/joonarafael"
							target="_blank"
						>
							<Button className="px-3 py-0 w-full">
								<FaTelegramPlane className="w-5 h-5" />
							</Button>
						</Link>
					</div>
					<Link
						className="w-full"
						href="mailto:joonarafael@gmail.com"
						target="_blank"
					>
						<Button
							variant="secondary"
							className="px-3 py-0 w-full items-center gap-2"
						>
							<IoMail className="w-5 h-5" />
							<p>joonarafael@gmail.com</p>
						</Button>
					</Link>
				</div>
				<DialogFooter className="w-full">
					<DialogClose asChild>
						<Button className="w-full" type="button" variant="outline">
							{TRANSLATION[language].global.contact.dialog.closeBtn}
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default ContactButton;
