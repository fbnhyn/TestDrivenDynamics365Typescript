declare namespace Form.msdyn_aibdatasetfile.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_aibdatasetid"): Xrm.LookupAttribute<"msdyn_aibdataset">;
      get(name: "msdyn_aibfileid"): Xrm.LookupAttribute<"msdyn_aibfile">;
      get(name: "msdyn_lastmodifieddate"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Date_and time_1"): Xrm.DateControl;
      get(name: "Lookup_1"): Xrm.LookupControl<"msdyn_aibdataset">;
      get(name: "Lookup_2"): Xrm.LookupControl<"msdyn_aibfile">;
      get(name: "Single-line_text_1"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_aibdatasetid"): Xrm.LookupAttribute<"msdyn_aibdataset">;
    getAttribute(attributeName: "msdyn_aibfileid"): Xrm.LookupAttribute<"msdyn_aibfile">;
    getAttribute(attributeName: "msdyn_lastmodifieddate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Date_and time_1"): Xrm.DateControl;
    getControl(controlName: "Lookup_1"): Xrm.LookupControl<"msdyn_aibdataset">;
    getControl(controlName: "Lookup_2"): Xrm.LookupControl<"msdyn_aibfile">;
    getControl(controlName: "Single-line_text_1"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
