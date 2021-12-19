declare namespace Form.msdyn_timeentry.TaskFlowForm {
  namespace timeentrycomment {
    namespace Tabs {
      interface pagestep3 extends Xrm.SectionCollectionBase {
        get(name: "pagestep3_section1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "084eda9e-a8ab-4658-91cd-d6907ad30c11_next"): Xrm.Attribute<any>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_duration"): Xrm.NumberAttribute;
      get(name: "msdyn_entrystatus"): Xrm.OptionSetAttribute<msdyn_timeentrystatus>;
      get(name: "msdyn_externaldescription"): Xrm.Attribute<string>;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
      get(name: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
      get(name: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_timeentrytype> | null;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "084eda9e-a8ab-4658-91cd-d6907ad30c11_next"): Xrm.Control<Xrm.Attribute<any>>;
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
      get(name: "msdyn_duration"): Xrm.NumberControl;
      get(name: "msdyn_entrystatus"): Xrm.OptionSetControl<msdyn_timeentrystatus>;
      get(name: "msdyn_externaldescription"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "pagestep3"): Xrm.PageTab<Tabs.pagestep3>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface timeentrycomment extends Xrm.PageBase<timeentrycomment.Attributes,timeentrycomment.Tabs,timeentrycomment.Controls> {
    getAttribute(attributeName: "084eda9e-a8ab-4658-91cd-d6907ad30c11_next"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_entrystatus"): Xrm.OptionSetAttribute<msdyn_timeentrystatus>;
    getAttribute(attributeName: "msdyn_externaldescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
    getAttribute(attributeName: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"msdyn_timeentry"> | null;
    getAttribute(attributeName: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_timeentrytype> | null;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "084eda9e-a8ab-4658-91cd-d6907ad30c11_next"): Xrm.Control<Xrm.Attribute<any>>;
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
    getControl(controlName: "msdyn_duration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_entrystatus"): Xrm.OptionSetControl<msdyn_timeentrystatus>;
    getControl(controlName: "msdyn_externaldescription"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
