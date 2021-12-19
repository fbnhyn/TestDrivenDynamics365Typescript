declare namespace Form.msdyn_propertylog.QuickCreate {
  namespace PropertyLogQuickCreate {
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
      get(name: "msdyn_booleanvalue"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
      get(name: "msdyn_datevalue"): Xrm.DateAttribute;
      get(name: "msdyn_numbervalue"): Xrm.NumberAttribute;
      get(name: "msdyn_property"): Xrm.LookupAttribute<"msdyn_property">;
      get(name: "msdyn_readingtime"): Xrm.DateAttribute;
      get(name: "msdyn_stringvalue"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_booleanvalue"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
      get(name: "msdyn_datevalue"): Xrm.DateControl;
      get(name: "msdyn_numbervalue"): Xrm.NumberControl;
      get(name: "msdyn_property"): Xrm.LookupControl<"msdyn_property">;
      get(name: "msdyn_readingtime"): Xrm.DateControl;
      get(name: "msdyn_stringvalue"): Xrm.StringControl;
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
  interface PropertyLogQuickCreate extends Xrm.PageBase<PropertyLogQuickCreate.Attributes,PropertyLogQuickCreate.Tabs,PropertyLogQuickCreate.Controls> {
    getAttribute(attributeName: "msdyn_booleanvalue"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
    getAttribute(attributeName: "msdyn_datevalue"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_numbervalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_property"): Xrm.LookupAttribute<"msdyn_property">;
    getAttribute(attributeName: "msdyn_readingtime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_stringvalue"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_booleanvalue"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
    getControl(controlName: "msdyn_datevalue"): Xrm.DateControl;
    getControl(controlName: "msdyn_numbervalue"): Xrm.NumberControl;
    getControl(controlName: "msdyn_property"): Xrm.LookupControl<"msdyn_property">;
    getControl(controlName: "msdyn_readingtime"): Xrm.DateControl;
    getControl(controlName: "msdyn_stringvalue"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
