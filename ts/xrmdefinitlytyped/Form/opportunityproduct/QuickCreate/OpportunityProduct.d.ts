declare namespace Form.opportunityproduct.QuickCreate {
  namespace OpportunityProduct {
    namespace Tabs {
      interface newOpportunityProduct extends Xrm.SectionCollectionBase {
        get(name: "opportunity product information"): Xrm.PageSection;
        get(name: "pricing"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "ispriceoverridden"): Xrm.OptionSetAttribute<boolean>;
      get(name: "isproductoverridden"): Xrm.OptionSetAttribute<boolean>;
      get(name: "manualdiscountamount"): Xrm.NumberAttribute;
      get(name: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
      get(name: "priceperunit"): Xrm.NumberAttribute;
      get(name: "productdescription"): Xrm.Attribute<string>;
      get(name: "productid"): Xrm.LookupAttribute<"product">;
      get(name: "quantity"): Xrm.NumberAttribute;
      get(name: "tax"): Xrm.NumberAttribute;
      get(name: "uomid"): Xrm.LookupAttribute<"uom">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "manualdiscountamount"): Xrm.NumberControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "priceperunit"): Xrm.NumberControl;
      get(name: "productdescription"): Xrm.StringControl;
      get(name: "productid"): Xrm.LookupControl<"product">;
      get(name: "quantity"): Xrm.NumberControl;
      get(name: "tax"): Xrm.NumberControl;
      get(name: "uomid"): Xrm.LookupControl<"uom">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "newOpportunityProduct"): Xrm.PageTab<Tabs.newOpportunityProduct>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface OpportunityProduct extends Xrm.PageBase<OpportunityProduct.Attributes,OpportunityProduct.Tabs,OpportunityProduct.Controls> {
    getAttribute(attributeName: "ispriceoverridden"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "isproductoverridden"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "manualdiscountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
    getAttribute(attributeName: "priceperunit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "productdescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "tax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "uomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "manualdiscountamount"): Xrm.NumberControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "priceperunit"): Xrm.NumberControl;
    getControl(controlName: "productdescription"): Xrm.StringControl;
    getControl(controlName: "productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "quantity"): Xrm.NumberControl;
    getControl(controlName: "tax"): Xrm.NumberControl;
    getControl(controlName: "uomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
