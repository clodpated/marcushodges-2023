import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Domine } from 'next/font/google';

const domine = Domine({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default async function Intro({ data }) {
  const introHTML = documentToReactComponents(data);

  return (
    <div
      className={`intro ${domine.className} flex flex-col gap-5 text-xl md:text-2xl text-justify mx-auto px-[7vw] lg:px-0 lg:max-w-[830px]`}
    >
      {introHTML}
    </div>
  );
}
