declare namespace Form.msdyn_projecttask.Main {
  namespace Information {
    namespace Tabs {
      interface _7a08287e9b254ee0a2dd288055bd63a7 extends Xrm.SectionCollectionBase {
        get(name: "notes_section"): Xrm.PageSection;
        get(name: "{4fdeb155-c726-4210-a41f-97ce03bd0a9d}"): Xrm.PageSection;
        get(name: "{7a08287e-9b25-4ee0-a2dd-288055bd63a7}_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_2 extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_duration"): Xrm.NumberAttribute;
      get(name: "msdyn_effort"): Xrm.NumberAttribute;
      get(name: "msdyn_organizationalunitpricingdimension"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_parenttask"): Xrm.LookupAttribute<"msdyn_projecttask">;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_resourcecategorypricingdimension"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_scheduleddurationminutes"): Xrm.NumberAttribute;
      get(name: "msdyn_scheduledend"): Xrm.DateAttribute;
      get(name: "msdyn_scheduledstart"): Xrm.DateAttribute;
      get(name: "msdyn_subject"): Xrm.Attribute<string>;
      get(name: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
      get(name: "msdyn_wbsid"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_projecttask_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_statecode"): Xrm.OptionSetControl<msdyn_projecttask_statecode>;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_duration"): Xrm.NumberControl;
      get(name: "msdyn_effort"): Xrm.NumberControl;
      get(name: "msdyn_organizationalunitpricingdimension"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_parenttask"): Xrm.LookupControl<"msdyn_projecttask">;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_resourcecategorypricingdimension"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_scheduleddurationminutes"): Xrm.NumberControl;
      get(name: "msdyn_scheduledend"): Xrm.DateControl;
      get(name: "msdyn_scheduledstart"): Xrm.DateControl;
      get(name: "msdyn_subject"): Xrm.StringControl;
      get(name: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
      get(name: "msdyn_wbsid"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{7a08287e-9b25-4ee0-a2dd-288055bd63a7}"): Xrm.PageTab<Tabs._7a08287e9b254ee0a2dd288055bd63a7>;
      get(name: "tab_2"): Xrm.PageTab<Tabs.tab_2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_effort"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_organizationalunitpricingdimension"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_parenttask"): Xrm.LookupAttribute<"msdyn_projecttask">;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_resourcecategorypricingdimension"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_scheduleddurationminutes"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
    getAttribute(attributeName: "msdyn_wbsid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_projecttask_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<msdyn_projecttask_statecode>;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_duration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_effort"): Xrm.NumberControl;
    getControl(controlName: "msdyn_organizationalunitpricingdimension"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_parenttask"): Xrm.LookupControl<"msdyn_projecttask">;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_resourcecategorypricingdimension"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_scheduleddurationminutes"): Xrm.NumberControl;
    getControl(controlName: "msdyn_scheduledend"): Xrm.DateControl;
    getControl(controlName: "msdyn_scheduledstart"): Xrm.DateControl;
    getControl(controlName: "msdyn_subject"): Xrm.StringControl;
    getControl(controlName: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
    getControl(controlName: "msdyn_wbsid"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
