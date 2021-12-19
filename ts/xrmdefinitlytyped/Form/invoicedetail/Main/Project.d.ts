declare namespace Form.invoicedetail.Main {
  namespace Project {
    namespace Tabs {
      interface ChargeableTransactionsTab extends Xrm.SectionCollectionBase {
        get(name: "TransactionsSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ComplimentaryTransactionsTab extends Xrm.SectionCollectionBase {
        get(name: "tab_6_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface HiddenFields extends Xrm.SectionCollectionBase {
        get(name: "tab_8_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface HiddenTab_Deprecated extends Xrm.SectionCollectionBase {
        get(name: "HiddenTab_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface MilestonesTab extends Xrm.SectionCollectionBase {
        get(name: "tab_9_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface NonChargeableTransactionsTab extends Xrm.SectionCollectionBase {
        get(name: "tab_7_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ProductTab extends Xrm.SectionCollectionBase {
        get(name: "invoice detail information"): Xrm.PageSection;
        get(name: "pricing"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ProjectTab extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface address extends Xrm.SectionCollectionBase {
        get(name: "ship to address"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface delivery extends Xrm.SectionCollectionBase {
        get(name: "delivery information"): Xrm.PageSection;
        get(name: "fulfillment"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "actualdeliveryon"): Xrm.DateAttribute;
      get(name: "baseamount"): Xrm.NumberAttribute;
      get(name: "extendedamount"): Xrm.NumberAttribute;
      get(name: "invoiceid"): Xrm.LookupAttribute<"invoice">;
      get(name: "ispriceoverridden"): Xrm.OptionSetAttribute<boolean>;
      get(name: "isproductoverridden"): Xrm.OptionSetAttribute<boolean>;
      get(name: "manualdiscountamount"): Xrm.NumberAttribute;
      get(name: "msdyn_billingmethod"): Xrm.OptionSetAttribute<msdyn_billingmethod>;
      get(name: "msdyn_chargeableamount"): Xrm.NumberAttribute;
      get(name: "msdyn_complimentaryamount"): Xrm.NumberAttribute;
      get(name: "msdyn_contractlineamount"): Xrm.NumberAttribute;
      get(name: "msdyn_invoicedtilldate"): Xrm.NumberAttribute;
      get(name: "msdyn_nonchargeableamount"): Xrm.NumberAttribute;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "priceperunit"): Xrm.NumberAttribute;
      get(name: "productdescription"): Xrm.Attribute<string>;
      get(name: "productid"): Xrm.LookupAttribute<"product">;
      get(name: "producttypecode"): Xrm.OptionSetAttribute<qooiproduct_producttype>;
      get(name: "quantity"): Xrm.NumberAttribute;
      get(name: "quantitybackordered"): Xrm.NumberAttribute;
      get(name: "quantitycancelled"): Xrm.NumberAttribute;
      get(name: "quantityshipped"): Xrm.NumberAttribute;
      get(name: "salesorderdetailid"): Xrm.LookupAttribute<"salesorderdetail">;
      get(name: "salesrepid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "shipto_city"): Xrm.Attribute<string>;
      get(name: "shipto_country"): Xrm.Attribute<string>;
      get(name: "shipto_fax"): Xrm.Attribute<string>;
      get(name: "shipto_freighttermscode"): Xrm.OptionSetAttribute<invoicedetail_shipto_freighttermscode>;
      get(name: "shipto_line1"): Xrm.Attribute<string>;
      get(name: "shipto_line2"): Xrm.Attribute<string>;
      get(name: "shipto_line3"): Xrm.Attribute<string>;
      get(name: "shipto_name"): Xrm.Attribute<string>;
      get(name: "shipto_postalcode"): Xrm.Attribute<string>;
      get(name: "shipto_stateorprovince"): Xrm.Attribute<string>;
      get(name: "shipto_telephone"): Xrm.Attribute<string>;
      get(name: "tax"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "uomid"): Xrm.LookupAttribute<"uom">;
      get(name: "volumediscountamount"): Xrm.NumberAttribute;
      get(name: "willcall"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ChargeableTransactionsGrid"): Xrm.SubGridControl<"msdyn_invoicelinetransaction">;
      get(name: "ComplimentaryTransactionsGrid"): Xrm.SubGridControl<"msdyn_invoicelinetransaction">;
      get(name: "MilestonesGrid"): Xrm.SubGridControl<"msdyn_invoicelinetransaction">;
      get(name: "NonChargeableTransactionsGrid"): Xrm.SubGridControl<"msdyn_invoicelinetransaction">;
      get(name: "actualdeliveryon"): Xrm.DateControl;
      get(name: "baseamount"): Xrm.NumberControl;
      get(name: "baseamount1"): Xrm.NumberControl;
      get(name: "extendedamount"): Xrm.NumberControl;
      get(name: "invoiceid"): Xrm.LookupControl<"invoice">;
      get(name: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "manualdiscountamount"): Xrm.NumberControl;
      get(name: "msdyn_billingmethod"): Xrm.OptionSetControl<msdyn_billingmethod>;
      get(name: "msdyn_chargeableamount"): Xrm.NumberControl;
      get(name: "msdyn_complimentaryamount"): Xrm.NumberControl;
      get(name: "msdyn_contractlineamount"): Xrm.NumberControl;
      get(name: "msdyn_invoicedtilldate"): Xrm.NumberControl;
      get(name: "msdyn_nonchargeableamount"): Xrm.NumberControl;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "priceperunit"): Xrm.NumberControl;
      get(name: "productdescription"): Xrm.StringControl;
      get(name: "productdescription1"): Xrm.StringControl;
      get(name: "productid"): Xrm.LookupControl<"product">;
      get(name: "producttypecode"): Xrm.OptionSetControl<qooiproduct_producttype>;
      get(name: "quantity"): Xrm.NumberControl;
      get(name: "quantitybackordered"): Xrm.NumberControl;
      get(name: "quantitycancelled"): Xrm.NumberControl;
      get(name: "quantityshipped"): Xrm.NumberControl;
      get(name: "salesorderdetailid"): Xrm.LookupControl<"salesorderdetail">;
      get(name: "salesrepid"): Xrm.LookupControl<"systemuser">;
      get(name: "shipto_city"): Xrm.StringControl;
      get(name: "shipto_country"): Xrm.StringControl;
      get(name: "shipto_fax"): Xrm.StringControl;
      get(name: "shipto_freighttermscode"): Xrm.OptionSetControl<invoicedetail_shipto_freighttermscode>;
      get(name: "shipto_line1"): Xrm.StringControl;
      get(name: "shipto_line2"): Xrm.StringControl;
      get(name: "shipto_line3"): Xrm.StringControl;
      get(name: "shipto_name"): Xrm.StringControl;
      get(name: "shipto_postalcode"): Xrm.StringControl;
      get(name: "shipto_stateorprovince"): Xrm.StringControl;
      get(name: "shipto_telephone"): Xrm.StringControl;
      get(name: "tax"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "uomid"): Xrm.LookupControl<"uom">;
      get(name: "volumediscountamount"): Xrm.NumberControl;
      get(name: "willcall"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ChargeableTransactionsTab"): Xrm.PageTab<Tabs.ChargeableTransactionsTab>;
      get(name: "ComplimentaryTransactionsTab"): Xrm.PageTab<Tabs.ComplimentaryTransactionsTab>;
      get(name: "HiddenFields"): Xrm.PageTab<Tabs.HiddenFields>;
      get(name: "HiddenTab_Deprecated"): Xrm.PageTab<Tabs.HiddenTab_Deprecated>;
      get(name: "MilestonesTab"): Xrm.PageTab<Tabs.MilestonesTab>;
      get(name: "NonChargeableTransactionsTab"): Xrm.PageTab<Tabs.NonChargeableTransactionsTab>;
      get(name: "ProductTab"): Xrm.PageTab<Tabs.ProductTab>;
      get(name: "ProjectTab"): Xrm.PageTab<Tabs.ProjectTab>;
      get(name: "address"): Xrm.PageTab<Tabs.address>;
      get(name: "delivery"): Xrm.PageTab<Tabs.delivery>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Project extends Xrm.PageBase<Project.Attributes,Project.Tabs,Project.Controls> {
    getAttribute(attributeName: "actualdeliveryon"): Xrm.DateAttribute;
    getAttribute(attributeName: "baseamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "extendedamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "invoiceid"): Xrm.LookupAttribute<"invoice">;
    getAttribute(attributeName: "ispriceoverridden"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "isproductoverridden"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "manualdiscountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_billingmethod"): Xrm.OptionSetAttribute<msdyn_billingmethod>;
    getAttribute(attributeName: "msdyn_chargeableamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_complimentaryamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_contractlineamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_invoicedtilldate"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_nonchargeableamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "priceperunit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "productdescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "producttypecode"): Xrm.OptionSetAttribute<qooiproduct_producttype>;
    getAttribute(attributeName: "quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "quantitybackordered"): Xrm.NumberAttribute;
    getAttribute(attributeName: "quantitycancelled"): Xrm.NumberAttribute;
    getAttribute(attributeName: "quantityshipped"): Xrm.NumberAttribute;
    getAttribute(attributeName: "salesorderdetailid"): Xrm.LookupAttribute<"salesorderdetail">;
    getAttribute(attributeName: "salesrepid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "shipto_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_freighttermscode"): Xrm.OptionSetAttribute<invoicedetail_shipto_freighttermscode>;
    getAttribute(attributeName: "shipto_line1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_line2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_line3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_telephone"): Xrm.Attribute<string>;
    getAttribute(attributeName: "tax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "uomid"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "volumediscountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "willcall"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ChargeableTransactionsGrid"): Xrm.SubGridControl<"msdyn_invoicelinetransaction">;
    getControl(controlName: "ComplimentaryTransactionsGrid"): Xrm.SubGridControl<"msdyn_invoicelinetransaction">;
    getControl(controlName: "MilestonesGrid"): Xrm.SubGridControl<"msdyn_invoicelinetransaction">;
    getControl(controlName: "NonChargeableTransactionsGrid"): Xrm.SubGridControl<"msdyn_invoicelinetransaction">;
    getControl(controlName: "actualdeliveryon"): Xrm.DateControl;
    getControl(controlName: "baseamount"): Xrm.NumberControl;
    getControl(controlName: "baseamount1"): Xrm.NumberControl;
    getControl(controlName: "extendedamount"): Xrm.NumberControl;
    getControl(controlName: "invoiceid"): Xrm.LookupControl<"invoice">;
    getControl(controlName: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "manualdiscountamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_billingmethod"): Xrm.OptionSetControl<msdyn_billingmethod>;
    getControl(controlName: "msdyn_chargeableamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_complimentaryamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_contractlineamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_invoicedtilldate"): Xrm.NumberControl;
    getControl(controlName: "msdyn_nonchargeableamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "priceperunit"): Xrm.NumberControl;
    getControl(controlName: "productdescription"): Xrm.StringControl;
    getControl(controlName: "productdescription1"): Xrm.StringControl;
    getControl(controlName: "productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "producttypecode"): Xrm.OptionSetControl<qooiproduct_producttype>;
    getControl(controlName: "quantity"): Xrm.NumberControl;
    getControl(controlName: "quantitybackordered"): Xrm.NumberControl;
    getControl(controlName: "quantitycancelled"): Xrm.NumberControl;
    getControl(controlName: "quantityshipped"): Xrm.NumberControl;
    getControl(controlName: "salesorderdetailid"): Xrm.LookupControl<"salesorderdetail">;
    getControl(controlName: "salesrepid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "shipto_city"): Xrm.StringControl;
    getControl(controlName: "shipto_country"): Xrm.StringControl;
    getControl(controlName: "shipto_fax"): Xrm.StringControl;
    getControl(controlName: "shipto_freighttermscode"): Xrm.OptionSetControl<invoicedetail_shipto_freighttermscode>;
    getControl(controlName: "shipto_line1"): Xrm.StringControl;
    getControl(controlName: "shipto_line2"): Xrm.StringControl;
    getControl(controlName: "shipto_line3"): Xrm.StringControl;
    getControl(controlName: "shipto_name"): Xrm.StringControl;
    getControl(controlName: "shipto_postalcode"): Xrm.StringControl;
    getControl(controlName: "shipto_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "shipto_telephone"): Xrm.StringControl;
    getControl(controlName: "tax"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "uomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: "volumediscountamount"): Xrm.NumberControl;
    getControl(controlName: "willcall"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
