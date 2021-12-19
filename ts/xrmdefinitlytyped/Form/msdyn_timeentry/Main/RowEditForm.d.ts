declare namespace Form.msdyn_timeentry.Main {
  namespace RowEditForm {
    namespace Tabs {
      interface ae8b7cdd484b49a8a00dc201927d5729 extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_duration"): Xrm.NumberAttribute | null;
      get(name: "msdyn_entrystatus"): Xrm.OptionSetAttribute<msdyn_timeentrystatus>;
      get(name: "msdyn_externaldescription"): Xrm.Attribute<string> | null;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_projecttask">;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_timeentrysettingid"): Xrm.LookupAttribute<"msdyn_timeentrysetting">;
      get(name: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_timeentrytype>;
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
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_entrystatus"): Xrm.OptionSetControl<msdyn_timeentrystatus>;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_projecttask"): Xrm.LookupControl<"msdyn_projecttask">;
      get(name: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_timeentrysettingid"): Xrm.LookupControl<"msdyn_timeentrysetting">;
      get(name: "msdyn_type"): Xrm.OptionSetControl<msdyn_timeentrytype>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{ae8b7cdd-484b-49a8-a00d-c201927d5729}"): Xrm.PageTab<Tabs.ae8b7cdd484b49a8a00dc201927d5729>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface RowEditForm extends Xrm.PageBase<RowEditForm.Attributes,RowEditForm.Tabs,RowEditForm.Controls> {
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute | null;
    getAttribute(attributeName: "msdyn_entrystatus"): Xrm.OptionSetAttribute<msdyn_timeentrystatus>;
    getAttribute(attributeName: "msdyn_externaldescription"): Xrm.Attribute<string> | null;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_projecttask">;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_timeentrysettingid"): Xrm.LookupAttribute<"msdyn_timeentrysetting">;
    getAttribute(attributeName: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_timeentrytype>;
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
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_entrystatus"): Xrm.OptionSetControl<msdyn_timeentrystatus>;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_projecttask"): Xrm.LookupControl<"msdyn_projecttask">;
    getControl(controlName: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_timeentrysettingid"): Xrm.LookupControl<"msdyn_timeentrysetting">;
    getControl(controlName: "msdyn_type"): Xrm.OptionSetControl<msdyn_timeentrytype>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
