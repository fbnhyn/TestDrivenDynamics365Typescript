declare namespace Form.productassociation.Main {
  namespace ProductAssociation {
    namespace Tabs {
      interface product_association_dynamic_properties extends Xrm.SectionCollectionBase {
        get(name: "product_association_dynamic_properties_section"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "associatedproduct"): Xrm.LookupAttribute<"product">;
      get(name: "productid"): Xrm.LookupAttribute<"product">;
      get(name: "productisrequired"): Xrm.OptionSetAttribute<productassociate_productisrequired>;
      get(name: "quantity"): Xrm.NumberAttribute;
      get(name: "uomid"): Xrm.LookupAttribute<"uom">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "associatedproduct"): Xrm.LookupControl<"product">;
      get(name: "product_association_dynamic_properties"): Xrm.SubGridControl<"dynamicproperty">;
      get(name: "productid"): Xrm.LookupControl<"product">;
      get(name: "productisrequired"): Xrm.OptionSetControl<productassociate_productisrequired>;
      get(name: "quantity"): Xrm.NumberControl;
      get(name: "uomid"): Xrm.LookupControl<"uom">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "product_association_dynamic_properties"): Xrm.PageTab<Tabs.product_association_dynamic_properties>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProductAssociation extends Xrm.PageBase<ProductAssociation.Attributes,ProductAssociation.Tabs,ProductAssociation.Controls> {
    getAttribute(attributeName: "associatedproduct"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "productisrequired"): Xrm.OptionSetAttribute<productassociate_productisrequired>;
    getAttribute(attributeName: "quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "uomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "associatedproduct"): Xrm.LookupControl<"product">;
    getControl(controlName: "product_association_dynamic_properties"): Xrm.SubGridControl<"dynamicproperty">;
    getControl(controlName: "productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "productisrequired"): Xrm.OptionSetControl<productassociate_productisrequired>;
    getControl(controlName: "quantity"): Xrm.NumberControl;
    getControl(controlName: "uomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
