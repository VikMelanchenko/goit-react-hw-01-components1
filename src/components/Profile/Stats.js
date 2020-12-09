import React from 'react';

import s from './StatList.module.scss';

const Stats = ({ followers, views, likes }) => {
  return (
    <ul className={s.statList}>
      <li className={s.statItem}>
        <span className={s.lable}>Followers</span>
        <span className={s.quantity}>{followers}</span>
      </li>
      <li className={s.statItem}>
        <span className={s.lable}>Views</span>
        <span className={s.quantity}>{views}</span>
      </li>
      <li className={s.statItem}>
        <span className={s.lable}>Likes</span>
        <span className={s.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

export default Stats;
