import PropTypes from 'prop-types';

import { getRandomHexColor } from './getRandomHexColor';
import { List, Section, Span } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      {title && <h2 className="title">{title}</h2>}

      <List>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              className="item"
              key={id}
              style={{ backgroundColor: getRandomHexColor() }}
            >
              <Span className="label">{label}</Span>
              <Span className="percentage"> {percentage}%</Span>
            </li>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
