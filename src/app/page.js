import Image from "next/image";
import Aboutpage from "./components/about";
import Skillspage from "./components/skills";
import EducationExperience from "./components/education";

export default function Home() {
  return (
    <div>
      <Aboutpage></Aboutpage>
      <Skillspage></Skillspage>
      <EducationExperience></EducationExperience>
    </div>
  );
}
