import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Domine } from 'next/font/google'
import { getHeading } from '../lib/api';

const domine = Domine({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

export default async function PageTitle() {
  const headingData = await getHeading();
  const introHTML = documentToReactComponents(headingData.fields.intro);

  return (
    <>
      <h1 className="text-center uppercase leading-none my-8">
        <span className="inline-block text-[10vw] lg:text-8xl font-black pt-[1.5em]">
          { headingData.fields.name }
        </span>
        <span className="sr-only"> - </span>
        <span className="inline-block text-[5vw] lg:text-5xl mb-[1em]">
          { headingData.fields.subtitle }
        </span>
      </h1>

      <div className={`intro ${domine.className} flex flex-col gap-5 text-xl md:text-2xl text-justify lg:max-w-[830px] mx-auto px-[7vw] lg:px-0`}>
        {introHTML}
      </div>
    </>
  );
}
