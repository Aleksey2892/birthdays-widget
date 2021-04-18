import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit';
import { widgetOperations } from './';

export const birthdaysRecent = createSlice({
  name: 'widget',
  initialState: [],
  extraReducers: {
    [widgetOperations.getRecentBirthdays.fulfilled](_state, { payload }) {
      return [...payload];
    },
  },
});

export const birthdaysToday = createSlice({
  name: 'widget',
  initialState: [],
  extraReducers: {
    [widgetOperations.getTodayBirthdays.fulfilled](_state, { payload }) {
      return [...payload];
    },
  },
});

export const birthdaysComing = createSlice({
  name: 'widget',
  initialState: [],
  extraReducers: {
    [widgetOperations.getComingBirthdays.fulfilled](_state, { payload }) {
      return [...payload];
    },
  },
});

export const loadingStatus = createSlice({
  name: 'widget',
  initialState: false,
  extraReducers: {
    [widgetOperations.getRecentBirthdays.pending](_state, { _payload }) {
      return true;
    },
    [widgetOperations.getTodayBirthdays.pending](_state, { _payload }) {
      return true;
    },
    [widgetOperations.getComingBirthdays.pending](_state, { _payload }) {
      return true;
    },
    [widgetOperations.getRecentBirthdays.fulfilled](_state, { _payload }) {
      return false;
    },
    [widgetOperations.getTodayBirthdays.fulfilled](_state, { _payload }) {
      return false;
    },
    [widgetOperations.getComingBirthdays.fulfilled](_state, { _payload }) {
      return false;
    },
    [widgetOperations.getRecentBirthdays.rejected](_state, { _payload }) {
      return false;
    },
    [widgetOperations.getTodayBirthdays.rejected](_state, { _payload }) {
      return false;
    },
    [widgetOperations.getComingBirthdays.rejected](_state, { _payload }) {
      return false;
    },
  },
});

export const loadingError = createSlice({
  name: 'widget',
  initialState: null,
  extraReducers: {
    [widgetOperations.getRecentBirthdays.rejected](_state, { payload }) {
      return payload;
    },
    [widgetOperations.getTodayBirthdays.rejected](_state, { payload }) {
      return payload;
    },
    [widgetOperations.getComingBirthdays.rejected](_state, { payload }) {
      return payload;
    },
    [widgetOperations.getRecentBirthdays.fulfilled](_state, { _payload }) {
      return null;
    },
    [widgetOperations.getTodayBirthdays.fulfilled](_state, { _payload }) {
      return null;
    },
    [widgetOperations.getComingBirthdays.fulfilled](_state, { _payload }) {
      return null;
    },
  },
});

export default combineReducers({
  birthdaysRecent: birthdaysRecent.reducer,
  birthdaysToday: birthdaysToday.reducer,
  birthdaysComing: birthdaysComing.reducer,
  loadingStatus: loadingStatus.reducer,
  loadingError: loadingError.reducer,
});
