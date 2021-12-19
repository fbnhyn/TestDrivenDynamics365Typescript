declare namespace Form.msfp_alertrule.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "msfp_expression"): Xrm.Attribute<string>;
      get(name: "msfp_name"): Xrm.Attribute<string>;
      get(name: "msfp_project"): Xrm.LookupAttribute<"msfp_project">;
      get(name: "msfp_satisfactionmetric"): Xrm.LookupAttribute<"msfp_satisfactionmetric">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "createdon"): Xrm.DateControl;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "msfp_expression"): Xrm.StringControl;
      get(name: "msfp_name"): Xrm.StringControl;
      get(name: "msfp_project"): Xrm.LookupControl<"msfp_project">;
      get(name: "msfp_satisfactionmetric"): Xrm.LookupControl<"msfp_satisfactionmetric">;
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
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msfp_expression"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msfp_project"): Xrm.LookupAttribute<"msfp_project">;
    getAttribute(attributeName: "msfp_satisfactionmetric"): Xrm.LookupAttribute<"msfp_satisfactionmetric">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "msfp_expression"): Xrm.StringControl;
    getControl(controlName: "msfp_name"): Xrm.StringControl;
    getControl(controlName: "msfp_project"): Xrm.LookupControl<"msfp_project">;
    getControl(controlName: "msfp_satisfactionmetric"): Xrm.LookupControl<"msfp_satisfactionmetric">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
