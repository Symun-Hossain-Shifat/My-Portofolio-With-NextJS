import Image from "next/image";
import Aboutpage from "./components/about";
import Skillspage from "./components/skills";
import EducationExperience from "./components/education";
import ProjectsSection from "./components/projects";

export default function Home() {
  return (
    <div>
      <Aboutpage></Aboutpage>
      <Skillspage></Skillspage>
      <EducationExperience></EducationExperience>
      <ProjectsSection></ProjectsSection>
    </div>
  );
}
