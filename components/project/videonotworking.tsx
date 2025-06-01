/* eslint-disable @next/next/no-img-element */
"use client";

import Link from 'next/link';
import { IoVideocamOutline } from 'react-icons/io5';

import { Button } from '@/components/ui/button';
import { useTranslationStore } from '@/hooks/useTranslation';
import TRANSLATION from '@/translations/translation';
import { Project } from '@/types';

interface VideoNotWorkingProps {
	project: Project;
}

const VideoNotWorking = ({ project }: VideoNotWorkingProps) => {
	const { language } = useTranslationStore();

	return (
		<div className="flex flex-col gap-2 w-full border rounded-xl p-2 bg-background">
			<p className="text-foreground/50 font-light text-sm">
				{TRANSLATION[language].project.video.notWorking.title}
			</p>
			<Link href={project.media} target="_blank">
				<Button
					variant="secondary"
					className="items-center gap-2 text-md w-full"
				>
					<IoVideocamOutline className="w-5 h-5" />
					<p>{TRANSLATION[language].project.video.notWorking.btnText}</p>
				</Button>
			</Link>
		</div>
	);
};

export default VideoNotWorking;
