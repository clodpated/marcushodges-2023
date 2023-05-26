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
      className={`${domine.className} flex flex-col gap-5 text-xl md:text-[22px] leading-normal text-justify`}
    >
      {introHTML}
    </div>
  );
}

Intro.PropTypes = {
  data: PropTypes.object.isRequired,
};
