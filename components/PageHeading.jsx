import PropTypes from 'prop-types';

export default function PageHeading({ data }) {
  return (
    <h1 className="text-center uppercase leading-none my-8">
      <span className="block text-[10vw] lg:text-8xl font-black pt-[1.5em]">
        {data.name}
      </span>
      <span className="sr-only"> - </span>
      <span className="block text-[5vw] lg:text-5xl mb-[1em]">
        {data.subtitle}
      </span>
    </h1>
  );
}

PageHeading.propTypes = {
  data: PropTypes.object.isRequired,
};
