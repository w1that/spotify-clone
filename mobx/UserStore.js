import { action, makeObservable, observable } from "mobx";

export class UserStore {
  currentUserId = null; //default user is not logged in.

  constructor() {
    makeObservable(this, {
      currentUserId: observable,
      setCurrentUserId: action,
      logOut: action,
    });
  }

  setCurrentUserId(user) {
    this.currentUserId = user;
  }

  logOut() {
    this.currentUserId = {};
  }
}

const userStore = new UserStore();
export default userStore;
