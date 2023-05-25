import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { Domine } from 'next/font/google';

// TODO, reuse
const domine = Domine({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Project({project}) {
  const description = documentToReactComponents(project.description);
  const roles = project.roles.length > 0 ? project.roles.join(", ") : null;
  const tools = project.toolsAndTech.length > 0 ? project.toolsAndTech.join(", ") : null;

  return (
    <>
      <dt className='project-heading'>
        <span className="flex-1 font-semibold before:content-['+_']">{project.title}</span>
        <span className="sr-only">&nbsp;|&nbsp;</span>
        <span className='flex-none'>{project.year}</span>
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
          {project.images.map((image) => {
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
