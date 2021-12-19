declare namespace Form.productpricelevel.Main {
  namespace ProductPriceList {
    namespace Tabs {
      interface Pricinginformation extends Xrm.SectionCollectionBase {
        get(name: "pricing"): Xrm.PageSection;
        get(name: "rounding"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "Currency"): Xrm.PageSection;
        get(name: "price list item information"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "amount"): Xrm.NumberAttribute;
      get(name: "discounttypeid"): Xrm.LookupAttribute<"discounttype">;
      get(name: "percentage"): Xrm.NumberAttribute;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "pricingmethodcode"): Xrm.OptionSetAttribute<productpricelevel_pricingmethodcode>;
      get(name: "productid"): Xrm.LookupAttribute<"product">;
      get(name: "quantitysellingcode"): Xrm.OptionSetAttribute<productpricelevel_quantitysellingcode>;
      get(name: "roundingoptionamount"): Xrm.NumberAttribute;
      get(name: "roundingoptioncode"): Xrm.OptionSetAttribute<productpricelevel_roundingoptioncode>;
      get(name: "roundingpolicycode"): Xrm.OptionSetAttribute<productpricelevel_roundingpolicycode>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "uomid"): Xrm.LookupAttribute<"uom">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "amount"): Xrm.NumberControl;
      get(name: "discounttypeid"): Xrm.LookupControl<"discounttype">;
      get(name: "percentage"): Xrm.NumberControl;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "pricingmethodcode"): Xrm.OptionSetControl<productpricelevel_pricingmethodcode>;
      get(name: "productid"): Xrm.LookupControl<"product">;
      get(name: "quantitysellingcode"): Xrm.OptionSetControl<productpricelevel_quantitysellingcode>;
      get(name: "roundingoptionamount"): Xrm.NumberControl;
      get(name: "roundingoptioncode"): Xrm.OptionSetControl<productpricelevel_roundingoptioncode>;
      get(name: "roundingpolicycode"): Xrm.OptionSetControl<productpricelevel_roundingpolicycode>;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "uomid"): Xrm.LookupControl<"uom">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Pricing information"): Xrm.PageTab<Tabs.Pricinginformation>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProductPriceList extends Xrm.PageBase<ProductPriceList.Attributes,ProductPriceList.Tabs,ProductPriceList.Controls> {
    getAttribute(attributeName: "amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discounttypeid"): Xrm.LookupAttribute<"discounttype">;
    getAttribute(attributeName: "percentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "pricingmethodcode"): Xrm.OptionSetAttribute<productpricelevel_pricingmethodcode>;
    getAttribute(attributeName: "productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "quantitysellingcode"): Xrm.OptionSetAttribute<productpricelevel_quantitysellingcode>;
    getAttribute(attributeName: "roundingoptionamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "roundingoptioncode"): Xrm.OptionSetAttribute<productpricelevel_roundingoptioncode>;
    getAttribute(attributeName: "roundingpolicycode"): Xrm.OptionSetAttribute<productpricelevel_roundingpolicycode>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "uomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "amount"): Xrm.NumberControl;
    getControl(controlName: "discounttypeid"): Xrm.LookupControl<"discounttype">;
    getControl(controlName: "percentage"): Xrm.NumberControl;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "pricingmethodcode"): Xrm.OptionSetControl<productpricelevel_pricingmethodcode>;
    getControl(controlName: "productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "quantitysellingcode"): Xrm.OptionSetControl<productpricelevel_quantitysellingcode>;
    getControl(controlName: "roundingoptionamount"): Xrm.NumberControl;
    getControl(controlName: "roundingoptioncode"): Xrm.OptionSetControl<productpricelevel_roundingoptioncode>;
    getControl(controlName: "roundingpolicycode"): Xrm.OptionSetControl<productpricelevel_roundingpolicycode>;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "uomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
