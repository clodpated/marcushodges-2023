import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Project({project}) {
  const description = documentToReactComponents(project.description);
  const roles = project.roles.length > 0 ? project.roles.join(", ") : null;
  const tools = project.toolsAndTech.length > 0 ? project.toolsAndTech.join(", ") : null;

  return (
    <>
      <dt>
        <span>{project.title}</span>
        <span className="sr-only">&nbsp;|&nbsp;</span>
        <span>{project.year}</span>
      </dt>
      <dd>
        <div>{description}</div>
        <div>
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
