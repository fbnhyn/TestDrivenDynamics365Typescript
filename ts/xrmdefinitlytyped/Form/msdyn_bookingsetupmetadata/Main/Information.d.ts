declare namespace Form.msdyn_bookingsetupmetadata.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "modifiedon"): Xrm.DateAttribute;
      get(name: "msdyn_availabledurationminimumpercentage"): Xrm.NumberAttribute;
      get(name: "msdyn_bookingrelationshiplogicalname"): Xrm.Attribute<string>;
      get(name: "msdyn_bookingstatusfieldlogicalname"): Xrm.Attribute<string>;
      get(name: "msdyn_cancelbookingswhenmoving"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_defaultbookingcanceledstatus"): Xrm.LookupAttribute<"bookingstatus">;
      get(name: "msdyn_defaultbookingcommittedstatus"): Xrm.LookupAttribute<"bookingstatus">;
      get(name: "msdyn_defaultbookingduration"): Xrm.NumberAttribute;
      get(name: "msdyn_defaultrequirementactivestatus"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
      get(name: "msdyn_defaultrequirementcanceledstatus"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
      get(name: "msdyn_defaultrequirementcompletedstatus"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
      get(name: "msdyn_disablerequirementautocreation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_enablequickbook"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_entitylogicalname"): Xrm.Attribute<string>;
      get(name: "msdyn_requirementrelationshiplogicalname"): Xrm.Attribute<string>;
      get(name: "msdyn_resourceavailabilityretrievallimit"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_ScheduleAttributeMapping"): Xrm.WebResourceControl;
      get(name: "modifiedon"): Xrm.DateControl;
      get(name: "msdyn_availabledurationminimumpercentage"): Xrm.NumberControl;
      get(name: "msdyn_bookingrelationshiplogicalname"): Xrm.StringControl;
      get(name: "msdyn_bookingstatusfieldlogicalname"): Xrm.StringControl;
      get(name: "msdyn_cancelbookingswhenmoving"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_defaultbookingcanceledstatus"): Xrm.LookupControl<"bookingstatus">;
      get(name: "msdyn_defaultbookingcommittedstatus"): Xrm.LookupControl<"bookingstatus">;
      get(name: "msdyn_defaultbookingduration"): Xrm.NumberControl;
      get(name: "msdyn_defaultrequirementactivestatus"): Xrm.LookupControl<"msdyn_requirementstatus">;
      get(name: "msdyn_defaultrequirementcanceledstatus"): Xrm.LookupControl<"msdyn_requirementstatus">;
      get(name: "msdyn_defaultrequirementcompletedstatus"): Xrm.LookupControl<"msdyn_requirementstatus">;
      get(name: "msdyn_disablerequirementautocreation"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_enablequickbook"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_entitylogicalname"): Xrm.StringControl;
      get(name: "msdyn_requirementrelationshiplogicalname"): Xrm.StringControl;
      get(name: "msdyn_resourceavailabilityretrievallimit"): Xrm.NumberControl;
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
    getAttribute(attributeName: "modifiedon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_availabledurationminimumpercentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_bookingrelationshiplogicalname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_bookingstatusfieldlogicalname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_cancelbookingswhenmoving"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_defaultbookingcanceledstatus"): Xrm.LookupAttribute<"bookingstatus">;
    getAttribute(attributeName: "msdyn_defaultbookingcommittedstatus"): Xrm.LookupAttribute<"bookingstatus">;
    getAttribute(attributeName: "msdyn_defaultbookingduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_defaultrequirementactivestatus"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
    getAttribute(attributeName: "msdyn_defaultrequirementcanceledstatus"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
    getAttribute(attributeName: "msdyn_defaultrequirementcompletedstatus"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
    getAttribute(attributeName: "msdyn_disablerequirementautocreation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_enablequickbook"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_entitylogicalname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_requirementrelationshiplogicalname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_resourceavailabilityretrievallimit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_ScheduleAttributeMapping"): Xrm.WebResourceControl;
    getControl(controlName: "modifiedon"): Xrm.DateControl;
    getControl(controlName: "msdyn_availabledurationminimumpercentage"): Xrm.NumberControl;
    getControl(controlName: "msdyn_bookingrelationshiplogicalname"): Xrm.StringControl;
    getControl(controlName: "msdyn_bookingstatusfieldlogicalname"): Xrm.StringControl;
    getControl(controlName: "msdyn_cancelbookingswhenmoving"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_defaultbookingcanceledstatus"): Xrm.LookupControl<"bookingstatus">;
    getControl(controlName: "msdyn_defaultbookingcommittedstatus"): Xrm.LookupControl<"bookingstatus">;
    getControl(controlName: "msdyn_defaultbookingduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_defaultrequirementactivestatus"): Xrm.LookupControl<"msdyn_requirementstatus">;
    getControl(controlName: "msdyn_defaultrequirementcanceledstatus"): Xrm.LookupControl<"msdyn_requirementstatus">;
    getControl(controlName: "msdyn_defaultrequirementcompletedstatus"): Xrm.LookupControl<"msdyn_requirementstatus">;
    getControl(controlName: "msdyn_disablerequirementautocreation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_enablequickbook"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_entitylogicalname"): Xrm.StringControl;
    getControl(controlName: "msdyn_requirementrelationshiplogicalname"): Xrm.StringControl;
    getControl(controlName: "msdyn_resourceavailabilityretrievallimit"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
