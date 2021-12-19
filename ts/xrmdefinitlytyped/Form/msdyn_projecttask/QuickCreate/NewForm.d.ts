declare namespace Form.msdyn_projecttask.QuickCreate {
  namespace NewForm {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_effort"): Xrm.NumberAttribute;
      get(name: "msdyn_organizationalunitpricingdimension"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_resourcecategorypricingdimension"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_scheduledend"): Xrm.DateAttribute;
      get(name: "msdyn_scheduledstart"): Xrm.DateAttribute;
      get(name: "msdyn_subject"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_effort"): Xrm.NumberControl;
      get(name: "msdyn_organizationalunitpricingdimension"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_resourcecategorypricingdimension"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_scheduledend"): Xrm.DateControl;
      get(name: "msdyn_scheduledstart"): Xrm.DateControl;
      get(name: "msdyn_subject"): Xrm.StringControl;
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
    getAttribute(attributeName: "msdyn_effort"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_organizationalunitpricingdimension"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_resourcecategorypricingdimension"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_scheduledend"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_scheduledstart"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_subject"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_effort"): Xrm.NumberControl;
    getControl(controlName: "msdyn_organizationalunitpricingdimension"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_resourcecategorypricingdimension"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_scheduledend"): Xrm.DateControl;
    getControl(controlName: "msdyn_scheduledstart"): Xrm.DateControl;
    getControl(controlName: "msdyn_subject"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
