declare namespace Form.msdyn_analytics.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_ispaasenabled"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_ocanalyticspreviewenable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_title"): Xrm.Attribute<string>;
      get(name: "msdyn_workspaceid"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_ispaasenabled"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_ocanalyticspreviewenable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_saasinfotext"): Xrm.BaseControl;
      get(name: "msdyn_title"): Xrm.StringControl;
      get(name: "msdyn_workspaceid"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_ispaasenabled"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_ocanalyticspreviewenable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_workspaceid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_ispaasenabled"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_ocanalyticspreviewenable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_saasinfotext"): Xrm.BaseControl;
    getControl(controlName: "msdyn_title"): Xrm.StringControl;
    getControl(controlName: "msdyn_workspaceid"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
