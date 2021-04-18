import React from 'react';
import { nanoid } from 'nanoid';
import s from './UsersList.module.scss';

export default function UsersList({ users }) {
  return (
    <>
      {users.length > 0 && (
        <ul className={s.usersList}>
          {users.map(user => {
            return (
              <li className={s.userItem} key={nanoid()}>
                <div className={s.imgWrapper}>
                  <img
                    className={s.avatar}
                    src={user.avatarUrl}
                    alt={user.name}
                  />
                </div>

                <div className={s.userBlockInfo}>
                  <p className={s.infoName}>{user.name}</p>
                  <p className={s.infoPosition}>{user.jobTitle}</p>
                  <p className={s.infoDate}>{user.birthday}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}
