'use client';

import { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Domine } from 'next/font/google';
import ItemMeta from './ItemMeta';

// TODO, reuse
const domine = Domine({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Item({ item, model }) {
  const description = documentToReactComponents(item.description);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <dt
        className={classNames(
          'item-heading  px-[7vw] lg:px-[1em]',
          isOpen && 'before:scale-y-100'
        )}
        onClick={toggleOpen}
      >
        <span
          className={classNames(
            'flex-1 font-semibold',
            isOpen ? "before:content-['-_']" : "before:content-['+_']"
          )}
        >
          {item.title}
        </span>
        <span className="sr-only">&nbsp;|&nbsp;</span>
        <span className="flex-none">{item.year}</span>
      </dt>

      <dd
        className={classNames(
          'sr-only overflow-hidden py-[1em] px-[7vw] lg:px-[1em] bg-green-100 opacity-0 transition-opacity duration-500 border-b border-neutral-900',
          isOpen && 'not-sr-only opacity-100'
        )}
      >
        <div
          className={`item-description flex flex-col gap-[1em] ${domine.className} text-lg md:text-xl`}
        >
          {description}
        </div>

        <div className="mt-[3em] md:flex md:gap-5">
          {item.agency && (
            <ItemMeta
              title={model.fields.filter((word) => word.id == 'agency')[0].name}
              metadata={item.agency}
            />
          )}
          {item.roles && (
            <ItemMeta
              title={model.fields.filter((word) => word.id == 'roles')[0].name}
              metadata={item.roles}
            />
          )}
          {item.toolsAndTech && (
            <ItemMeta
              title={
                model.fields.filter((word) => word.id == 'toolsAndTech')[0].name
              }
              metadata={item.toolsAndTech}
            />
          )}
          {item.clients && (
            <ItemMeta
              title={
                model.fields.filter((word) => word.id == 'clients')[0].name
              }
              metadata={item.clients}
            />
          )}
        </div>

        {item.images && (
          <div className="text-center">
            {item.images.map((image) => {
              return (
                <figure
                  key={image.sys.id}
                  className="bg-green-300 shadow-lg inline-block mb-[1em] px-3 pb-3"
                >
                  <figcaption className="text-base font-semibold leading-5 py-4 text-left uppercase">
                    {image.fields.title}
                  </figcaption>
                  <Image
                    src={`https:${image.fields.file.url}`}
                    alt={image.fields.description}
                    width={image.fields.file.details.image.width}
                    height={image.fields.file.details.image.height}
                  />
                </figure>
              );
            })}
          </div>
        )}
      </dd>
    </>
  );
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
