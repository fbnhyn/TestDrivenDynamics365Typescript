export namespace Blb.Account {
  export class Businessrules {
    form: Form.account.Main.Account;
    constructor(form: Form.account.Main.Account) {
      this.form = form;
    }
    showName() {
      let ctrl = this.form.getControl("name");
      const value = ctrl.getAttribute().getValue();
      ctrl.setVisible(value != '');
    }
  }
}