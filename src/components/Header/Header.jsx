import React from 'react';
import { NavLink } from 'react-router-dom';
import precentBox from '../../assets/precent-box.png';
import s from './Header.module.scss';

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.imgWrapper}>
        <img src={precentBox} alt={'precent box'} className={s.headerImg} />
      </div>
      <p className={s.headerTitle}>Birthdays</p>

      <nav className={s.nav}>
        <NavLink
          to={'/recent'}
          className={s.recentLink}
          activeClassName={s.recentActiveLink}
          exact
        >
          Recent <span className={s.spanLink}>day's</span>
        </NavLink>

        <NavLink
          to={'/today'}
          className={s.todayLink}
          activeClassName={s.todayActiveLink}
          exact
        >
          Today
        </NavLink>

        <NavLink
          to={'/coming'}
          className={s.comingLink}
          activeClassName={s.comingActiveLink}
          exact
        >
          Coming <span className={s.spanLink}>dates</span>
        </NavLink>
      </nav>
    </header>
  );
}
