import PropTypes from 'prop-types';
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
      className={`${domine.className} flex flex-col gap-5 text-lg md:text-[22px] leading-normal md:text-justify w-full mx-auto px-[7vw] lg:px-0 lg:max-w-[840px]`}
    >
      {introHTML}
    </div>
  );
}

Intro.propTypes = {
  data: PropTypes.object.isRequired,
};
