import PageHeading from '@/components/PageHeading';
import Intro from '@/components/Intro';
import Items from '@/components/Items';

import { getMetadata, getContentType, getEntries } from '../lib/api';

export default async function Home() {
  const metadata = await getMetadata();
  const projectsType = await getContentType('projects');
  const projects = await getEntries('projects');
  // console.log(projects.items[0].fields)
  // console.log(projectsType)

  return (
    <main className="flex min-h-screen flex-col text-neutral-900 text-xl leading-normal md:text-2xl pb-20">
      <PageHeading data={metadata.fields} />

      <div className="w-full mx-auto px-[7vw] lg:px-0 lg:max-w-[840px]">
        <Intro data={metadata.fields.intro} />
        <Items model={projectsType} items={projects} />
      </div>
    </main>
  );
}
