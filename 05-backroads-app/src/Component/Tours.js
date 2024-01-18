import { TOURS_DATA } from '../data/tours.data';
import Title from './Title';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />
      <div className="section-center featured-center">
        {TOURS_DATA.map((item) => {
          const { id, img, date, title, paragraph, icon, location, days, amount } = item;
          return (
            <article className="tour-card" key={id}>
              <div className="tour-img-container">
                <img src={img} className="tour-img" alt="" />
                <p className="tour-date">{date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{title}</h4>
                </div>
                <p>{paragraph}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className={icon}></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{days}</p>
                  <p>from ${amount}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Tours;
