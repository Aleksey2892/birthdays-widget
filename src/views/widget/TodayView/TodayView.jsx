import React, { useEffect, useReducer, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { widgetOperations } from '../../../app/widget';
import {
  getLoadingStatus,
  getBirhdaysTodayList,
} from '../../../app/widget/widgetSelectors.js';
import Container from '../../../components/Container';
import UsersList from '../../../components/UsersList';
import Loader from '../../../components/Loader';
import reducer from '../widgetViewsReducer.js';
import s from '../widgetViews.module.scss';

export default function TodayView() {
  const isLoading = useSelector(getLoadingStatus);
  const users = useSelector(getBirhdaysTodayList);
  const usersEndRef = useRef(null);
  const [state, setState] = useReducer(reducer, {
    slicedUsers: [],
    moreCounter: 6,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(widgetOperations.getTodayBirthdays());
  }, [dispatch]);

  useEffect(() => {
    if (users.length > 0) {
      setState({
        type: 'firstLoad',
        users: users.slice(0, 6),
        counter: 6,
        allUsers: users,
      });
    }
  }, [users]);

  useEffect(() => {
    usersEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [state.slicedUsers]);

  const buttonMoreHandler = () => {
    setState({
      type: 'slicedUsers',
      users: users.slice(0, state.moreCounter),
      counter: 6,
      allUsers: users,
    });
  };

  return (
    <Container>
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <UsersList users={state.slicedUsers} />

          {users.length > state.slicedUsers.length && (
            <button onClick={buttonMoreHandler} className={s.btnMore}>
              load more...
            </button>
          )}
        </>
      )}

      {!isLoading && users.length === 0 && (
        <div className={s.noData}>Sorry, but now no data for display</div>
      )}

      <div ref={usersEndRef}></div>
    </Container>
  );
}
