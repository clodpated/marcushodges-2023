import PageHeading from '@/components/PageHeading';
import Intro from '@/components/Intro';
import Items from '@/components/Items';

import { getEntry, getModel } from '../lib/api';

export default async function Home() {
  const metadata = await getEntry('MK6HbkvA4DUvFAHTggQiX');
  const projectsModel = await getModel('projects');
  const sortedProjects = await getEntry('3LT2UdvnvuHWgmD8oFh6r9');
  const jobsModel = await getModel('jobs');
  const sortedJobs = await getEntry('2W5H1RIPdmkxoiIjK9icZ4');

  return (
    <main className="flex min-h-screen flex-col text-neutral-900 text-xl leading-normal md:text-2xl pb-20">
      <PageHeading data={metadata.fields} />

      <div className="w-full mx-auto px-[7vw] lg:px-0 lg:max-w-[840px]">
        <Intro data={metadata.fields.intro} />
        <Items model={projectsModel} items={sortedProjects.fields.itemOrder} />
        <Items model={jobsModel} items={sortedJobs.fields.itemOrder} />
      </div>
    </main>
  );
}
