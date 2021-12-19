declare namespace Form.msdyn_agreementbookingsetup.Main {
  namespace AgreementBookingSetup {
    namespace Tabs {
      interface b08d1e73c8854ac58e1aecd3cf34e01d extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "{b08d1e73-c885-4ac5-8e1a-ecd3cf34e01d}_section_3"): Xrm.PageSection;
        get(name: "{b08d1e73-c885-4ac5-8e1a-ecd3cf34e01d}_section_5"): Xrm.PageSection;
        get(name: "{b08d1e73-c885-4ac5-8e1a-ecd3cf34e01d}_section_6"): Xrm.PageSection;
        get(name: "{e2317057-faf8-42f6-a483-57d828596c17}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_6 extends Xrm.SectionCollectionBase {
        get(name: "tab_6_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_7 extends Xrm.SectionCollectionBase {
        get(name: "tab_7_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_8 extends Xrm.SectionCollectionBase {
        get(name: "tab_8_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
      get(name: "msdyn_autogeneratebooking"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_autogeneratewo"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_estimatedduration"): Xrm.NumberAttribute;
      get(name: "msdyn_generatewodaysinadvance"): Xrm.NumberAttribute;
      get(name: "msdyn_latitude"): Xrm.NumberAttribute;
      get(name: "msdyn_longitude"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_postbookingflexibility"): Xrm.NumberAttribute;
      get(name: "msdyn_prebookingflexibility"): Xrm.NumberAttribute;
      get(name: "msdyn_preferredresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_preferredstarttime"): Xrm.DateAttribute;
      get(name: "msdyn_priority"): Xrm.LookupAttribute<"msdyn_priority">;
      get(name: "msdyn_recurrencesettings"): Xrm.Attribute<string>;
      get(name: "msdyn_timewindowend"): Xrm.DateAttribute;
      get(name: "msdyn_timewindowstart"): Xrm.DateAttribute;
      get(name: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
      get(name: "msdyn_workordersummary"): Xrm.Attribute<string>;
      get(name: "msdyn_workordertype"): Xrm.LookupAttribute<"msdyn_workordertype">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_agreementbookingsetup_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AgreementBookingProductsGrid"): Xrm.SubGridControl<"msdyn_agreementbookingproduct">;
      get(name: "AgreementBookingServiceTasksGrid"): Xrm.SubGridControl<"msdyn_agreementbookingservicetask">;
      get(name: "AgreementBookingServicesGrid"): Xrm.SubGridControl<"msdyn_agreementbookingservice">;
      get(name: "WebResource_PreferredStartTime_TimeField"): Xrm.WebResourceControl;
      get(name: "WebResource_TimeWindowEnd_TimeField"): Xrm.WebResourceControl;
      get(name: "WebResource_TimeWindowStart_TimeField"): Xrm.WebResourceControl;
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_agreementbookingsetup_statecode>;
      get(name: "header_process_msdyn_autogeneratewo"): Xrm.OptionSetControl<boolean> | null;
      get(name: "header_process_msdyn_description"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_estimatedduration"): Xrm.NumberControl | null;
      get(name: "header_process_msdyn_name"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_postbookingflexibility"): Xrm.NumberControl | null;
      get(name: "header_process_msdyn_prebookingflexibility"): Xrm.NumberControl | null;
      get(name: "header_process_msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype"> | null;
      get(name: "incidentsgrid"): Xrm.SubGridControl<"msdyn_agreementbookingincident">;
      get(name: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
      get(name: "msdyn_autogeneratebooking"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_autogeneratewo"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_estimatedduration"): Xrm.NumberControl;
      get(name: "msdyn_generatewodaysinadvance"): Xrm.NumberControl;
      get(name: "msdyn_latitude"): Xrm.NumberControl;
      get(name: "msdyn_longitude"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_postbookingflexibility"): Xrm.NumberControl;
      get(name: "msdyn_prebookingflexibility"): Xrm.NumberControl;
      get(name: "msdyn_preferredresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_preferredstarttime"): Xrm.DateControl;
      get(name: "msdyn_priority"): Xrm.LookupControl<"msdyn_priority">;
      get(name: "msdyn_recurrencesettings"): Xrm.StringControl;
      get(name: "msdyn_timewindowend"): Xrm.DateControl;
      get(name: "msdyn_timewindowstart"): Xrm.DateControl;
      get(name: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
      get(name: "msdyn_workordersummary"): Xrm.StringControl;
      get(name: "msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "schecduledategrid"): Xrm.SubGridControl<"msdyn_agreementbookingdate">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{b08d1e73-c885-4ac5-8e1a-ecd3cf34e01d}"): Xrm.PageTab<Tabs.b08d1e73c8854ac58e1aecd3cf34e01d>;
      get(name: "tab_6"): Xrm.PageTab<Tabs.tab_6>;
      get(name: "tab_7"): Xrm.PageTab<Tabs.tab_7>;
      get(name: "tab_8"): Xrm.PageTab<Tabs.tab_8>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface AgreementBookingSetup extends Xrm.PageBase<AgreementBookingSetup.Attributes,AgreementBookingSetup.Tabs,AgreementBookingSetup.Controls> {
    getAttribute(attributeName: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
    getAttribute(attributeName: "msdyn_autogeneratebooking"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_autogeneratewo"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_estimatedduration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_generatewodaysinadvance"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_postbookingflexibility"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_prebookingflexibility"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_preferredresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_preferredstarttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_priority"): Xrm.LookupAttribute<"msdyn_priority">;
    getAttribute(attributeName: "msdyn_recurrencesettings"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_timewindowend"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_timewindowstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
    getAttribute(attributeName: "msdyn_workordersummary"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_workordertype"): Xrm.LookupAttribute<"msdyn_workordertype">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_agreementbookingsetup_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "AgreementBookingProductsGrid"): Xrm.SubGridControl<"msdyn_agreementbookingproduct">;
    getControl(controlName: "AgreementBookingServiceTasksGrid"): Xrm.SubGridControl<"msdyn_agreementbookingservicetask">;
    getControl(controlName: "AgreementBookingServicesGrid"): Xrm.SubGridControl<"msdyn_agreementbookingservice">;
    getControl(controlName: "WebResource_PreferredStartTime_TimeField"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_TimeWindowEnd_TimeField"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_TimeWindowStart_TimeField"): Xrm.WebResourceControl;
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_agreementbookingsetup_statecode>;
    getControl(controlName: "header_process_msdyn_autogeneratewo"): Xrm.OptionSetControl<boolean> | null;
    getControl(controlName: "header_process_msdyn_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_estimatedduration"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_msdyn_name"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_postbookingflexibility"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_msdyn_prebookingflexibility"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype"> | null;
    getControl(controlName: "incidentsgrid"): Xrm.SubGridControl<"msdyn_agreementbookingincident">;
    getControl(controlName: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
    getControl(controlName: "msdyn_autogeneratebooking"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_autogeneratewo"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_estimatedduration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_generatewodaysinadvance"): Xrm.NumberControl;
    getControl(controlName: "msdyn_latitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_longitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_postbookingflexibility"): Xrm.NumberControl;
    getControl(controlName: "msdyn_prebookingflexibility"): Xrm.NumberControl;
    getControl(controlName: "msdyn_preferredresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_preferredstarttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_priority"): Xrm.LookupControl<"msdyn_priority">;
    getControl(controlName: "msdyn_recurrencesettings"): Xrm.StringControl;
    getControl(controlName: "msdyn_timewindowend"): Xrm.DateControl;
    getControl(controlName: "msdyn_timewindowstart"): Xrm.DateControl;
    getControl(controlName: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
    getControl(controlName: "msdyn_workordersummary"): Xrm.StringControl;
    getControl(controlName: "msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "schecduledategrid"): Xrm.SubGridControl<"msdyn_agreementbookingdate">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
