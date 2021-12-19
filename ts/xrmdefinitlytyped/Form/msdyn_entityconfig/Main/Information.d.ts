declare namespace Form.msdyn_entityconfig.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "msdyn_entity"): Xrm.Attribute<string>;
      get(name: "msdyn_entitysetname"): Xrm.Attribute<string>;
      get(name: "msdyn_liveworkstreamid"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
      get(name: "msdyn_relationshipname"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_createdon"): Xrm.DateControl;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_entity"): Xrm.StringControl;
      get(name: "msdyn_entitysetname"): Xrm.StringControl;
      get(name: "msdyn_liveworkstreamid"): Xrm.LookupControl<"msdyn_liveworkstream">;
      get(name: "msdyn_relationshipname"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_entity"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_entitysetname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_liveworkstreamid"): Xrm.LookupAttribute<"msdyn_liveworkstream">;
    getAttribute(attributeName: "msdyn_relationshipname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_createdon"): Xrm.DateControl;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_entity"): Xrm.StringControl;
    getControl(controlName: "msdyn_entitysetname"): Xrm.StringControl;
    getControl(controlName: "msdyn_liveworkstreamid"): Xrm.LookupControl<"msdyn_liveworkstream">;
    getControl(controlName: "msdyn_relationshipname"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
