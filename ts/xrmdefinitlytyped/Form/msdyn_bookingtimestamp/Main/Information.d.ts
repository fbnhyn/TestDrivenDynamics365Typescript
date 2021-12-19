declare namespace Form.msdyn_bookingtimestamp.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_booking"): Xrm.LookupAttribute<"bookableresourcebooking">;
      get(name: "msdyn_bookingstatus"): Xrm.LookupAttribute<"bookingstatus">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_bookingsystemstatus>;
      get(name: "msdyn_timestamptime"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_bookingtimestamp_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_bookingtimestamp_statecode>;
      get(name: "msdyn_booking"): Xrm.LookupControl<"bookableresourcebooking">;
      get(name: "msdyn_bookingstatus"): Xrm.LookupControl<"bookingstatus">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_bookingsystemstatus>;
      get(name: "msdyn_timestamptime"): Xrm.DateControl;
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
    getAttribute(attributeName: "msdyn_booking"): Xrm.LookupAttribute<"bookableresourcebooking">;
    getAttribute(attributeName: "msdyn_bookingstatus"): Xrm.LookupAttribute<"bookingstatus">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_bookingsystemstatus>;
    getAttribute(attributeName: "msdyn_timestamptime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_bookingtimestamp_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_bookingtimestamp_statecode>;
    getControl(controlName: "msdyn_booking"): Xrm.LookupControl<"bookableresourcebooking">;
    getControl(controlName: "msdyn_bookingstatus"): Xrm.LookupControl<"bookingstatus">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_bookingsystemstatus>;
    getControl(controlName: "msdyn_timestamptime"): Xrm.DateControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
