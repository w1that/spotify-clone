import { action, makeObservable, observable } from "mobx";

export class UserStore {
  currentUserId = -1; //default user is not logged in.

  constructor() {
    makeObservable(this, {
      currentUserId: observable,
      setCurrentUserId: action,
      logOut: action,
    });
  }

  setCurrentUserId(id) {
    this.currentUserId = id;
  }

  logOut() {
    this.currentUserId = -1;
  }
}

const userStore = new UserStore();
export default userStore;
