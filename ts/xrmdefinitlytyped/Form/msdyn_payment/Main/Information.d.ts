declare namespace Form.msdyn_payment.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_account"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_amount"): Xrm.NumberAttribute;
      get(name: "msdyn_checknumber"): Xrm.Attribute<string>;
      get(name: "msdyn_date"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_paymentmethod"): Xrm.LookupAttribute<"msdyn_paymentmethod">;
      get(name: "msdyn_paymenttype"): Xrm.OptionSetAttribute<msdyn_paymenttype>;
      get(name: "msdyn_unappliedamount"): Xrm.NumberAttribute;
      get(name: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_payment_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_payment_statecode>;
      get(name: "msdyn_account"): Xrm.LookupControl<"account">;
      get(name: "msdyn_amount"): Xrm.NumberControl;
      get(name: "msdyn_checknumber"): Xrm.StringControl;
      get(name: "msdyn_date"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_paymentmethod"): Xrm.LookupControl<"msdyn_paymentmethod">;
      get(name: "msdyn_paymenttype"): Xrm.OptionSetControl<msdyn_paymenttype>;
      get(name: "msdyn_unappliedamount"): Xrm.NumberControl;
      get(name: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_account"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_checknumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_date"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_paymentmethod"): Xrm.LookupAttribute<"msdyn_paymentmethod">;
    getAttribute(attributeName: "msdyn_paymenttype"): Xrm.OptionSetAttribute<msdyn_paymenttype>;
    getAttribute(attributeName: "msdyn_unappliedamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_payment_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_payment_statecode>;
    getControl(controlName: "msdyn_account"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_amount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_checknumber"): Xrm.StringControl;
    getControl(controlName: "msdyn_date"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_paymentmethod"): Xrm.LookupControl<"msdyn_paymentmethod">;
    getControl(controlName: "msdyn_paymenttype"): Xrm.OptionSetControl<msdyn_paymenttype>;
    getControl(controlName: "msdyn_unappliedamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
