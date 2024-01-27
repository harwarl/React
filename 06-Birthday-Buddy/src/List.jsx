import People from './People';
const PeopleLists = ({ people }) => {
  return (
    <section>
      {people.map((item) => {
        return <People key={item.id} {...item} />;
      })}
    </section>
  );
};

export default PeopleLists;
