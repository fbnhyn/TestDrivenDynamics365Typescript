declare namespace Form.quotedetail.Main {
  namespace ProjectInformation {
    namespace Tabs {
      interface ChargeableCategoriesTab extends Xrm.SectionCollectionBase {
        get(name: "ChargeableCategories"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ChargeableRolesTab extends Xrm.SectionCollectionBase {
        get(name: "ChargeableRoles"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface GeneralProductTab extends Xrm.SectionCollectionBase {
        get(name: "GeneralCostSection"): Xrm.PageSection;
        get(name: "GeneralProductSection"): Xrm.PageSection;
        get(name: "GeneralSalesSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface GeneralProjectTab extends Xrm.SectionCollectionBase {
        get(name: "AmountsSection"): Xrm.PageSection;
        get(name: "ProjectSection"): Xrm.PageSection;
        get(name: "TransactionTypesSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface InvoiceScheduleTab extends Xrm.SectionCollectionBase {
        get(name: "InvoiceScheduleSection"): Xrm.PageSection;
        get(name: "InvoiceScheduleTab_Header"): Xrm.PageSection;
        get(name: "MilestoneSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ProductTypeTab extends Xrm.SectionCollectionBase {
        get(name: "tab_8_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface TransactionsTab extends Xrm.SectionCollectionBase {
        get(name: "TransactionSection"): Xrm.PageSection;
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
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface general extends Xrm.SectionCollectionBase {
        get(name: "pricing"): Xrm.PageSection;
        get(name: "quote detail information"): Xrm.PageSection;
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
      get(name: "msdyn_billingstartdate"): Xrm.DateAttribute;
      get(name: "msdyn_budgetamount"): Xrm.NumberAttribute;
      get(name: "msdyn_costamount"): Xrm.NumberAttribute;
      get(name: "msdyn_costpriceperunit"): Xrm.NumberAttribute;
      get(name: "msdyn_includeexpense"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_includefee"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_includetime"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_invoicefrequency"): Xrm.LookupAttribute<"msdyn_invoicefrequency">;
      get(name: "msdyn_linetype"): Xrm.OptionSetAttribute<msdyn_linetype>;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "priceperunit"): Xrm.NumberAttribute;
      get(name: "productdescription"): Xrm.Attribute<string>;
      get(name: "productid"): Xrm.LookupAttribute<"product">;
      get(name: "producttypecode"): Xrm.OptionSetAttribute<qooiproduct_producttype>;
      get(name: "quantity"): Xrm.NumberAttribute;
      get(name: "quoteid"): Xrm.LookupAttribute<"quote">;
      get(name: "requestdeliveryby"): Xrm.DateAttribute;
      get(name: "salesrepid"): Xrm.LookupAttribute<"systemuser">;
      get(name: "shipto_city"): Xrm.Attribute<string>;
      get(name: "shipto_contactname"): Xrm.Attribute<string>;
      get(name: "shipto_country"): Xrm.Attribute<string>;
      get(name: "shipto_fax"): Xrm.Attribute<string>;
      get(name: "shipto_freighttermscode"): Xrm.OptionSetAttribute<quotedetail_shipto_freighttermscode>;
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
      get(name: "ChargeableCategoriesGrid"): Xrm.BaseControl;
      get(name: "ChargeableRolesGrid"): Xrm.BaseControl;
      get(name: "EstimationLines"): Xrm.BaseControl;
      get(name: "InvoiceScheduleGrid"): Xrm.SubGridControl<"msdyn_quotelineinvoiceschedule">;
      get(name: "MilestonesGrid"): Xrm.SubGridControl<"msdyn_quotelinescheduleofvalue">;
      get(name: "baseamount"): Xrm.NumberControl;
      get(name: "extendedamount"): Xrm.NumberControl;
      get(name: "extendedamount1"): Xrm.NumberControl;
      get(name: "extendedamount2"): Xrm.NumberControl;
      get(name: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
      get(name: "isproductoverridden1"): Xrm.OptionSetControl<boolean>;
      get(name: "manualdiscountamount"): Xrm.NumberControl;
      get(name: "msdyn_billingmethod"): Xrm.OptionSetControl<msdyn_billingmethod>;
      get(name: "msdyn_billingstartdate"): Xrm.DateControl;
      get(name: "msdyn_budgetamount"): Xrm.NumberControl;
      get(name: "msdyn_budgetamount1"): Xrm.NumberControl;
      get(name: "msdyn_costamount"): Xrm.NumberControl;
      get(name: "msdyn_costpriceperunit"): Xrm.NumberControl;
      get(name: "msdyn_includeexpense"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_includefee"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_includetime"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_invoicefrequency"): Xrm.LookupControl<"msdyn_invoicefrequency">;
      get(name: "msdyn_linetype"): Xrm.OptionSetControl<msdyn_linetype>;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "priceperunit"): Xrm.NumberControl;
      get(name: "priceperunit1"): Xrm.NumberControl;
      get(name: "priceperunit2"): Xrm.NumberControl;
      get(name: "productdescription"): Xrm.StringControl;
      get(name: "productdescription1"): Xrm.StringControl;
      get(name: "productdescription2"): Xrm.StringControl;
      get(name: "productid"): Xrm.LookupControl<"product">;
      get(name: "productid1"): Xrm.LookupControl<"product">;
      get(name: "producttypecode"): Xrm.OptionSetControl<qooiproduct_producttype>;
      get(name: "producttypecode1"): Xrm.OptionSetControl<qooiproduct_producttype>;
      get(name: "quantity"): Xrm.NumberControl;
      get(name: "quantity1"): Xrm.NumberControl;
      get(name: "quoteid"): Xrm.LookupControl<"quote">;
      get(name: "quoteid1"): Xrm.LookupControl<"quote">;
      get(name: "quoteid2"): Xrm.LookupControl<"quote">;
      get(name: "quoteid3"): Xrm.LookupControl<"quote">;
      get(name: "requestdeliveryby"): Xrm.DateControl;
      get(name: "requestdeliveryby1"): Xrm.DateControl;
      get(name: "salesrepid"): Xrm.LookupControl<"systemuser">;
      get(name: "shipto_city"): Xrm.StringControl;
      get(name: "shipto_contactname"): Xrm.StringControl;
      get(name: "shipto_country"): Xrm.StringControl;
      get(name: "shipto_fax"): Xrm.StringControl;
      get(name: "shipto_freighttermscode"): Xrm.OptionSetControl<quotedetail_shipto_freighttermscode>;
      get(name: "shipto_line1"): Xrm.StringControl;
      get(name: "shipto_line2"): Xrm.StringControl;
      get(name: "shipto_line3"): Xrm.StringControl;
      get(name: "shipto_name"): Xrm.StringControl;
      get(name: "shipto_postalcode"): Xrm.StringControl;
      get(name: "shipto_stateorprovince"): Xrm.StringControl;
      get(name: "shipto_telephone"): Xrm.StringControl;
      get(name: "tax"): Xrm.NumberControl;
      get(name: "tax1"): Xrm.NumberControl;
      get(name: "tax2"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "uomid"): Xrm.LookupControl<"uom">;
      get(name: "uomid1"): Xrm.LookupControl<"uom">;
      get(name: "volumediscountamount"): Xrm.NumberControl;
      get(name: "willcall"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ChargeableCategoriesTab"): Xrm.PageTab<Tabs.ChargeableCategoriesTab>;
      get(name: "ChargeableRolesTab"): Xrm.PageTab<Tabs.ChargeableRolesTab>;
      get(name: "GeneralProductTab"): Xrm.PageTab<Tabs.GeneralProductTab>;
      get(name: "GeneralProjectTab"): Xrm.PageTab<Tabs.GeneralProjectTab>;
      get(name: "InvoiceScheduleTab"): Xrm.PageTab<Tabs.InvoiceScheduleTab>;
      get(name: "ProductTypeTab"): Xrm.PageTab<Tabs.ProductTypeTab>;
      get(name: "TransactionsTab"): Xrm.PageTab<Tabs.TransactionsTab>;
      get(name: "address"): Xrm.PageTab<Tabs.address>;
      get(name: "delivery"): Xrm.PageTab<Tabs.delivery>;
      get(name: "general"): Xrm.PageTab<Tabs.general>;
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
    getAttribute(attributeName: "msdyn_billingstartdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_budgetamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_costamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_costpriceperunit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_includeexpense"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_includefee"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_includetime"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_invoicefrequency"): Xrm.LookupAttribute<"msdyn_invoicefrequency">;
    getAttribute(attributeName: "msdyn_linetype"): Xrm.OptionSetAttribute<msdyn_linetype>;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "priceperunit"): Xrm.NumberAttribute;
    getAttribute(attributeName: "productdescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "productid"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "producttypecode"): Xrm.OptionSetAttribute<qooiproduct_producttype>;
    getAttribute(attributeName: "quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "quoteid"): Xrm.LookupAttribute<"quote">;
    getAttribute(attributeName: "requestdeliveryby"): Xrm.DateAttribute;
    getAttribute(attributeName: "salesrepid"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "shipto_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_contactname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_fax"): Xrm.Attribute<string>;
    getAttribute(attributeName: "shipto_freighttermscode"): Xrm.OptionSetAttribute<quotedetail_shipto_freighttermscode>;
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
    getControl(controlName: "ChargeableCategoriesGrid"): Xrm.BaseControl;
    getControl(controlName: "ChargeableRolesGrid"): Xrm.BaseControl;
    getControl(controlName: "EstimationLines"): Xrm.BaseControl;
    getControl(controlName: "InvoiceScheduleGrid"): Xrm.SubGridControl<"msdyn_quotelineinvoiceschedule">;
    getControl(controlName: "MilestonesGrid"): Xrm.SubGridControl<"msdyn_quotelinescheduleofvalue">;
    getControl(controlName: "baseamount"): Xrm.NumberControl;
    getControl(controlName: "extendedamount"): Xrm.NumberControl;
    getControl(controlName: "extendedamount1"): Xrm.NumberControl;
    getControl(controlName: "extendedamount2"): Xrm.NumberControl;
    getControl(controlName: "ispriceoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isproductoverridden"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "isproductoverridden1"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "manualdiscountamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_billingmethod"): Xrm.OptionSetControl<msdyn_billingmethod>;
    getControl(controlName: "msdyn_billingstartdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_budgetamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_budgetamount1"): Xrm.NumberControl;
    getControl(controlName: "msdyn_costamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_costpriceperunit"): Xrm.NumberControl;
    getControl(controlName: "msdyn_includeexpense"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_includefee"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_includetime"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_invoicefrequency"): Xrm.LookupControl<"msdyn_invoicefrequency">;
    getControl(controlName: "msdyn_linetype"): Xrm.OptionSetControl<msdyn_linetype>;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "priceperunit"): Xrm.NumberControl;
    getControl(controlName: "priceperunit1"): Xrm.NumberControl;
    getControl(controlName: "priceperunit2"): Xrm.NumberControl;
    getControl(controlName: "productdescription"): Xrm.StringControl;
    getControl(controlName: "productdescription1"): Xrm.StringControl;
    getControl(controlName: "productdescription2"): Xrm.StringControl;
    getControl(controlName: "productid"): Xrm.LookupControl<"product">;
    getControl(controlName: "productid1"): Xrm.LookupControl<"product">;
    getControl(controlName: "producttypecode"): Xrm.OptionSetControl<qooiproduct_producttype>;
    getControl(controlName: "producttypecode1"): Xrm.OptionSetControl<qooiproduct_producttype>;
    getControl(controlName: "quantity"): Xrm.NumberControl;
    getControl(controlName: "quantity1"): Xrm.NumberControl;
    getControl(controlName: "quoteid"): Xrm.LookupControl<"quote">;
    getControl(controlName: "quoteid1"): Xrm.LookupControl<"quote">;
    getControl(controlName: "quoteid2"): Xrm.LookupControl<"quote">;
    getControl(controlName: "quoteid3"): Xrm.LookupControl<"quote">;
    getControl(controlName: "requestdeliveryby"): Xrm.DateControl;
    getControl(controlName: "requestdeliveryby1"): Xrm.DateControl;
    getControl(controlName: "salesrepid"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "shipto_city"): Xrm.StringControl;
    getControl(controlName: "shipto_contactname"): Xrm.StringControl;
    getControl(controlName: "shipto_country"): Xrm.StringControl;
    getControl(controlName: "shipto_fax"): Xrm.StringControl;
    getControl(controlName: "shipto_freighttermscode"): Xrm.OptionSetControl<quotedetail_shipto_freighttermscode>;
    getControl(controlName: "shipto_line1"): Xrm.StringControl;
    getControl(controlName: "shipto_line2"): Xrm.StringControl;
    getControl(controlName: "shipto_line3"): Xrm.StringControl;
    getControl(controlName: "shipto_name"): Xrm.StringControl;
    getControl(controlName: "shipto_postalcode"): Xrm.StringControl;
    getControl(controlName: "shipto_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "shipto_telephone"): Xrm.StringControl;
    getControl(controlName: "tax"): Xrm.NumberControl;
    getControl(controlName: "tax1"): Xrm.NumberControl;
    getControl(controlName: "tax2"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "uomid"): Xrm.LookupControl<"uom">;
    getControl(controlName: "uomid1"): Xrm.LookupControl<"uom">;
    getControl(controlName: "volumediscountamount"): Xrm.NumberControl;
    getControl(controlName: "willcall"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
