declare namespace Form.msdyn_resourcerequirement.Quick {
  namespace General1 {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_section_2"): Xrm.PageSection;
        get(name: "tab_1_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_allocationmethod"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_allocationmethod>;
      get(name: "msdyn_city"): Xrm.Attribute<string>;
      get(name: "msdyn_costprice"): Xrm.NumberAttribute;
      get(name: "msdyn_country"): Xrm.Attribute<string>;
      get(name: "msdyn_duration"): Xrm.NumberAttribute;
      get(name: "msdyn_fromdate"): Xrm.DateAttribute;
      get(name: "msdyn_percentage"): Xrm.NumberAttribute;
      get(name: "msdyn_requeststatus"): Xrm.Attribute<string>;
      get(name: "msdyn_stateorprovince"): Xrm.Attribute<string>;
      get(name: "msdyn_todate"): Xrm.DateAttribute;
      get(name: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_type>;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_allocationmethod"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_allocationmethod>;
      get(name: "msdyn_city"): Xrm.StringControl;
      get(name: "msdyn_costprice"): Xrm.NumberControl;
      get(name: "msdyn_country"): Xrm.StringControl;
      get(name: "msdyn_duration"): Xrm.NumberControl;
      get(name: "msdyn_fromdate"): Xrm.DateControl;
      get(name: "msdyn_percentage"): Xrm.NumberControl;
      get(name: "msdyn_requeststatus"): Xrm.StringControl;
      get(name: "msdyn_stateorprovince"): Xrm.StringControl;
      get(name: "msdyn_todate"): Xrm.DateControl;
      get(name: "msdyn_type"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_type>;
      get(name: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
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
  interface General1 extends Xrm.PageBase<General1.Attributes,General1.Tabs,General1.Controls> {
    getAttribute(attributeName: "msdyn_allocationmethod"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_allocationmethod>;
    getAttribute(attributeName: "msdyn_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_costprice"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_duration"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_fromdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_percentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_requeststatus"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_todate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_resourcerequirement_msdyn_type>;
    getAttribute(attributeName: "msdyn_workhourtemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_allocationmethod"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_allocationmethod>;
    getControl(controlName: "msdyn_city"): Xrm.StringControl;
    getControl(controlName: "msdyn_costprice"): Xrm.NumberControl;
    getControl(controlName: "msdyn_country"): Xrm.StringControl;
    getControl(controlName: "msdyn_duration"): Xrm.NumberControl;
    getControl(controlName: "msdyn_fromdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_percentage"): Xrm.NumberControl;
    getControl(controlName: "msdyn_requeststatus"): Xrm.StringControl;
    getControl(controlName: "msdyn_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "msdyn_todate"): Xrm.DateControl;
    getControl(controlName: "msdyn_type"): Xrm.OptionSetControl<msdyn_resourcerequirement_msdyn_type>;
    getControl(controlName: "msdyn_workhourtemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
