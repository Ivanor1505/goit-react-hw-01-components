import PropTypes from 'prop-types';
import {StatisticsBoard, StatList, StatListItem} from './Statistics.styled'

export const Statistics = ({ title, stats }) => (
    <StatisticsBoard>
    {title && <h2 className="title">{title}</h2>}

    <StatList>
      {stats.map(stat => (
        <StatListItem key={stat.id}>
          <span className="label">{stat.label} </span>
          <span className="percentage">{stat.percentage}%</span>
        </StatListItem>
      ))}
    </StatList>
  </StatisticsBoard>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
};