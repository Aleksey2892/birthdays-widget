import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://test.anromsocial.com';
const axiosBaseUrl = axios.defaults.baseURL;

const getRecentBirthdays = createAsyncThunk();
// 'widget/getTodayBirthdays',
// async (_, { rejectWithValue }) => {
//   try {
//     const {
//       data: { users },
//     } = await axios(`/api/birthdays${'?dateFrom=04.17&dateTo=04.17'}`);
//     return users;
//   } catch (error) {
//     rejectWithValue(error);
//   }
// },

const getTodayBirthdays = createAsyncThunk(
  'widget/getTodayBirthdays',
  async (_, { rejectWithValue }) => {
    try {
      const {
        data: { users },
      } = await axios(`/api/birthdays${'?dateFrom=04.17&dateTo=04.17'}`);
      return users;
    } catch (error) {
      rejectWithValue(error);
    }
  },
);

const getCurrentBirthdays = createAsyncThunk();
// 'widget/getTodayBirthdays',
// async (_, { rejectWithValue }) => {
//   try {
//     const {
//       data: { users },
//     } = await axios(`/api/birthdays${'?dateFrom=04.17&dateTo=04.17'}`);
//     return users;
//   } catch (error) {
//     rejectWithValue(error);
//   }
// },

const widgetOperations = {
  axiosBaseUrl,

  getRecentBirthdays,
  getTodayBirthdays,
  getCurrentBirthdays,
};
export default widgetOperations;
