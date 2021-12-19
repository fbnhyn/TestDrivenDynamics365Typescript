declare namespace Form.dynamicproperty.QuickCreate {
  namespace PropertyQuickCreate {
    namespace Tabs {
      interface dynamic_property_summary extends Xrm.SectionCollectionBase {
        get(name: "dynamic_property_properties_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "datatype"): Xrm.OptionSetAttribute<dynamicproperty_datatypecode>;
      get(name: "defaultvaluedecimal"): Xrm.NumberAttribute;
      get(name: "defaultvaluedouble"): Xrm.NumberAttribute;
      get(name: "defaultvalueinteger"): Xrm.NumberAttribute;
      get(name: "defaultvalueoptionset"): Xrm.LookupAttribute<"dynamicpropertyoptionsetitem">;
      get(name: "defaultvaluestring"): Xrm.Attribute<string>;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "ishidden"): Xrm.OptionSetAttribute<boolean>;
      get(name: "isreadonly"): Xrm.OptionSetAttribute<boolean>;
      get(name: "isrequired"): Xrm.OptionSetAttribute<boolean>;
      get(name: "maxlengthstring"): Xrm.NumberAttribute;
      get(name: "maxvaluedecimal"): Xrm.NumberAttribute;
      get(name: "maxvaluedouble"): Xrm.NumberAttribute;
      get(name: "maxvalueinteger"): Xrm.NumberAttribute;
      get(name: "minvaluedecimal"): Xrm.NumberAttribute;
      get(name: "minvaluedouble"): Xrm.NumberAttribute;
      get(name: "minvalueinteger"): Xrm.NumberAttribute;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "precision"): Xrm.NumberAttribute;
      get(name: "regardingobjectid"): Xrm.LookupAttribute<"product">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "datatype"): Xrm.OptionSetControl<dynamicproperty_datatypecode>;
      get(name: "defaultvaluedecimal"): Xrm.NumberControl;
      get(name: "defaultvaluedouble"): Xrm.NumberControl;
      get(name: "defaultvalueinteger"): Xrm.NumberControl;
      get(name: "defaultvalueoptionset"): Xrm.LookupControl<"dynamicpropertyoptionsetitem">;
      get(name: "defaultvaluestring"): Xrm.StringControl;
      get(name: "description"): Xrm.StringControl;
      get(name: "ishidden"): Xrm.OptionSetControl<boolean>;
      get(name: "isreadonly"): Xrm.OptionSetControl<boolean>;
      get(name: "isrequired"): Xrm.OptionSetControl<boolean>;
      get(name: "maxlengthstring"): Xrm.NumberControl;
      get(name: "maxvaluedecimal"): Xrm.NumberControl;
      get(name: "maxvaluedouble"): Xrm.NumberControl;
      get(name: "maxvalueinteger"): Xrm.NumberControl;
      get(name: "minvaluedecimal"): Xrm.NumberControl;
      get(name: "minvaluedouble"): Xrm.NumberControl;
      get(name: "minvalueinteger"): Xrm.NumberControl;
      get(name: "name"): Xrm.StringControl;
      get(name: "precision"): Xrm.NumberControl;
      get(name: "regardingobjectid"): Xrm.LookupControl<"product">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "dynamic_property_summary"): Xrm.PageTab<Tabs.dynamic_property_summary>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface PropertyQuickCreate extends Xrm.PageBase<PropertyQuickCreate.Attributes,PropertyQuickCreate.Tabs,PropertyQuickCreate.Controls> {
    getAttribute(attributeName: "datatype"): Xrm.OptionSetAttribute<dynamicproperty_datatypecode>;
    getAttribute(attributeName: "defaultvaluedecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "defaultvaluedouble"): Xrm.NumberAttribute;
    getAttribute(attributeName: "defaultvalueinteger"): Xrm.NumberAttribute;
    getAttribute(attributeName: "defaultvalueoptionset"): Xrm.LookupAttribute<"dynamicpropertyoptionsetitem">;
    getAttribute(attributeName: "defaultvaluestring"): Xrm.Attribute<string>;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ishidden"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "isreadonly"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "isrequired"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "maxlengthstring"): Xrm.NumberAttribute;
    getAttribute(attributeName: "maxvaluedecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "maxvaluedouble"): Xrm.NumberAttribute;
    getAttribute(attributeName: "maxvalueinteger"): Xrm.NumberAttribute;
    getAttribute(attributeName: "minvaluedecimal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "minvaluedouble"): Xrm.NumberAttribute;
    getAttribute(attributeName: "minvalueinteger"): Xrm.NumberAttribute;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "precision"): Xrm.NumberAttribute;
    getAttribute(attributeName: "regardingobjectid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "datatype"): Xrm.OptionSetControl<dynamicproperty_datatypecode>;
    getControl(controlName: "defaultvaluedecimal"): Xrm.NumberControl;
    getControl(controlName: "defaultvaluedouble"): Xrm.NumberControl;
    getControl(controlName: "defaultvalueinteger"): Xrm.NumberControl;
    getControl(controlName: "defaultvalueoptionset"): Xrm.LookupControl<"dynamicpropertyoptionsetitem">;
    getControl(controlName: "defaultvaluestring"): Xrm.StringControl;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "ishidden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isreadonly"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isrequired"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "maxlengthstring"): Xrm.NumberControl;
    getControl(controlName: "maxvaluedecimal"): Xrm.NumberControl;
    getControl(controlName: "maxvaluedouble"): Xrm.NumberControl;
    getControl(controlName: "maxvalueinteger"): Xrm.NumberControl;
    getControl(controlName: "minvaluedecimal"): Xrm.NumberControl;
    getControl(controlName: "minvaluedouble"): Xrm.NumberControl;
    getControl(controlName: "minvalueinteger"): Xrm.NumberControl;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "precision"): Xrm.NumberControl;
    getControl(controlName: "regardingobjectid"): Xrm.LookupControl<"product">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
