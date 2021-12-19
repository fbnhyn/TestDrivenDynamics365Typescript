declare namespace Form.product.Quick {
  namespace ProductHierarchyTileForm {
    namespace Tabs {
      interface hierarchy extends Xrm.SectionCollectionBase {
        get(name: "user tile"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "defaultuomid"): Xrm.LookupAttribute<"uom">;
      get(name: "productnumber"): Xrm.Attribute<string>;
      get(name: "productstructure"): Xrm.OptionSetAttribute<product_productstructure>;
      get(name: "statuscode"): Xrm.OptionSetAttribute<product_statuscode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "defaultuomid"): Xrm.LookupControl<"uom">;
      get(name: "productnumber"): Xrm.StringControl;
      get(name: "productstructure"): Xrm.OptionSetControl<product_productstructure>;
      get(name: "statuscode"): Xrm.OptionSetControl<product_statuscode>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "hierarchy"): Xrm.PageTab<Tabs.hierarchy>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProductHierarchyTileForm extends Xrm.PageBase<ProductHierarchyTileForm.Attributes,ProductHierarchyTileForm.Tabs,ProductHierarchyTileForm.Controls> {
    getAttribute(attributeName: "defaultuomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "productnumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "productstructure"): Xrm.OptionSetAttribute<product_productstructure>;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<product_statuscode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "defaultuomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: "productnumber"): Xrm.StringControl;
    getControl(controlName: "productstructure"): Xrm.OptionSetControl<product_productstructure>;
    getControl(controlName: "statuscode"): Xrm.OptionSetControl<product_statuscode>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
