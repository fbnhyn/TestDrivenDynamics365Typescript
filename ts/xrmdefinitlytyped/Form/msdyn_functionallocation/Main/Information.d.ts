declare namespace Form.msdyn_functionallocation.Main {
  namespace Information {
    namespace Tabs {
      interface AssetsAndLocationsTab extends Xrm.SectionCollectionBase {
        get(name: "AssetsAndLocationsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_3 extends Xrm.SectionCollectionBase {
        get(name: "AddressSection"): Xrm.PageSection;
        get(name: "tab_3_column_3_section_1"): Xrm.PageSection;
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_address1"): Xrm.Attribute<string>;
      get(name: "msdyn_address2"): Xrm.Attribute<string>;
      get(name: "msdyn_address3"): Xrm.Attribute<string>;
      get(name: "msdyn_addressname"): Xrm.Attribute<string>;
      get(name: "msdyn_city"): Xrm.Attribute<string>;
      get(name: "msdyn_country"): Xrm.Attribute<string>;
      get(name: "msdyn_latitude"): Xrm.NumberAttribute;
      get(name: "msdyn_longitude"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_parentfunctionallocation"): Xrm.LookupAttribute<"msdyn_functionallocation">;
      get(name: "msdyn_postalcode"): Xrm.Attribute<string>;
      get(name: "msdyn_stateorprovince"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_address1"): Xrm.StringControl;
      get(name: "msdyn_address2"): Xrm.StringControl;
      get(name: "msdyn_address3"): Xrm.StringControl;
      get(name: "msdyn_addressname"): Xrm.StringControl;
      get(name: "msdyn_city"): Xrm.StringControl;
      get(name: "msdyn_country"): Xrm.StringControl;
      get(name: "msdyn_latitude"): Xrm.NumberControl;
      get(name: "msdyn_longitude"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_name1"): Xrm.StringControl;
      get(name: "msdyn_parentfunctionallocation"): Xrm.LookupControl<"msdyn_functionallocation">;
      get(name: "msdyn_postalcode"): Xrm.StringControl;
      get(name: "msdyn_stateorprovince"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AssetsAndLocationsTab"): Xrm.PageTab<Tabs.AssetsAndLocationsTab>;
      get(name: "tab_3"): Xrm.PageTab<Tabs.tab_3>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_address1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_address2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_address3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_addressname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_parentfunctionallocation"): Xrm.LookupAttribute<"msdyn_functionallocation">;
    getAttribute(attributeName: "msdyn_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_address1"): Xrm.StringControl;
    getControl(controlName: "msdyn_address2"): Xrm.StringControl;
    getControl(controlName: "msdyn_address3"): Xrm.StringControl;
    getControl(controlName: "msdyn_addressname"): Xrm.StringControl;
    getControl(controlName: "msdyn_city"): Xrm.StringControl;
    getControl(controlName: "msdyn_country"): Xrm.StringControl;
    getControl(controlName: "msdyn_latitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_longitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_name1"): Xrm.StringControl;
    getControl(controlName: "msdyn_parentfunctionallocation"): Xrm.LookupControl<"msdyn_functionallocation">;
    getControl(controlName: "msdyn_postalcode"): Xrm.StringControl;
    getControl(controlName: "msdyn_stateorprovince"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
