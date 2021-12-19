declare namespace Form.msdyn_expensecategory.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_expensecategoryuid"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
      get(name: "msdyn_expensetype"): Xrm.OptionSetAttribute<msdyn_expensetypes>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_receiptrequired"): Xrm.OptionSetAttribute<msdyn_expensecategorybehavior>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_expensecategoryuid"): Xrm.LookupControl<"msdyn_transactioncategory">;
      get(name: "msdyn_expensetype"): Xrm.OptionSetControl<msdyn_expensetypes>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_receiptrequired"): Xrm.OptionSetControl<msdyn_expensecategorybehavior>;
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
    getAttribute(attributeName: "msdyn_expensecategoryuid"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
    getAttribute(attributeName: "msdyn_expensetype"): Xrm.OptionSetAttribute<msdyn_expensetypes>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_receiptrequired"): Xrm.OptionSetAttribute<msdyn_expensecategorybehavior>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_expensecategoryuid"): Xrm.LookupControl<"msdyn_transactioncategory">;
    getControl(controlName: "msdyn_expensetype"): Xrm.OptionSetControl<msdyn_expensetypes>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_receiptrequired"): Xrm.OptionSetControl<msdyn_expensecategorybehavior>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
