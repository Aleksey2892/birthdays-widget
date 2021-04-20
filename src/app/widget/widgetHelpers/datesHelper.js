import moment from 'moment';

const formatDate = date => {
  return { birthday: moment(date).format('DD MMMM') };
};

const getRecentDates = () => {
  const recent = {
    MM: moment().subtract(14, 'days').format('MM'),
    DD: moment().subtract(14, 'days').format('DD'),
  };
  const current = {
    MM: moment().subtract(1, 'days').format('MM'),
    DD: moment().subtract(1, 'days').format('DD'),
  };

  return `dateFrom=${recent.MM}.${recent.DD}&dateTo=${current.MM}.${current.DD}`;
};

const getCurrentDates = () => {
  const current = {
    MM: moment().format('MM'),
    DD: moment().format('DD'),

    MMleapY: moment().add(1, 'days').format('MM'),
    DDleapY: moment().add(1, 'days').format('DD'),
  };

  const currentMMDD = moment().format('MM-DD');
  const currentYear = moment().format('YYYY');
  const isLeapYear = moment([currentYear]).isLeapYear();

  //! If 'isLeapYear' === true and
  //! current date === 02.28 - used this return
  if (isLeapYear && currentMMDD === '02-28') {
    return `dateFrom=${current.MM}.${current.DD}&dateTo=${current.MMleapY}.${current.DDleapY}`;
  }

  //! default return
  return `dateFrom=${current.MM}.${current.DD}&dateTo=${current.MM}.${current.DD}`;
};

const getComingDates = () => {
  const current = {
    MM: moment().add(1, 'days').format('MM'),
    DD: moment().add(1, 'days').format('DD'),
  };
  const upcoming = {
    MM: moment().add(14, 'days').format('MM'),
    DD: moment().add(14, 'days').format('DD'),
  };

  return `dateFrom=${current.MM}.${current.DD}&dateTo=${upcoming.MM}.${upcoming.DD}`;
};

const datesHelper = {
  formatDate,
  getRecentDates,
  getCurrentDates,
  getComingDates,
};
export default datesHelper;
