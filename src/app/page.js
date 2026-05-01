import Image from "next/image";
import Aboutpage from "./components/about";
import Skillspage from "./components/skills";
import EducationExperience from "./components/education";
import ProjectsSection from "./components/projects";
import ServicesComponent from "./components/services";
import ContactComponent from "./components/contact";

export default function Home() {
  return (
    <div>
      <Aboutpage></Aboutpage>
      <Skillspage></Skillspage>
      <ServicesComponent></ServicesComponent>
      <EducationExperience></EducationExperience>
      <ProjectsSection></ProjectsSection>

      <ContactComponent></ContactComponent>
    </div>
  );
}
