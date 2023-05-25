import SectionHeading from "./SectionHeading";
import { getProjects } from '../lib/api';

export default async function Projects() {
  const projects = await getProjects();
  console.log(projects.items)

  return (
    <>
      <SectionHeading title={projects.name} />
    </>
  )
}
