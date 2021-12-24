import { Fbn as _fbn } from "./DataServcie";

export namespace Fbn.Account {
  export namespace FormInjection {
    export namespace Main {
      export function inject(form: Form.account.Main.Account) {
        new Businessrules(form).onload();
      }
    }
  }
  export class Businessrules {
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
      ctrl.setVisible(value != '');
    }
    async showNameWithApiCall() {
      let ctrl = this.form.getControl("name");
      const account = await _fbn.Account.DataService.GetById(this.form.data.entity.getId());
      ctrl.setVisible(account.name != '');
    }
  }
}