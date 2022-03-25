import { action, makeAutoObservable, makeObservable, observable } from "mobx";

export class MenuItemStore {
  selectedMenuItemId = 0; //default ana sayfa

  constructor() {
    makeObservable(this,{
      selectedMenuItemId:observable,
      setSelectedMenuItemId:action,
      getSelectedMenuItemId:action
    });
  }

  setSelectedMenuItemId(id) {
    this.selectedMenuItemId = id;
    console.log(this.selectedMenuItemId)
  }

  getSelectedMenuItemId(){
    return this.selectedMenuItemId
  }
}

const menuItemStore = new MenuItemStore();
export default menuItemStore;