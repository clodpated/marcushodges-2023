import SectionHeading from "./SectionHeading";
import { getContentType, getProjects } from '../lib/api';
import Project from "./Project";

export default async function Projects() {
  const contentType = await getContentType('thingsIveMade');
  const projects = await getProjects();
  console.log(projects.items)

  return (
    <>
      <SectionHeading title={contentType.name} />
      <dl className="border-t border-neutral-900">
        {projects.items.map((item) => {
          return <Project key={item.sys.id} project={item.fields} />
        })}
      </dl>
    </>
  )
}
