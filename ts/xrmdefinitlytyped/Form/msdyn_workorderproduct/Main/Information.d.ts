declare namespace Form.msdyn_workorderproduct.Main {
  namespace Information {
    namespace Tabs {
      interface f1tab_actualcost extends Xrm.SectionCollectionBase {
        get(name: "tab_5_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface f1tab_actualqtysaleamt extends Xrm.SectionCollectionBase {
        get(name: "f1tabgeneral_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface f1tab_estimateinfo extends Xrm.SectionCollectionBase {
        get(name: "f1tab_estimateinfo_section_cost"): Xrm.PageSection;
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface f1tab_general extends Xrm.SectionCollectionBase {
        get(name: "QuantityInformation"): Xrm.PageSection;
        get(name: "f1generaltab_section_2"): Xrm.PageSection;
        get(name: "f1generaltab_section_3"): Xrm.PageSection;
        get(name: "{a490ae2a-b9ce-4b27-8103-c8d177ef9c0d}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface f1tab_other extends Xrm.SectionCollectionBase {
        get(name: "tab_7_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface f1tab_relatedinfo extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_additionalcost"): Xrm.NumberAttribute;
      get(name: "msdyn_agreementbookingproduct"): Xrm.LookupAttribute<"msdyn_agreementbookingproduct">;
      get(name: "msdyn_allocated"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_booking"): Xrm.LookupAttribute<"bookableresourcebooking">;
      get(name: "msdyn_commissioncosts"): Xrm.NumberAttribute;
      get(name: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_disableentitlement"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_discountamount"): Xrm.NumberAttribute;
      get(name: "msdyn_discountpercent"): Xrm.NumberAttribute;
      get(name: "msdyn_entitlement"): Xrm.LookupAttribute<"entitlement">;
      get(name: "msdyn_estimatediscountamount"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatediscountpercent"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatequantity"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatesubtotal"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatetotalamount"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatetotalcost"): Xrm.NumberAttribute;
      get(name: "msdyn_estimateunitamount"): Xrm.NumberAttribute;
      get(name: "msdyn_estimateunitcost"): Xrm.NumberAttribute;
      get(name: "msdyn_internaldescription"): Xrm.Attribute<string>;
      get(name: "msdyn_lineorder"): Xrm.NumberAttribute;
      get(name: "msdyn_linestatus"): Xrm.OptionSetAttribute<msdyn_productservicestatus>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "msdyn_product"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_purchaseorderreceiptproduct"): Xrm.LookupAttribute<"msdyn_purchaseorderreceiptproduct">;
      get(name: "msdyn_qtytobill"): Xrm.NumberAttribute;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_subtotal"): Xrm.NumberAttribute;
      get(name: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_totalamount"): Xrm.NumberAttribute;
      get(name: "msdyn_totalcost"): Xrm.NumberAttribute;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_unitamount"): Xrm.NumberAttribute;
      get(name: "msdyn_unitcost"): Xrm.NumberAttribute;
      get(name: "msdyn_warehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
      get(name: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "msdyn_workorderincident"): Xrm.LookupAttribute<"msdyn_workorderincident">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_workorderproduct_statecode>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_workorderproduct_statecode>;
      get(name: "msdyn_additionalcost"): Xrm.NumberControl;
      get(name: "msdyn_agreementbookingproduct"): Xrm.LookupControl<"msdyn_agreementbookingproduct">;
      get(name: "msdyn_allocated"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_booking"): Xrm.LookupControl<"bookableresourcebooking">;
      get(name: "msdyn_commissioncosts"): Xrm.NumberControl;
      get(name: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_disableentitlement"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_discountamount"): Xrm.NumberControl;
      get(name: "msdyn_discountpercent"): Xrm.NumberControl;
      get(name: "msdyn_entitlement"): Xrm.LookupControl<"entitlement">;
      get(name: "msdyn_estimatediscountamount"): Xrm.NumberControl;
      get(name: "msdyn_estimatediscountpercent"): Xrm.NumberControl;
      get(name: "msdyn_estimatequantity"): Xrm.NumberControl;
      get(name: "msdyn_estimatesubtotal"): Xrm.NumberControl;
      get(name: "msdyn_estimatetotalamount"): Xrm.NumberControl;
      get(name: "msdyn_estimatetotalcost"): Xrm.NumberControl;
      get(name: "msdyn_estimateunitamount"): Xrm.NumberControl;
      get(name: "msdyn_estimateunitcost"): Xrm.NumberControl;
      get(name: "msdyn_internaldescription"): Xrm.StringControl;
      get(name: "msdyn_lineorder"): Xrm.NumberControl;
      get(name: "msdyn_linestatus"): Xrm.OptionSetControl<msdyn_productservicestatus>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
      get(name: "msdyn_product"): Xrm.LookupControl<"product">;
      get(name: "msdyn_purchaseorderreceiptproduct"): Xrm.LookupControl<"msdyn_purchaseorderreceiptproduct">;
      get(name: "msdyn_qtytobill"): Xrm.NumberControl;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_subtotal"): Xrm.NumberControl;
      get(name: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_totalamount"): Xrm.NumberControl;
      get(name: "msdyn_totalcost"): Xrm.NumberControl;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_unitamount"): Xrm.NumberControl;
      get(name: "msdyn_unitcost"): Xrm.NumberControl;
      get(name: "msdyn_warehouse"): Xrm.LookupControl<"msdyn_warehouse">;
      get(name: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: "msdyn_workorderincident"): Xrm.LookupControl<"msdyn_workorderincident">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "f1tab_actualcost"): Xrm.PageTab<Tabs.f1tab_actualcost>;
      get(name: "f1tab_actualqtysaleamt"): Xrm.PageTab<Tabs.f1tab_actualqtysaleamt>;
      get(name: "f1tab_estimateinfo"): Xrm.PageTab<Tabs.f1tab_estimateinfo>;
      get(name: "f1tab_general"): Xrm.PageTab<Tabs.f1tab_general>;
      get(name: "f1tab_other"): Xrm.PageTab<Tabs.f1tab_other>;
      get(name: "f1tab_relatedinfo"): Xrm.PageTab<Tabs.f1tab_relatedinfo>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_additionalcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_agreementbookingproduct"): Xrm.LookupAttribute<"msdyn_agreementbookingproduct">;
    getAttribute(attributeName: "msdyn_allocated"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_booking"): Xrm.LookupAttribute<"bookableresourcebooking">;
    getAttribute(attributeName: "msdyn_commissioncosts"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_disableentitlement"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_discountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_discountpercent"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_entitlement"): Xrm.LookupAttribute<"entitlement">;
    getAttribute(attributeName: "msdyn_estimatediscountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatediscountpercent"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatequantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatesubtotal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatetotalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatetotalcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimateunitamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimateunitcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_internaldescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_lineorder"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_linestatus"): Xrm.OptionSetAttribute<msdyn_productservicestatus>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "msdyn_product"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_purchaseorderreceiptproduct"): Xrm.LookupAttribute<"msdyn_purchaseorderreceiptproduct">;
    getAttribute(attributeName: "msdyn_qtytobill"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_subtotal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_totalcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_unitamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_unitcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_warehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "msdyn_workorderincident"): Xrm.LookupAttribute<"msdyn_workorderincident">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_workorderproduct_statecode>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_workorderproduct_statecode>;
    getControl(controlName: "msdyn_additionalcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_agreementbookingproduct"): Xrm.LookupControl<"msdyn_agreementbookingproduct">;
    getControl(controlName: "msdyn_allocated"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_booking"): Xrm.LookupControl<"bookableresourcebooking">;
    getControl(controlName: "msdyn_commissioncosts"): Xrm.NumberControl;
    getControl(controlName: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_disableentitlement"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_discountamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_discountpercent"): Xrm.NumberControl;
    getControl(controlName: "msdyn_entitlement"): Xrm.LookupControl<"entitlement">;
    getControl(controlName: "msdyn_estimatediscountamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatediscountpercent"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatequantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatesubtotal"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatetotalamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatetotalcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimateunitamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimateunitcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_internaldescription"): Xrm.StringControl;
    getControl(controlName: "msdyn_lineorder"): Xrm.NumberControl;
    getControl(controlName: "msdyn_linestatus"): Xrm.OptionSetControl<msdyn_productservicestatus>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "msdyn_product"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_purchaseorderreceiptproduct"): Xrm.LookupControl<"msdyn_purchaseorderreceiptproduct">;
    getControl(controlName: "msdyn_qtytobill"): Xrm.NumberControl;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_subtotal"): Xrm.NumberControl;
    getControl(controlName: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_totalamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_totalcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_unitamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_unitcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_warehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "msdyn_workorderincident"): Xrm.LookupControl<"msdyn_workorderincident">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
