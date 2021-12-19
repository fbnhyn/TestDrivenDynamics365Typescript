declare namespace Form.opportunityproduct.Main {
  namespace ProjectInformation {
    namespace Tabs {
      interface ProductGeneralTab extends Xrm.SectionCollectionBase {
        get(name: "opportunity product information"): Xrm.PageSection;
        get(name: "pricing"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ProjectGeneralTab extends Xrm.SectionCollectionBase {
        get(name: "ProjectSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "baseamount"): Xrm.NumberAttribute;
      get(name: "extendedamount"): Xrm.NumberAttribute;
      get(name: "ispriceoverridden"): Xrm.OptionSetAttribute<boolean>;
      get(name: "isproductoverridden"): Xrm.OptionSetAttribute<boolean>;
      get(name: "manualdiscountamount"): Xrm.NumberAttribute;
      get(name: "msdyn_billingmethod"): Xrm.OptionSetAttribute<msdyn_billingmethod>;
      get(name: "msdyn_budgetamount"): Xrm.NumberAttribute;
      get(name: "msdyn_linetype"): Xrm.OptionSetAttribute<msdyn_linetype>;
      get(name: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
      get(name: "priceperunit"): Xrm.NumberAttribute;
      get(name: "productdescription"): Xrm.Attribute<string>;
      get(name: "productid"): Xrm.LookupAttribute<"product">;
      get(name: "producttypecode"): Xrm.OptionSetAttribute<qooiproduct_producttype>;
      get(name: "quantity"): Xrm.NumberAttribute;
      get(name: "tax"): Xrm.NumberAttribute;
      get(name: "uomid"): Xrm.LookupAttribute<"uom">;
      get(name: "volumediscountamount"): Xrm.NumberAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "baseamount"): Xrm.NumberControl;
      get(name: "extendedamount"): Xrm.NumberControl;
      get(name: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "manualdiscountamount"): Xrm.NumberControl;
      get(name: "msdyn_billingmethod"): Xrm.OptionSetControl<msdyn_billingmethod>;
      get(name: "msdyn_budgetamount"): Xrm.NumberControl;
      get(name: "msdyn_budgetamount1"): Xrm.NumberControl;
      get(name: "msdyn_linetype"): Xrm.OptionSetControl<msdyn_linetype>;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "opportunityid1"): Xrm.LookupControl<"opportunity">;
      get(name: "priceperunit"): Xrm.NumberControl;
      get(name: "productdescription"): Xrm.StringControl;
      get(name: "productdescription1"): Xrm.StringControl;
      get(name: "productid"): Xrm.LookupControl<"product">;
      get(name: "producttypecode"): Xrm.OptionSetControl<qooiproduct_producttype>;
      get(name: "producttypecode1"): Xrm.OptionSetControl<qooiproduct_producttype>;
      get(name: "producttypecode2"): Xrm.OptionSetControl<qooiproduct_producttype>;
      get(name: "quantity"): Xrm.NumberControl;
      get(name: "tax"): Xrm.NumberControl;
      get(name: "uomid"): Xrm.LookupControl<"uom">;
      get(name: "volumediscountamount"): Xrm.NumberControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ProductGeneralTab"): Xrm.PageTab<Tabs.ProductGeneralTab>;
      get(name: "ProjectGeneralTab"): Xrm.PageTab<Tabs.ProjectGeneralTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProjectInformation extends Xrm.PageBase<ProjectInformation.Attributes,ProjectInformation.Tabs,ProjectInformation.Controls> {
    getAttribute(attributeName: "baseamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "extendedamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ispriceoverridden"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "isproductoverridden"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "manualdiscountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_billingmethod"): Xrm.OptionSetAttribute<msdyn_billingmethod>;
    getAttribute(attributeName: "msdyn_budgetamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_linetype"): Xrm.OptionSetAttribute<msdyn_linetype>;
    getAttribute(attributeName: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
    getAttribute(attributeName: "priceperunit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "productdescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "producttypecode"): Xrm.OptionSetAttribute<qooiproduct_producttype>;
    getAttribute(attributeName: "quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "tax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "uomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "volumediscountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "baseamount"): Xrm.NumberControl;
    getControl(controlName: "extendedamount"): Xrm.NumberControl;
    getControl(controlName: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "manualdiscountamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_billingmethod"): Xrm.OptionSetControl<msdyn_billingmethod>;
    getControl(controlName: "msdyn_budgetamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_budgetamount1"): Xrm.NumberControl;
    getControl(controlName: "msdyn_linetype"): Xrm.OptionSetControl<msdyn_linetype>;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "opportunityid1"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "priceperunit"): Xrm.NumberControl;
    getControl(controlName: "productdescription"): Xrm.StringControl;
    getControl(controlName: "productdescription1"): Xrm.StringControl;
    getControl(controlName: "productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "producttypecode"): Xrm.OptionSetControl<qooiproduct_producttype>;
    getControl(controlName: "producttypecode1"): Xrm.OptionSetControl<qooiproduct_producttype>;
    getControl(controlName: "producttypecode2"): Xrm.OptionSetControl<qooiproduct_producttype>;
    getControl(controlName: "quantity"): Xrm.NumberControl;
    getControl(controlName: "tax"): Xrm.NumberControl;
    getControl(controlName: "uomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: "volumediscountamount"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
