declare namespace Form.msdyn_timeentry.Main {
  namespace FieldServiceInformation {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: "tab_2_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_bookableresourcebooking"): Xrm.LookupAttribute<"bookableresourcebooking">;
      get(name: "msdyn_bookingstatus"): Xrm.LookupAttribute<"bookingstatus">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_duration"): Xrm.NumberAttribute;
      get(name: "msdyn_end"): Xrm.DateAttribute;
      get(name: "msdyn_entrystatus"): Xrm.OptionSetAttribute<msdyn_timeentrystatus>;
      get(name: "msdyn_externaldescription"): Xrm.Attribute<string>;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
      get(name: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
      get(name: "msdyn_start"): Xrm.DateAttribute;
      get(name: "msdyn_timeentrysettingid"): Xrm.LookupAttribute<"msdyn_timeentrysetting">;
      get(name: "msdyn_timeoffrequest"): Xrm.LookupAttribute<"msdyn_timeoffrequest">;
      get(name: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_timeentrytype>;
      get(name: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_msdyn_description"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_duration"): Xrm.NumberControl | null;
      get(name: "header_process_msdyn_entrystatus"): Xrm.OptionSetControl<msdyn_timeentrystatus> | null;
      get(name: "header_process_msdyn_entrystatus_1"): Xrm.OptionSetControl<msdyn_timeentrystatus> | null;
      get(name: "header_process_msdyn_externaldescription"): Xrm.StringControl | null;
      get(name: "header_process_msdyn_project"): Xrm.LookupControl<"msdyn_timeentry"> | null;
      get(name: "header_process_msdyn_projecttask"): Xrm.LookupControl<"msdyn_timeentry"> | null;
      get(name: "header_process_msdyn_resourcecategory"): Xrm.LookupControl<"msdyn_timeentry"> | null;
      get(name: "header_process_msdyn_type"): Xrm.OptionSetControl<msdyn_timeentrytype> | null;
      get(name: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_bookableresourcebooking"): Xrm.LookupControl<"bookableresourcebooking">;
      get(name: "msdyn_bookingstatus"): Xrm.LookupControl<"bookingstatus">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_duration"): Xrm.NumberControl;
      get(name: "msdyn_end"): Xrm.DateControl;
      get(name: "msdyn_entrystatus"): Xrm.OptionSetControl<msdyn_timeentrystatus>;
      get(name: "msdyn_externaldescription"): Xrm.StringControl;
      get(name: "msdyn_start"): Xrm.DateControl;
      get(name: "msdyn_timeentrysettingid"): Xrm.LookupControl<"msdyn_timeentrysetting">;
      get(name: "msdyn_timeoffrequest"): Xrm.LookupControl<"msdyn_timeoffrequest">;
      get(name: "msdyn_type"): Xrm.OptionSetControl<msdyn_timeentrytype>;
      get(name: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface FieldServiceInformation extends Xrm.PageBase<FieldServiceInformation.Attributes,FieldServiceInformation.Tabs,FieldServiceInformation.Controls> {
    getAttribute(attributeName: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_bookableresourcebooking"): Xrm.LookupAttribute<"bookableresourcebooking">;
    getAttribute(attributeName: "msdyn_bookingstatus"): Xrm.LookupAttribute<"bookingstatus">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_end"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_entrystatus"): Xrm.OptionSetAttribute<msdyn_timeentrystatus>;
    getAttribute(attributeName: "msdyn_externaldescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
    getAttribute(attributeName: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
    getAttribute(attributeName: "msdyn_start"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_timeentrysettingid"): Xrm.LookupAttribute<"msdyn_timeentrysetting">;
    getAttribute(attributeName: "msdyn_timeoffrequest"): Xrm.LookupAttribute<"msdyn_timeoffrequest">;
    getAttribute(attributeName: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_timeentrytype>;
    getAttribute(attributeName: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_process_msdyn_description"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_duration"): Xrm.NumberControl | null;
    getControl(controlName: "header_process_msdyn_entrystatus"): Xrm.OptionSetControl<msdyn_timeentrystatus> | null;
    getControl(controlName: "header_process_msdyn_entrystatus_1"): Xrm.OptionSetControl<msdyn_timeentrystatus> | null;
    getControl(controlName: "header_process_msdyn_externaldescription"): Xrm.StringControl | null;
    getControl(controlName: "header_process_msdyn_project"): Xrm.LookupControl<"msdyn_timeentry"> | null;
    getControl(controlName: "header_process_msdyn_projecttask"): Xrm.LookupControl<"msdyn_timeentry"> | null;
    getControl(controlName: "header_process_msdyn_resourcecategory"): Xrm.LookupControl<"msdyn_timeentry"> | null;
    getControl(controlName: "header_process_msdyn_type"): Xrm.OptionSetControl<msdyn_timeentrytype> | null;
    getControl(controlName: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_bookableresourcebooking"): Xrm.LookupControl<"bookableresourcebooking">;
    getControl(controlName: "msdyn_bookingstatus"): Xrm.LookupControl<"bookingstatus">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_duration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_end"): Xrm.DateControl;
    getControl(controlName: "msdyn_entrystatus"): Xrm.OptionSetControl<msdyn_timeentrystatus>;
    getControl(controlName: "msdyn_externaldescription"): Xrm.StringControl;
    getControl(controlName: "msdyn_start"): Xrm.DateControl;
    getControl(controlName: "msdyn_timeentrysettingid"): Xrm.LookupControl<"msdyn_timeentrysetting">;
    getControl(controlName: "msdyn_timeoffrequest"): Xrm.LookupControl<"msdyn_timeoffrequest">;
    getControl(controlName: "msdyn_type"): Xrm.OptionSetControl<msdyn_timeentrytype>;
    getControl(controlName: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
