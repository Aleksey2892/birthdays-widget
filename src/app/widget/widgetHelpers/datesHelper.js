import moment from 'moment';

const getRecentDate = val => {
  return moment().subtract(14, 'days').format(val);
};

const getCurrentDate = val => {
  return moment().format(val);
};

const getComingDate = val => {
  return moment().add(14, 'days').format(val);
};

const formatDate = date => {
  return { birthday: moment(date).format('DD MMMM') };
};

export const datesHelper = {
  getRecentDate,
  getCurrentDate,
  getComingDate,
  formatDate,
};
export default datesHelper;
