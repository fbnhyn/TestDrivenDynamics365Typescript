declare namespace Form.msdyn_roleutilization.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_role"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_targetutilpercent"): Xrm.NumberAttribute;
      get(name: "msdyn_utilpercent"): Xrm.NumberAttribute;
      get(name: "msdyn_utilpercentdiff"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_role"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_targetutilpercent"): Xrm.NumberControl;
      get(name: "msdyn_utilpercent"): Xrm.NumberControl;
      get(name: "msdyn_utilpercentdiff"): Xrm.NumberControl;
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
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_role"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_targetutilpercent"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_utilpercent"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_utilpercentdiff"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_role"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_targetutilpercent"): Xrm.NumberControl;
    getControl(controlName: "msdyn_utilpercent"): Xrm.NumberControl;
    getControl(controlName: "msdyn_utilpercentdiff"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
