import PageHeading from '@/components/PageHeading';
import Intro from '@/components/Intro';
import Items from '@/components/Items';

import { getEntry, getContentType, getEntries } from '../lib/api';

export default async function Home() {
  const metadata = await getEntry('MK6HbkvA4DUvFAHTggQiX');
  const projectsType = await getContentType('projects');
  const sortedProjects = await getEntry('4PJq70SK3eKINny9dlQJ6T')
  // console.log(projects.items[0].fields)
  // console.log(sortedProjects.fields.projects)

  return (
    <main className="flex min-h-screen flex-col text-neutral-900 text-xl leading-normal md:text-2xl pb-20">
      <PageHeading data={metadata.fields} />

      <div className="w-full mx-auto px-[7vw] lg:px-0 lg:max-w-[840px]">
        <Intro data={metadata.fields.intro} />
        <Items model={projectsType} items={sortedProjects.fields.projects} />
      </div>
    </main>
  );
}
