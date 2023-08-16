import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => (
    <section className="statistics">
    {title && <h2 className="title">{title}</h2>}

    <ul className="stat-list">
      {stats.map(stat => (
        <li key={stat.id} className="item">
          <span className="label">{stat.label} </span>
          <span className="percentage">{stat.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};