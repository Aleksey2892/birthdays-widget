import React from 'react';
import { useSelector } from 'react-redux';
import { widgetOperations } from '../../app/widget';

export default function Today() {
  const users = useSelector(state => state.widget.birthdaysToday);
  const baseURL = widgetOperations.axiosBaseUrl;

  return (
    <div>
      {users.map(user => {
        return (
          <li key={user.id}>
            <img src={`${baseURL}${user.avatarUrl}`} alt={user.name} />
            <p>{user.name}</p>
            <p>{user.jobTitle}</p>
            <p>{user.birthday}</p>
          </li>
        );
      })}
    </div>
  );
}
