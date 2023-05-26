import SectionHeading from "./SectionHeading";
import Item from "./Item";

export default function Items({title, items}) {

  return (
    <>
      <SectionHeading title={title} />
      <dl className="border-t border-neutral-900">
        {items.items.map((item) => {
          return <Item key={item.sys.id} item={item.fields} />
        })}
      </dl>
    </>
  )
}
