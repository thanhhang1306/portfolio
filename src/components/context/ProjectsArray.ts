import React, { useState, useEffect } from "react";

interface Badge {
  text: string;
  colorScheme: string;
}

interface Button {
  text: string;
  href: string;
}

interface Project {
  name: string;
  description: string;
  image: string;
  tags: string[];
  badges: Badge[];
  buttons: Button[];
}

const parseProjects = (mdContent: string): Project[] => {
  const projects: Project[] = [];
  const lines = mdContent.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      const name = line.substr(3).trim();
      const description = lines[++i].trim();
      const imageLine = lines[++i];
      const image = imageLine.match(/!\[(.*)\]\((.*)\)/)[2];
      const tags = lines[++i].split(":")[1].trim();
      const badges: Badge[] = [];
      const buttons: Button[] = [];

      while (lines[++i] && !lines[i].startsWith("- Badges:")) {}
      while (lines[++i] && lines[i].startsWith("  - ")) {
        const badgeLine = lines[i].substr(4).split("[");
        const badgeName = badgeLine[0].trim();
        const badgeColor = badgeLine[1].split("]")[0].trim();
        badges.push({ text: badgeName, colorScheme: badgeColor });
      }

      while (lines[++i] && lines[i].startsWith("  - ")) {
        const buttonLine = lines[i].substr(4).split("[");
        const buttonText = buttonLine[0].trim();
        const buttonHref = buttonLine[1].split("]")[0].trim();
        buttons.push({ text: buttonText, href: buttonHref });
      }

      projects.push({
        name,
        description,
        image,
        tags: [tags],
        badges,
        buttons,
      });
    }
  }

  return projects;
};

const ProjectsArray: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/content/Projects.md")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch markdown content");
        }
        return response.text();
      })
      .then((mdContent) => {
        setProjects(parseProjects(mdContent));
      })
      .catch((error) => {
        console.error("Error fetching markdown content:", error);
      });
  }, []);

  return projects;
};

export default ProjectsArray;
