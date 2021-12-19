declare namespace Form.msdyn_resourcerequirement.QuickCreate {
  namespace Infomation {
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
      get(name: "msdyn_allocationmethod"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_allocationmethod>;
      get(name: "msdyn_duration"): Xrm.NumberAttribute;
      get(name: "msdyn_fromdate"): Xrm.DateAttribute;
      get(name: "msdyn_latitude"): Xrm.NumberAttribute;
      get(name: "msdyn_longitude"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_percentage"): Xrm.NumberAttribute;
      get(name: "msdyn_pooltype"): Xrm.MultiSelectOptionSetAttribute<msdyn_pooltype>;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_requirementgroupid"): Xrm.MultiSelectOptionSetAttribute<number>;
      get(name: "msdyn_resourcetype"): Xrm.MultiSelectOptionSetAttribute<msdyn_bookableresourcetype>;
      get(name: "msdyn_status"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
      get(name: "msdyn_todate"): Xrm.DateAttribute;
      get(name: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_type>;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
      get(name: "msdyn_worklocation"): Xrm.MultiSelectOptionSetAttribute<msdyn_worklocation>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_allocationmethod"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_allocationmethod>;
      get(name: "msdyn_duration"): Xrm.NumberControl;
      get(name: "msdyn_fromdate"): Xrm.DateControl;
      get(name: "msdyn_latitude"): Xrm.NumberControl;
      get(name: "msdyn_longitude"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_percentage"): Xrm.NumberControl;
      get(name: "msdyn_pooltype"): Xrm.MultiSelectOptionSetControl<msdyn_pooltype>;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_requirementgroupid"): Xrm.MultiSelectOptionSetControl<number>;
      get(name: "msdyn_resourcetype"): Xrm.MultiSelectOptionSetControl<msdyn_bookableresourcetype>;
      get(name: "msdyn_status"): Xrm.LookupControl<"msdyn_requirementstatus">;
      get(name: "msdyn_todate"): Xrm.DateControl;
      get(name: "msdyn_type"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_type>;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
      get(name: "msdyn_worklocation"): Xrm.MultiSelectOptionSetControl<msdyn_worklocation>;
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
  interface Infomation extends Xrm.PageBase<Infomation.Attributes,Infomation.Tabs,Infomation.Controls> {
    getAttribute(attributeName: "msdyn_allocationmethod"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_allocationmethod>;
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_fromdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_percentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_pooltype"): Xrm.MultiSelectOptionSetAttribute<msdyn_pooltype>;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_requirementgroupid"): Xrm.MultiSelectOptionSetAttribute<number>;
    getAttribute(attributeName: "msdyn_resourcetype"): Xrm.MultiSelectOptionSetAttribute<msdyn_bookableresourcetype>;
    getAttribute(attributeName: "msdyn_status"): Xrm.LookupAttribute<"msdyn_requirementstatus">;
    getAttribute(attributeName: "msdyn_todate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_type>;
    getAttribute(attributeName: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
    getAttribute(attributeName: "msdyn_worklocation"): Xrm.MultiSelectOptionSetAttribute<msdyn_worklocation>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_allocationmethod"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_allocationmethod>;
    getControl(controlName: "msdyn_duration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_fromdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_latitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_longitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_percentage"): Xrm.NumberControl;
    getControl(controlName: "msdyn_pooltype"): Xrm.MultiSelectOptionSetControl<msdyn_pooltype>;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_requirementgroupid"): Xrm.MultiSelectOptionSetControl<number>;
    getControl(controlName: "msdyn_resourcetype"): Xrm.MultiSelectOptionSetControl<msdyn_bookableresourcetype>;
    getControl(controlName: "msdyn_status"): Xrm.LookupControl<"msdyn_requirementstatus">;
    getControl(controlName: "msdyn_todate"): Xrm.DateControl;
    getControl(controlName: "msdyn_type"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_type>;
    getControl(controlName: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
    getControl(controlName: "msdyn_worklocation"): Xrm.MultiSelectOptionSetControl<msdyn_worklocation>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
