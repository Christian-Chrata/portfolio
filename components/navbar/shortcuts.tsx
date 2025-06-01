"use client";

import { useTranslationStore } from "@/hooks/useTranslation";
import TRANSLATION from "@/translations/translation";

import { Button } from "../ui/button";

const Shortcuts = () => {
  const { language } = useTranslationStore();

  return (
    <div className="flex flex-row gap-1 justify-center items-center">
      <Button
        onClick={() => {
          const element = document.getElementById("title");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        {TRANSLATION[language].global.navbar.shortcuts[0]}
      </Button>
      <Button
        onClick={() => {
          const element = document.getElementById("aboutMe");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        {TRANSLATION[language].global.navbar.shortcuts[1]}
      </Button>
      <Button
        onClick={() => {
          const element = document.getElementById("projects");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        {TRANSLATION[language].global.navbar.shortcuts[3]}
      </Button>
      <Button
        onClick={() => {
          const element = document.getElementById("skills");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        {TRANSLATION[language].global.navbar.shortcuts[2]}
      </Button>
      <Button
        onClick={() => {
          const element = document.getElementById("experience");
          element?.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
        variant="link"
      >
        {TRANSLATION[language].global.navbar.shortcuts[4]}
      </Button>
    </div>
  );
};

export default Shortcuts;
