declare namespace Form.msdyn_projectapproval.Quick {
  namespace NewForm {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_date"): Xrm.DateAttribute;
      get(name: "msdyn_entrytype"): Xrm.OptionSetAttribute<msdyn_projectapproval_msdyn_entrytype>;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_salesprice"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_date"): Xrm.DateControl;
      get(name: "msdyn_entrytype"): Xrm.OptionSetControl<msdyn_projectapproval_msdyn_entrytype>;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_salesprice"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface NewForm extends Xrm.PageBase<NewForm.Attributes,NewForm.Tabs,NewForm.Controls> {
    getAttribute(attributeName: "msdyn_date"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_entrytype"): Xrm.OptionSetAttribute<msdyn_projectapproval_msdyn_entrytype>;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_salesprice"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_date"): Xrm.DateControl;
    getControl(controlName: "msdyn_entrytype"): Xrm.OptionSetControl<msdyn_projectapproval_msdyn_entrytype>;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_salesprice"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
