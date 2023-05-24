import { getHeading } from '../lib/api';

export default async function PageTitle() {
  const headingData = await getHeading();

  return (
    <h1 className="text-center uppercase leading-none my-8">
      <span className="block text-[10vw] lg:text-8xl font-black pt-[1.5em]">
        { headingData.fields.name }
      </span>
      <span className="sr-only"> - </span>
      <span className="inline-block text-[5vw] lg:text-5xl">
      { headingData.fields.subtitle }
      </span>
    </h1>
  );
}
