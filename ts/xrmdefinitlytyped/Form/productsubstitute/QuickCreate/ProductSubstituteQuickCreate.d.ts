declare namespace Form.productsubstitute.QuickCreate {
  namespace ProductSubstituteQuickCreate {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "direction"): Xrm.OptionSetAttribute<productsellingrelationshipdirection>;
      get(name: "productid"): Xrm.LookupAttribute<"product">;
      get(name: "salesrelationshiptype"): Xrm.OptionSetAttribute<productsellingrelationshiptype>;
      get(name: "substitutedproductid"): Xrm.LookupAttribute<"product">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "direction"): Xrm.OptionSetControl<productsellingrelationshipdirection>;
      get(name: "productid"): Xrm.LookupControl<"product">;
      get(name: "salesrelationshiptype"): Xrm.OptionSetControl<productsellingrelationshiptype>;
      get(name: "substitutedproductid"): Xrm.LookupControl<"product">;
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
  interface ProductSubstituteQuickCreate extends Xrm.PageBase<ProductSubstituteQuickCreate.Attributes,ProductSubstituteQuickCreate.Tabs,ProductSubstituteQuickCreate.Controls> {
    getAttribute(attributeName: "direction"): Xrm.OptionSetAttribute<productsellingrelationshipdirection>;
    getAttribute(attributeName: "productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "salesrelationshiptype"): Xrm.OptionSetAttribute<productsellingrelationshiptype>;
    getAttribute(attributeName: "substitutedproductid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "direction"): Xrm.OptionSetControl<productsellingrelationshipdirection>;
    getControl(controlName: "productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "salesrelationshiptype"): Xrm.OptionSetControl<productsellingrelationshiptype>;
    getControl(controlName: "substitutedproductid"): Xrm.LookupControl<"product">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
