declare namespace Form.uom.QuickCreate {
  namespace UnitofMeasureQuickCreate {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "unit of measure information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "baseuom"): Xrm.LookupAttribute<"uom">;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "quantity"): Xrm.NumberAttribute;
      get(name: "uomscheduleid"): Xrm.LookupAttribute<"uomschedule">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "baseuom"): Xrm.LookupControl<"uom">;
      get(name: "name"): Xrm.StringControl;
      get(name: "quantity"): Xrm.NumberControl;
      get(name: "uomscheduleid"): Xrm.LookupControl<"uomschedule">;
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
  interface UnitofMeasureQuickCreate extends Xrm.PageBase<UnitofMeasureQuickCreate.Attributes,UnitofMeasureQuickCreate.Tabs,UnitofMeasureQuickCreate.Controls> {
    getAttribute(attributeName: "baseuom"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "uomscheduleid"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "baseuom"): Xrm.LookupControl<"uom">;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "quantity"): Xrm.NumberControl;
    getControl(controlName: "uomscheduleid"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
