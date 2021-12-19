declare namespace Form.msdyn_resourcerequirement.Main {
  namespace Information {
    namespace Tabs {
      interface Requirement_General extends Xrm.SectionCollectionBase {
        get(name: "Requirement_Notes"): Xrm.PageSection;
        get(name: "{971e72a7-0e77-4c1e-80b9-e4eb74143e46}_section_3"): Xrm.PageSection;
        get(name: "{971e72a7-0e77-4c1e-80b9-e4eb74143e46}_section_4"): Xrm.PageSection;
        get(name: "{db0712f3-6333-4878-92c9-004903985f09}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_FieldService extends Xrm.SectionCollectionBase {
        get(name: "tab_FieldService_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_ResourceBookings extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_project extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_allocationmethod"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_allocationmethod>;
      get(name: "msdyn_calendarid"): Xrm.Attribute<string>;
      get(name: "msdyn_city"): Xrm.Attribute<string>;
      get(name: "msdyn_costprice"): Xrm.NumberAttribute;
      get(name: "msdyn_country"): Xrm.Attribute<string>;
      get(name: "msdyn_duration"): Xrm.NumberAttribute;
      get(name: "msdyn_effort"): Xrm.NumberAttribute;
      get(name: "msdyn_fromdate"): Xrm.DateAttribute;
      get(name: "msdyn_fulfilledduration"): Xrm.NumberAttribute;
      get(name: "msdyn_isprimary"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_latitude"): Xrm.NumberAttribute;
      get(name: "msdyn_longitude"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_percentage"): Xrm.NumberAttribute;
      get(name: "msdyn_pooltype"): Xrm.MultiSelectOptionSetAttribute<msdyn_pooltype>;
      get(name: "msdyn_priority"): Xrm.LookupAttribute<"msdyn_priority">;
      get(name: "msdyn_projectid"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_proposedduration"): Xrm.NumberAttribute;
      get(name: "msdyn_remainingduration"): Xrm.NumberAttribute;
      get(name: "msdyn_requeststatus"): Xrm.Attribute<string>;
      get(name: "msdyn_requirementgroupid"): Xrm.LookupAttribute<"msdyn_requirementgroup">;
      get(name: "msdyn_resourcetype"): Xrm.MultiSelectOptionSetAttribute<msdyn_bookableresourcetype>;
      get(name: "msdyn_stateorprovince"): Xrm.Attribute<string>;
      get(name: "msdyn_status"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
      get(name: "msdyn_territory"): Xrm.LookupAttribute<"territory">;
      get(name: "msdyn_timefrompromised"): Xrm.DateAttribute;
      get(name: "msdyn_timegroup"): Xrm.LookupAttribute<"msdyn_timegroup">;
      get(name: "msdyn_timetopromised"): Xrm.DateAttribute;
      get(name: "msdyn_timewindowend"): Xrm.DateAttribute;
      get(name: "msdyn_timewindowstart"): Xrm.DateAttribute;
      get(name: "msdyn_todate"): Xrm.DateAttribute;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
      get(name: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
      get(name: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IFRAME_AvailabilityView"): Xrm.IFrameControl;
      get(name: "RequirementCharacteristics"): Xrm.SubGridControl<"msdyn_requirementcharacteristic">;
      get(name: "RequirementOrganizationUnit"): Xrm.SubGridControl<"msdyn_requirementorganizationunit">;
      get(name: "RequirementResourceCategory"): Xrm.SubGridControl<"msdyn_requirementresourcecategory">;
      get(name: "RequirementResourcePreferences"): Xrm.SubGridControl<"msdyn_requirementresourcepreference">;
      get(name: "WebResource_msdyn_timewindowend"): Xrm.WebResourceControl;
      get(name: "WebResource_msdyn_timewindowstart"): Xrm.WebResourceControl;
      get(name: "msdyn_allocationmethod"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_allocationmethod>;
      get(name: "msdyn_calendarid"): Xrm.StringControl;
      get(name: "msdyn_city"): Xrm.StringControl;
      get(name: "msdyn_costprice"): Xrm.NumberControl;
      get(name: "msdyn_country"): Xrm.StringControl;
      get(name: "msdyn_duration"): Xrm.NumberControl;
      get(name: "msdyn_effort"): Xrm.NumberControl;
      get(name: "msdyn_fromdate"): Xrm.DateControl;
      get(name: "msdyn_fulfilledduration"): Xrm.NumberControl;
      get(name: "msdyn_isprimary"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_latitude"): Xrm.NumberControl;
      get(name: "msdyn_longitude"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_percentage"): Xrm.NumberControl;
      get(name: "msdyn_pooltype"): Xrm.MultiSelectOptionSetControl<msdyn_pooltype>;
      get(name: "msdyn_priority"): Xrm.LookupControl<"msdyn_priority">;
      get(name: "msdyn_projectid"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_proposedduration"): Xrm.NumberControl;
      get(name: "msdyn_remainingduration"): Xrm.NumberControl;
      get(name: "msdyn_requeststatus"): Xrm.StringControl;
      get(name: "msdyn_requirementgroupid"): Xrm.LookupControl<"msdyn_requirementgroup">;
      get(name: "msdyn_resourcetype"): Xrm.MultiSelectOptionSetControl<msdyn_bookableresourcetype>;
      get(name: "msdyn_stateorprovince"): Xrm.StringControl;
      get(name: "msdyn_status"): Xrm.LookupControl<"msdyn_requirementstatus">;
      get(name: "msdyn_territory"): Xrm.LookupControl<"territory">;
      get(name: "msdyn_timefrompromised"): Xrm.DateControl;
      get(name: "msdyn_timegroup"): Xrm.LookupControl<"msdyn_timegroup">;
      get(name: "msdyn_timetopromised"): Xrm.DateControl;
      get(name: "msdyn_timewindowend"): Xrm.DateControl;
      get(name: "msdyn_timewindowstart"): Xrm.DateControl;
      get(name: "msdyn_todate"): Xrm.DateControl;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
      get(name: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
      get(name: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Requirement_General"): Xrm.PageTab<Tabs.Requirement_General>;
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: "tab_FieldService"): Xrm.PageTab<Tabs.tab_FieldService>;
      get(name: "tab_ResourceBookings"): Xrm.PageTab<Tabs.tab_ResourceBookings>;
      get(name: "tab_project"): Xrm.PageTab<Tabs.tab_project>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_allocationmethod"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_allocationmethod>;
    getAttribute(attributeName: "msdyn_calendarid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_costprice"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_effort"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_fromdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_fulfilledduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_isprimary"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_percentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_pooltype"): Xrm.MultiSelectOptionSetAttribute<msdyn_pooltype>;
    getAttribute(attributeName: "msdyn_priority"): Xrm.LookupAttribute<"msdyn_priority">;
    getAttribute(attributeName: "msdyn_projectid"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_proposedduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_remainingduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_requeststatus"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_requirementgroupid"): Xrm.LookupAttribute<"msdyn_requirementgroup">;
    getAttribute(attributeName: "msdyn_resourcetype"): Xrm.MultiSelectOptionSetAttribute<msdyn_bookableresourcetype>;
    getAttribute(attributeName: "msdyn_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_status"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
    getAttribute(attributeName: "msdyn_territory"): Xrm.LookupAttribute<"territory">;
    getAttribute(attributeName: "msdyn_timefrompromised"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_timegroup"): Xrm.LookupAttribute<"msdyn_timegroup">;
    getAttribute(attributeName: "msdyn_timetopromised"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_timewindowend"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_timewindowstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_todate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
    getAttribute(attributeName: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
    getAttribute(attributeName: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IFRAME_AvailabilityView"): Xrm.IFrameControl;
    getControl(controlName: "RequirementCharacteristics"): Xrm.SubGridControl<"msdyn_requirementcharacteristic">;
    getControl(controlName: "RequirementOrganizationUnit"): Xrm.SubGridControl<"msdyn_requirementorganizationunit">;
    getControl(controlName: "RequirementResourceCategory"): Xrm.SubGridControl<"msdyn_requirementresourcecategory">;
    getControl(controlName: "RequirementResourcePreferences"): Xrm.SubGridControl<"msdyn_requirementresourcepreference">;
    getControl(controlName: "WebResource_msdyn_timewindowend"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_msdyn_timewindowstart"): Xrm.WebResourceControl;
    getControl(controlName: "msdyn_allocationmethod"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_allocationmethod>;
    getControl(controlName: "msdyn_calendarid"): Xrm.StringControl;
    getControl(controlName: "msdyn_city"): Xrm.StringControl;
    getControl(controlName: "msdyn_costprice"): Xrm.NumberControl;
    getControl(controlName: "msdyn_country"): Xrm.StringControl;
    getControl(controlName: "msdyn_duration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_effort"): Xrm.NumberControl;
    getControl(controlName: "msdyn_fromdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_fulfilledduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_isprimary"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_latitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_longitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_percentage"): Xrm.NumberControl;
    getControl(controlName: "msdyn_pooltype"): Xrm.MultiSelectOptionSetControl<msdyn_pooltype>;
    getControl(controlName: "msdyn_priority"): Xrm.LookupControl<"msdyn_priority">;
    getControl(controlName: "msdyn_projectid"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_proposedduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_remainingduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_requeststatus"): Xrm.StringControl;
    getControl(controlName: "msdyn_requirementgroupid"): Xrm.LookupControl<"msdyn_requirementgroup">;
    getControl(controlName: "msdyn_resourcetype"): Xrm.MultiSelectOptionSetControl<msdyn_bookableresourcetype>;
    getControl(controlName: "msdyn_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "msdyn_status"): Xrm.LookupControl<"msdyn_requirementstatus">;
    getControl(controlName: "msdyn_territory"): Xrm.LookupControl<"territory">;
    getControl(controlName: "msdyn_timefrompromised"): Xrm.DateControl;
    getControl(controlName: "msdyn_timegroup"): Xrm.LookupControl<"msdyn_timegroup">;
    getControl(controlName: "msdyn_timetopromised"): Xrm.DateControl;
    getControl(controlName: "msdyn_timewindowend"): Xrm.DateControl;
    getControl(controlName: "msdyn_timewindowstart"): Xrm.DateControl;
    getControl(controlName: "msdyn_todate"): Xrm.DateControl;
    getControl(controlName: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
    getControl(controlName: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
    getControl(controlName: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
