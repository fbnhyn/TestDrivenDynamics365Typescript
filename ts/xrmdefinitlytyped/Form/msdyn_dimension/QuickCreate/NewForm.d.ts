declare namespace Form.msdyn_dimension.QuickCreate {
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
      get(name: "msdyn_applicabletocost"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_applicabletopurchase"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_applicabletosales"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_costpriority"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_purchasepriority"): Xrm.NumberAttribute;
      get(name: "msdyn_salespriority"): Xrm.NumberAttribute;
      get(name: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_pricingdimensiontype>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_applicabletocost"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_applicabletopurchase"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_applicabletosales"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_costpriority"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_purchasepriority"): Xrm.NumberControl;
      get(name: "msdyn_salespriority"): Xrm.NumberControl;
      get(name: "msdyn_type"): Xrm.OptionSetControl<msdyn_pricingdimensiontype>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
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
    getAttribute(attributeName: "msdyn_applicabletocost"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_applicabletopurchase"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_applicabletosales"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_costpriority"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_purchasepriority"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_salespriority"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_type"): Xrm.OptionSetAttribute<msdyn_pricingdimensiontype>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_applicabletocost"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_applicabletopurchase"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_applicabletosales"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_costpriority"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_purchasepriority"): Xrm.NumberControl;
    getControl(controlName: "msdyn_salespriority"): Xrm.NumberControl;
    getControl(controlName: "msdyn_type"): Xrm.OptionSetControl<msdyn_pricingdimensiontype>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
