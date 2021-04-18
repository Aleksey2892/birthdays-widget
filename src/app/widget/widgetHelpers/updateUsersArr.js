import datesHelper from './datesHelper';
import { baseUrl } from '../widgetOperations';

const updateUsersArr = {
  formatDate: datesHelper.formatDate,

  defaultSort(arr) {
    return arr.sort((a, b) => a - b);
  },

  sortBySurname(usersArr) {
    return usersArr.sort((a, b) => {
      const surnameA = a.name.toLowerCase().split(' ');
      const surnameB = b.name.toLowerCase().split(' ');

      if (a.birthday === b.birthday) {
        return surnameA[1] < surnameB[1] ? -1 : 1;
      }

      return 0;
    });
  },

  updateUsersData(usersArr) {
    return usersArr.map(user => {
      return {
        ...user,
        ...this.formatDate(user.birthday),
        avatarUrl: baseUrl + user.avatarUrl,
      };
    });
  },

  recentDates(usersArr) {
    const sortUsers = this.defaultSort(usersArr);
    const updatedUsersList = this.updateUsersData(sortUsers);
    const sortUsersBySurname = this.sortBySurname(updatedUsersList);
    return sortUsersBySurname;
  },

  todayDates(usersArr) {
    const updatedUsersList = this.updateUsersData(usersArr);
    const sortUsersBySurname = this.sortBySurname(updatedUsersList);
    return sortUsersBySurname;
  },

  comingDates(usersArr) {
    const updatedUsersList = this.updateUsersData(usersArr);
    const sortUsersBySurname = this.sortBySurname(updatedUsersList);
    return sortUsersBySurname;
  },
};
export default updateUsersArr;
