import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import datesHelper from './widgetHelpers/datesHelper';
import updateUsersArr from './widgetHelpers/updateUsersArr';

axios.defaults.baseURL = 'http://test.anromsocial.com';
export const baseUrl = axios.defaults.baseURL;

const getRecentBirthdays = createAsyncThunk(
  'widget/getRecentBirthdays',
  async (_, { rejectWithValue }) => {
    const { getRecentDate, getCurrentDate } = datesHelper;
    const date = {
      dd: { recent: getRecentDate('DD'), current: getCurrentDate('DD') - 1 },
      mm: { recent: getRecentDate('MM'), current: getCurrentDate('MM') },
    };

    try {
      const {
        data: { users },
      } = await axios(
        `/api/birthdays?dateFrom=${date.mm.recent}.${date.dd.recent}&dateTo=${date.mm.current}.${date.dd.current}`,
      );

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
    const { getCurrentDate } = datesHelper;
    const date = {
      dd: { current: getCurrentDate('DD') },
      mm: { current: getCurrentDate('MM') },
    };

    try {
      const {
        data: { users },
      } = await axios(
        `/api/birthdays?dateFrom=${date.mm.current}.${date.dd.current}&dateTo=${date.mm.current}.${date.dd.current}`,
      );

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
    const { getCurrentDate, getComingDate } = datesHelper;
    const date = {
      dd: { current: getCurrentDate('DD') + 1, coming: getComingDate('DD') },
      mm: { current: getCurrentDate('MM'), coming: getComingDate('MM') },
    };

    try {
      const {
        data: { users },
      } = await axios(
        `/api/birthdays?dateFrom=${date.mm.current}.${date.dd.current}&dateTo=${date.mm.coming}.${date.dd.coming}`,
      );

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
