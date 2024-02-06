import { Item } from './Item';

export const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((item) => {
        return <Item key={item.id} {...item} />;
      })}
    </div>
  );
};
