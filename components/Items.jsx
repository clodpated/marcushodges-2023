import PropTypes from 'prop-types';
import SectionHeading from './SectionHeading';
import Item from './Item';

export default function Items({ model, items }) {
  return (
    <>
      <SectionHeading title={model.description} />
      <dl className="border-t border-neutral-900">
        {items.map((item) => {
          return <Item key={item.sys.id} item={item.fields} model={model} />;
        })}
      </dl>
    </>
  );
}

Items.propTypes = {
  model: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};
