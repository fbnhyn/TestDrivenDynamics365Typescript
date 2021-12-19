declare namespace Form.msdyn_ocfbapplication.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_fbapplicationid"): Xrm.Attribute<string>;
      get(name: "msdyn_fbapplicationsecret"): Xrm.Attribute<string>;
      get(name: "msdyn_fbcallbackuri"): Xrm.Attribute<string>;
      get(name: "msdyn_fbverifytoken"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "FacebookPages"): Xrm.SubGridControl<"msdyn_ocfbpage">;
      get(name: "msdyn_fbapplicationid"): Xrm.StringControl;
      get(name: "msdyn_fbapplicationsecret"): Xrm.StringControl;
      get(name: "msdyn_fbcallbackuri"): Xrm.StringControl;
      get(name: "msdyn_fbverifytoken"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_fbapplicationid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_fbapplicationsecret"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_fbcallbackuri"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_fbverifytoken"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "FacebookPages"): Xrm.SubGridControl<"msdyn_ocfbpage">;
    getControl(controlName: "msdyn_fbapplicationid"): Xrm.StringControl;
    getControl(controlName: "msdyn_fbapplicationsecret"): Xrm.StringControl;
    getControl(controlName: "msdyn_fbcallbackuri"): Xrm.StringControl;
    getControl(controlName: "msdyn_fbverifytoken"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
