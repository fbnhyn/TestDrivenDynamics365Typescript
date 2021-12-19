declare namespace Form.discount.Main {
  namespace Information {
    namespace Tabs {
      interface general extends Xrm.SectionCollectionBase {
        get(name: "discount information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "amount"): Xrm.NumberAttribute;
      get(name: "discounttypeid"): Xrm.LookupAttribute<"discounttype">;
      get(name: "highquantity"): Xrm.NumberAttribute;
      get(name: "lowquantity"): Xrm.NumberAttribute;
      get(name: "percentage"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "amount"): Xrm.NumberControl;
      get(name: "discounttypeid"): Xrm.LookupControl<"discounttype">;
      get(name: "highquantity"): Xrm.NumberControl;
      get(name: "lowquantity"): Xrm.NumberControl;
      get(name: "percentage"): Xrm.NumberControl;
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
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discounttypeid"): Xrm.LookupAttribute<"discounttype">;
    getAttribute(attributeName: "highquantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "lowquantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "percentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "amount"): Xrm.NumberControl;
    getControl(controlName: "discounttypeid"): Xrm.LookupControl<"discounttype">;
    getControl(controlName: "highquantity"): Xrm.NumberControl;
    getControl(controlName: "lowquantity"): Xrm.NumberControl;
    getControl(controlName: "percentage"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
