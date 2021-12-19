declare namespace Form.msdyn_agreementbookingdate.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
      get(name: "msdyn_bookingdate"): Xrm.DateAttribute;
      get(name: "msdyn_bookingsetup"): Xrm.LookupAttribute<"msdyn_agreementbookingsetup">;
      get(name: "msdyn_earliestdate"): Xrm.DateAttribute;
      get(name: "msdyn_latestdate"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_resource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_status"): Xrm.OptionSetAttribute<msdyn_agreementbookingstatus>;
      get(name: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_agreementbookingdate_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_agreementbookingdate_statecode>;
      get(name: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
      get(name: "msdyn_bookingdate"): Xrm.DateControl;
      get(name: "msdyn_bookingsetup"): Xrm.LookupControl<"msdyn_agreementbookingsetup">;
      get(name: "msdyn_earliestdate"): Xrm.DateControl;
      get(name: "msdyn_latestdate"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_resource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_status"): Xrm.OptionSetControl<msdyn_agreementbookingstatus>;
      get(name: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
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
    getAttribute(attributeName: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
    getAttribute(attributeName: "msdyn_bookingdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_bookingsetup"): Xrm.LookupAttribute<"msdyn_agreementbookingsetup">;
    getAttribute(attributeName: "msdyn_earliestdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_latestdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_resource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_status"): Xrm.OptionSetAttribute<msdyn_agreementbookingstatus>;
    getAttribute(attributeName: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_agreementbookingdate_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_agreementbookingdate_statecode>;
    getControl(controlName: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
    getControl(controlName: "msdyn_bookingdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_bookingsetup"): Xrm.LookupControl<"msdyn_agreementbookingsetup">;
    getControl(controlName: "msdyn_earliestdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_latestdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_resource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_status"): Xrm.OptionSetControl<msdyn_agreementbookingstatus>;
    getControl(controlName: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
