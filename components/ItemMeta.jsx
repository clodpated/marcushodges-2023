import PropTypes from 'prop-types';

export default function ItemMeta({ title, metadata }) {
  const joinedData = metadata.join(', ');

  return (
    <div className="flex-1 flex-shrink-0">
      <h3 className="border-b border-neutral-900 text-lg font-semibold mb-1 uppercase">
        {title}
      </h3>
      <p className="text-xl mb-[1em]">{joinedData}</p>
    </div>
  );
}

ItemMeta.propTypes = {
  title: PropTypes.string.isRequired,
  metadata: PropTypes.array.isRequired,
};
