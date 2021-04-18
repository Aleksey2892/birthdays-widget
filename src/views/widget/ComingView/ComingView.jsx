import React, { useEffect, useReducer, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { widgetOperations } from '../../../app/widget';
import {
  getLoadingStatus,
  getBirthdaysComingList,
} from '../../../app/widget/widgetSelectors.js';
import Container from '../../../components/Container';
import UsersList from '../../../components/UsersList';
import Loader from '../../../components/Loader';
import reducer from '../widgetViewsReducer.js';
import s from '../widgetViews.module.scss';

export default function ComingView() {
  const isLoading = useSelector(getLoadingStatus);
  const users = useSelector(getBirthdaysComingList);
  const usersEndRef = useRef(null);
  const [state, setState] = useReducer(reducer, {
    slicedUsers: [],
    moreCounter: 3,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(widgetOperations.getComingBirthdays());
  }, [dispatch]);

  useEffect(() => {
    if (users.length > 0) {
      setState({
        type: 'firstLoad',
        users: users.slice(0, 3),
        counter: 3,
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
      counter: 3,
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
