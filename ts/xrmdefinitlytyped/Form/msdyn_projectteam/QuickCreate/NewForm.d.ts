declare namespace Form.msdyn_projectteam.QuickCreate {
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
      get(name: "msdyn_allocationmethod"): Xrm.OptionSetAttribute<msdyn_projectteam_msdyn_allocationmethod>;
      get(name: "msdyn_bookableresourceid"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_from"): Xrm.DateAttribute;
      get(name: "msdyn_hours"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_organizationalunit"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_percentage"): Xrm.NumberAttribute;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_projectapprover"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_resourcerequirementid"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
      get(name: "msdyn_to"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_allocationmethod"): Xrm.OptionSetControl<msdyn_projectteam_msdyn_allocationmethod>;
      get(name: "msdyn_bookableresourceid"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_from"): Xrm.DateControl;
      get(name: "msdyn_hours"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_organizationalunit"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_percentage"): Xrm.NumberControl;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_projectapprover"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_resourcerequirementid"): Xrm.LookupControl<"msdyn_resourcerequirement">;
      get(name: "msdyn_to"): Xrm.DateControl;
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
    getAttribute(attributeName: "msdyn_allocationmethod"): Xrm.OptionSetAttribute<msdyn_projectteam_msdyn_allocationmethod>;
    getAttribute(attributeName: "msdyn_bookableresourceid"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_from"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_hours"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_organizationalunit"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_percentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_projectapprover"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_resourcerequirementid"): Xrm.LookupAttribute<"msdyn_resourcerequirement">;
    getAttribute(attributeName: "msdyn_to"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_allocationmethod"): Xrm.OptionSetControl<msdyn_projectteam_msdyn_allocationmethod>;
    getControl(controlName: "msdyn_bookableresourceid"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_from"): Xrm.DateControl;
    getControl(controlName: "msdyn_hours"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_organizationalunit"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_percentage"): Xrm.NumberControl;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_projectapprover"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_resourcerequirementid"): Xrm.LookupControl<"msdyn_resourcerequirement">;
    getControl(controlName: "msdyn_to"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
