import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import datesHelper from './widgetHelpers/datesHelper';
import updateUsersArr from './widgetHelpers/updateUsersArr';

axios.defaults.baseURL = 'http://test.anromsocial.com';
export const baseUrl = axios.defaults.baseURL;

const getRecentBirthdays = createAsyncThunk(
  'widget/getRecentBirthdays',
  async (_, { rejectWithValue }) => {
    const { getRecentDates } = datesHelper;

    try {
      const {
        data: { users },
      } = await axios(`/api/birthdays?${getRecentDates()}`);

      if (users.length > 0) {
        const updatedUsersArr = updateUsersArr.recentDates(users);

        return updatedUsersArr;
      }
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const getTodayBirthdays = createAsyncThunk(
  'widget/getTodayBirthdays',
  async (_, { rejectWithValue }) => {
    const { getCurrentDates } = datesHelper;

    try {
      const {
        data: { users },
      } = await axios(`/api/birthdays?${getCurrentDates()}`);

      if (users.length > 0) {
        const updatedUsersArr = updateUsersArr.todayDates(users);

        return updatedUsersArr;
      }
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const getComingBirthdays = createAsyncThunk(
  'widget/getComingBirthdays',
  async (_, { rejectWithValue }) => {
    const { getComingDates } = datesHelper;

    try {
      const {
        data: { users },
      } = await axios(`/api/birthdays?${getComingDates()}`);

      if (users.length > 0) {
        const updatedUsersArr = updateUsersArr.comingDates(users);

        return updatedUsersArr;
      }
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const widgetOperations = {
  getRecentBirthdays,
  getTodayBirthdays,
  getComingBirthdays,
};
export default widgetOperations;
