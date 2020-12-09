import React from 'react';

import StatisticList from './StatisticList';

import PropTypes from 'prop-types';

import s from './Statistics.module.scss';

const Statictics = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <StatisticList stats={stats} />
    </section>
  );
};

Statictics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statictics;
