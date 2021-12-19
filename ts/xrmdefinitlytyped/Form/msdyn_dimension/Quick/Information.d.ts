declare namespace Form.msdyn_dimension.Quick {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_applicabletocost"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_applicabletopurchase"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_applicabletosales"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_costpriority"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_purchasepriority"): Xrm.NumberAttribute;
      get(name: "msdyn_salespriority"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_applicabletocost"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_applicabletopurchase"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_applicabletosales"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_costpriority"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_purchasepriority"): Xrm.NumberControl;
      get(name: "msdyn_salespriority"): Xrm.NumberControl;
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
    getAttribute(attributeName: "msdyn_applicabletocost"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_applicabletopurchase"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_applicabletosales"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_costpriority"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_purchasepriority"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_salespriority"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_applicabletocost"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_applicabletopurchase"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_applicabletosales"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_costpriority"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_purchasepriority"): Xrm.NumberControl;
    getControl(controlName: "msdyn_salespriority"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
