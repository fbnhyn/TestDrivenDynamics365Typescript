declare namespace Form.msdyn_timeoffrequest.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_approvedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_endtime"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_resource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_starttime"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_timeoffrequest_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_timeoffrequest_statecode>;
      get(name: "msdyn_approvedby"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_endtime"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_resource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_starttime"): Xrm.DateControl;
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
    getAttribute(attributeName: "msdyn_approvedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_endtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_resource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_starttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_timeoffrequest_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_timeoffrequest_statecode>;
    getControl(controlName: "msdyn_approvedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_endtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_resource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_starttime"): Xrm.DateControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
