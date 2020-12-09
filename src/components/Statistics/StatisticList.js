import React from 'react';

import s from './Statistics.module.scss';

const StatisticList = ({ stats }) => {
  return (
    <ul className={s.statList}>
      {stats.map(({ id, label, percentage }) => (
        <li className={s.statItem} key={id}>
          <span className={s.label}>{label}</span>
          <span className={s.percentage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  );
};
export default StatisticList;
