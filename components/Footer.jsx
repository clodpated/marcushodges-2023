import React from 'react';
import PropTypes from 'prop-types';
import SectionHeading from './SectionHeading';

export default function Footer({ data }) {
  return (
    <div className="px-4">
      <SectionHeading title={data.footerTitle} />
      <ul className="flex flex-wrap justify-center text-center gap-x-6 gap-y-2">
        <li>
          <a className="hover:underline" href={`mailto:${data.email}`}>
            {data.email}
          </a>
        </li>
        <li>
          <a className="hover:underline" href={data.github}>
            Github
          </a>
        </li>
        <li>
          <a className="hover:underline" href={data.linkedIn}>
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  );
}

Footer.propTypes = {
  data: PropTypes.object.isRequired,
};
