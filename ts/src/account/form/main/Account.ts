import { DataService } from "../../DataServcie";

export class Account {
  form: Form.account.Main.Account;
  constructor(form: Form.account.Main.Account) {
    this.form = form;
  }
  onload() {
    this.showName();
    this.showNameWithApiCall();
  }
  showName() {
    let ctrl = this.form.getControl("name");
    const value = ctrl.getAttribute().getValue();
    ctrl.setVisible(value != "");
  }
  async showNameWithApiCall() {
    let ctrl = this.form.getControl("name");
    const account = await DataService.GetById(this.form.data.entity.getId());
    ctrl.setVisible(account.name != "");
  }
}
