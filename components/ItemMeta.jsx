import PropTypes from 'prop-types';

export default function ItemMeta({ title, metadata }) {
  const joinedData = metadata.join(', ');

  return (
    <div>
      <h3>{title}</h3>
      <p>{joinedData}</p>
    </div>
  );
}

ItemMeta.propTypes = {
  title: PropTypes.string.isRequired,
  metadata: PropTypes.array.isRequired,
};
