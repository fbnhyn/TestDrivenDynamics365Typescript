declare namespace Form.msdyn_attributevalue.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_parentattribute"): Xrm.LookupAttribute<"msdyn_attribute">;
      get(name: "msdyn_reviewstatus"): Xrm.OptionSetAttribute<msdyn_reviewstatus>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Sellers"): Xrm.SubGridControl<"systemuser">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_parentattribute"): Xrm.LookupControl<"msdyn_attribute">;
      get(name: "msdyn_reviewstatus"): Xrm.OptionSetControl<msdyn_reviewstatus>;
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
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_parentattribute"): Xrm.LookupAttribute<"msdyn_attribute">;
    getAttribute(attributeName: "msdyn_reviewstatus"): Xrm.OptionSetAttribute<msdyn_reviewstatus>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Sellers"): Xrm.SubGridControl<"systemuser">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_parentattribute"): Xrm.LookupControl<"msdyn_attribute">;
    getControl(controlName: "msdyn_reviewstatus"): Xrm.OptionSetControl<msdyn_reviewstatus>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
