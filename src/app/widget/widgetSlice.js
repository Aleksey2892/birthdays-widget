import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { widgetOperations } from './';

export const birthdaysToday = createSlice({
  name: 'widget',
  initialState: [],
  extraReducers: {
    [widgetOperations.getTodayBirthdays.fulfilled](_state, { payload }) {
      return payload;
    },
  },
});

export const birthdaysRecent = createSlice({
  name: 'widget',
  initialState: [],
  extraReducers: {
    [widgetOperations.getTodayBirthdays.fulfilled](_state, { payload }) {
      return payload;
    },
  },
});

export const birthdaysComing = createSlice({
  name: 'widget',
  initialState: [],
  extraReducers: {
    [widgetOperations.getTodayBirthdays.fulfilled](_state, { payload }) {
      return payload;
    },
  },
});

export default combineReducers({
  birthdaysRecent: birthdaysRecent.reducer,
  birthdaysToday: birthdaysToday.reducer,
  birthdaysComing: birthdaysComing.reducer,
});
