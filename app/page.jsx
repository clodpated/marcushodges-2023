import PageHeading from "@/components/PageHeading";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";

import { getHeading } from '../lib/api';

export default async function Home() {
  const headingData = await getHeading();

  return (
    <main className="flex min-h-screen flex-col text-neutral-900 text-xl leading-normal md:text-2xl">
      <PageHeading data={headingData.fields} />

      <div className="w-full mx-auto px-[7vw] lg:px-0 lg:max-w-[840px]">
        <Intro data={headingData.fields.intro} />
        <Projects />
      </div>
    </main>
  );
}
