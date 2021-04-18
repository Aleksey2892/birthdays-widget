import datesHelper from './datesHelper';
import { baseUrl } from '../widgetOperations';

const updateUsersArr = {
  formatDate: datesHelper.formatDate,

  defaultSort(arr) {
    return arr.sort((a, b) => a - b);
  },

  sortByName(usersArr) {
    return usersArr.sort((a, b) => {
      const nameA = a.name.toLowerCase();
      const nameB = b.name.toLowerCase();

      if (a.birthday === b.birthday) {
        return nameA < nameB ? -1 : 1;
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
    const sortUsersByName = this.sortByName(updatedUsersList);
    return sortUsersByName;
  },

  todayDates(usersArr) {
    const updatedUsersList = this.updateUsersData(usersArr);
    return updatedUsersList;
  },

  comingDates(usersArr) {
    const updatedUsersList = this.updateUsersData(usersArr);
    const sortUsersByName = this.sortByName(updatedUsersList);
    return sortUsersByName;
  },
};
export default updateUsersArr;
