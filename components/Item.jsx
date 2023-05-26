import Image from 'next/image';
import PropTypes from 'prop-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Domine } from 'next/font/google';

// TODO, reuse
const domine = Domine({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Item({item}) {
  const description = documentToReactComponents(item.description);
  const roles = item.roles.length > 0 ? item.roles.join(", ") : null;
  const tools = item.toolsAndTech.length > 0 ? item.toolsAndTech.join(", ") : null;

  return (
    <>
      <dt className='item-heading'>
        <span className="flex-1 font-semibold before:content-['+_']">{item.title}</span>
        <span className="sr-only">&nbsp;|&nbsp;</span>
        <span className='flex-none'>{item.year}</span>
      </dt>
      <dd className='overflow-hidden py-[1em] px-[7vw] lg:px-[1em] bg-green-100'>
        <div className={`flex flex-col gap-[1em] ${domine.className} text-lg md:text-xl`}>{description}</div>
        <div className='mt-[3em]'>
          {roles &&
            <div>
              <h3>Roles</h3>
              <p>{roles}</p>
            </div>
          }

          {tools &&
            <div>
              <h3>Tools and Tech</h3>
              <p>{tools}</p>
            </div>
          }
        </div>
        <div>
          {item.images.map((image) => {
            return (
              <figure key={image.sys.id}>
                <figcaption>{image.fields.title}</figcaption>
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
      </dd>
    </>
  )
}

Item.propTypes = {
  item: PropTypes.object.isRequired,
};
