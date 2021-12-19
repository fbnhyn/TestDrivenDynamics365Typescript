declare namespace Form.msdyn_bookingjournal.Main {
  namespace Information {
    namespace Tabs {
      interface f1tab_journalDetails extends Xrm.SectionCollectionBase {
        get(name: "f1tab_journalDetails_section_2"): Xrm.PageSection;
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_additionalcost"): Xrm.NumberAttribute;
      get(name: "msdyn_billable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_booking"): Xrm.LookupAttribute<"bookableresourcebooking">;
      get(name: "msdyn_duration"): Xrm.NumberAttribute;
      get(name: "msdyn_endtime"): Xrm.DateAttribute;
      get(name: "msdyn_journaltype"): Xrm.OptionSetAttribute<msdyn_bookingjournaltype>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_paytype"): Xrm.LookupAttribute<"msdyn_resourcepaytype">;
      get(name: "msdyn_starttime"): Xrm.DateAttribute;
      get(name: "msdyn_totalcost"): Xrm.NumberAttribute;
      get(name: "msdyn_unitcost"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_bookingjournal_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_bookingjournal_statecode>;
      get(name: "msdyn_additionalcost"): Xrm.NumberControl;
      get(name: "msdyn_billable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_booking"): Xrm.LookupControl<"bookableresourcebooking">;
      get(name: "msdyn_duration"): Xrm.NumberControl;
      get(name: "msdyn_endtime"): Xrm.DateControl;
      get(name: "msdyn_journaltype"): Xrm.OptionSetControl<msdyn_bookingjournaltype>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_paytype"): Xrm.LookupControl<"msdyn_resourcepaytype">;
      get(name: "msdyn_starttime"): Xrm.DateControl;
      get(name: "msdyn_totalcost"): Xrm.NumberControl;
      get(name: "msdyn_unitcost"): Xrm.NumberControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "f1tab_journalDetails"): Xrm.PageTab<Tabs.f1tab_journalDetails>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_additionalcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_billable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_booking"): Xrm.LookupAttribute<"bookableresourcebooking">;
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_endtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_journaltype"): Xrm.OptionSetAttribute<msdyn_bookingjournaltype>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_paytype"): Xrm.LookupAttribute<"msdyn_resourcepaytype">;
    getAttribute(attributeName: "msdyn_starttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_totalcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_unitcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_bookingjournal_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_bookingjournal_statecode>;
    getControl(controlName: "msdyn_additionalcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_billable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_booking"): Xrm.LookupControl<"bookableresourcebooking">;
    getControl(controlName: "msdyn_duration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_endtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_journaltype"): Xrm.OptionSetControl<msdyn_bookingjournaltype>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_paytype"): Xrm.LookupControl<"msdyn_resourcepaytype">;
    getControl(controlName: "msdyn_starttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_totalcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_unitcost"): Xrm.NumberControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
