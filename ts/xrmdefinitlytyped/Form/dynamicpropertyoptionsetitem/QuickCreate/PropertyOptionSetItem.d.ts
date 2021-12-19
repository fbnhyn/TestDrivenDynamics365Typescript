declare namespace Form.dynamicpropertyoptionsetitem.QuickCreate {
  namespace PropertyOptionSetItem {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "dynamicpropertyoptionsetiteminformation"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "dynamicpropertyid"): Xrm.LookupAttribute<"dynamicproperty">;
      get(name: "dynamicpropertyoptiondescription"): Xrm.Attribute<string>;
      get(name: "dynamicpropertyoptionname"): Xrm.Attribute<string>;
      get(name: "dynamicpropertyoptionvalue"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "dynamicpropertyid"): Xrm.LookupControl<"dynamicproperty">;
      get(name: "dynamicpropertyoptiondescription"): Xrm.StringControl;
      get(name: "dynamicpropertyoptionname"): Xrm.StringControl;
      get(name: "dynamicpropertyoptionvalue"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface PropertyOptionSetItem extends Xrm.PageBase<PropertyOptionSetItem.Attributes,PropertyOptionSetItem.Tabs,PropertyOptionSetItem.Controls> {
    getAttribute(attributeName: "dynamicpropertyid"): Xrm.LookupAttribute<"dynamicproperty">;
    getAttribute(attributeName: "dynamicpropertyoptiondescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "dynamicpropertyoptionname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "dynamicpropertyoptionvalue"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "dynamicpropertyid"): Xrm.LookupControl<"dynamicproperty">;
    getControl(controlName: "dynamicpropertyoptiondescription"): Xrm.StringControl;
    getControl(controlName: "dynamicpropertyoptionname"): Xrm.StringControl;
    getControl(controlName: "dynamicpropertyoptionvalue"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
