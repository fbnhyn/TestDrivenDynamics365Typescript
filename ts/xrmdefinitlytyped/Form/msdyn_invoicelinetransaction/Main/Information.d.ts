declare namespace Form.msdyn_invoicelinetransaction.Main {
  namespace Information {
    namespace Tabs {
      interface CorrectionTab extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface HiddenFieldsTab extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _116ced9d22a34b70bfbf9021372780b7 extends Xrm.SectionCollectionBase {
        get(name: "BillingSection"): Xrm.PageSection;
        get(name: "GeneralSection"): Xrm.PageSection;
        get(name: "ProjectSection"): Xrm.PageSection;
        get(name: "QuantitySection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_accountcustomer"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_amount"): Xrm.NumberAttribute;
      get(name: "msdyn_amountmethod"): Xrm.OptionSetAttribute<msdyn_amountmethod>;
      get(name: "msdyn_basisquantity"): Xrm.NumberAttribute;
      get(name: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
      get(name: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_contactcustomer"): Xrm.LookupAttribute<"contact">;
      get(name: "msdyn_correction"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_customertype"): Xrm.OptionSetAttribute<msdyn_partytype>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_documentdate"): Xrm.DateAttribute;
      get(name: "msdyn_enddatetime"): Xrm.DateAttribute;
      get(name: "msdyn_externaldescription"): Xrm.Attribute<string>;
      get(name: "msdyn_invoicelineid"): Xrm.LookupAttribute<"invoicedetail">;
      get(name: "msdyn_originalinvoicelinedetail"): Xrm.LookupAttribute<"msdyn_invoicelinetransaction">;
      get(name: "msdyn_price"): Xrm.NumberAttribute;
      get(name: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_resourceorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_salescontractlineid"): Xrm.LookupAttribute<"salesorderdetail">;
      get(name: "msdyn_startdatetime"): Xrm.DateAttribute;
      get(name: "msdyn_task"): Xrm.LookupAttribute<"msdyn_projecttask">;
      get(name: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
      get(name: "msdyn_transactiontypecode"): Xrm.OptionSetAttribute<msdyn_transactiontypecode>;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_unitschedule"): Xrm.LookupAttribute<"uomschedule">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_accountcustomer"): Xrm.LookupControl<"account">;
      get(name: "msdyn_amount"): Xrm.NumberControl;
      get(name: "msdyn_amountmethod"): Xrm.OptionSetControl<msdyn_amountmethod>;
      get(name: "msdyn_basisquantity"): Xrm.NumberControl;
      get(name: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
      get(name: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_contactcustomer"): Xrm.LookupControl<"contact">;
      get(name: "msdyn_correction"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_customertype"): Xrm.OptionSetControl<msdyn_partytype>;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_documentdate"): Xrm.DateControl;
      get(name: "msdyn_enddatetime"): Xrm.DateControl;
      get(name: "msdyn_externaldescription"): Xrm.StringControl;
      get(name: "msdyn_invoicelineid"): Xrm.LookupControl<"invoicedetail">;
      get(name: "msdyn_invoicelineid1"): Xrm.LookupControl<"invoicedetail">;
      get(name: "msdyn_originalinvoicelinedetail"): Xrm.LookupControl<"msdyn_invoicelinetransaction">;
      get(name: "msdyn_price"): Xrm.NumberControl;
      get(name: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
      get(name: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_resourceorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_salescontractlineid"): Xrm.LookupControl<"salesorderdetail">;
      get(name: "msdyn_startdatetime"): Xrm.DateControl;
      get(name: "msdyn_task"): Xrm.LookupControl<"msdyn_projecttask">;
      get(name: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
      get(name: "msdyn_transactiontypecode"): Xrm.OptionSetControl<msdyn_transactiontypecode>;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_unitschedule"): Xrm.LookupControl<"uomschedule">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "CorrectionTab"): Xrm.PageTab<Tabs.CorrectionTab>;
      get(name: "HiddenFieldsTab"): Xrm.PageTab<Tabs.HiddenFieldsTab>;
      get(name: "{116ced9d-22a3-4b70-bfbf-9021372780b7}"): Xrm.PageTab<Tabs._116ced9d22a34b70bfbf9021372780b7>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_accountcustomer"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_amountmethod"): Xrm.OptionSetAttribute<msdyn_amountmethod>;
    getAttribute(attributeName: "msdyn_basisquantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
    getAttribute(attributeName: "msdyn_bookableresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_contactcustomer"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "msdyn_correction"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_customertype"): Xrm.OptionSetAttribute<msdyn_partytype>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_documentdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_enddatetime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_externaldescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_invoicelineid"): Xrm.LookupAttribute<"invoicedetail">;
    getAttribute(attributeName: "msdyn_originalinvoicelinedetail"): Xrm.LookupAttribute<"msdyn_invoicelinetransaction">;
    getAttribute(attributeName: "msdyn_price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "msdyn_project"): Xrm.LookupAttribute<"msdyn_project">;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_resourceorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_salescontractlineid"): Xrm.LookupAttribute<"salesorderdetail">;
    getAttribute(attributeName: "msdyn_startdatetime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_task"): Xrm.LookupAttribute<"msdyn_projecttask">;
    getAttribute(attributeName: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
    getAttribute(attributeName: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
    getAttribute(attributeName: "msdyn_transactiontypecode"): Xrm.OptionSetAttribute<msdyn_transactiontypecode>;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_unitschedule"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_accountcustomer"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_amount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_amountmethod"): Xrm.OptionSetControl<msdyn_amountmethod>;
    getControl(controlName: "msdyn_basisquantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
    getControl(controlName: "msdyn_bookableresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_contactcustomer"): Xrm.LookupControl<"contact">;
    getControl(controlName: "msdyn_correction"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_customertype"): Xrm.OptionSetControl<msdyn_partytype>;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_documentdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_enddatetime"): Xrm.DateControl;
    getControl(controlName: "msdyn_externaldescription"): Xrm.StringControl;
    getControl(controlName: "msdyn_invoicelineid"): Xrm.LookupControl<"invoicedetail">;
    getControl(controlName: "msdyn_invoicelineid1"): Xrm.LookupControl<"invoicedetail">;
    getControl(controlName: "msdyn_originalinvoicelinedetail"): Xrm.LookupControl<"msdyn_invoicelinetransaction">;
    getControl(controlName: "msdyn_price"): Xrm.NumberControl;
    getControl(controlName: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "msdyn_project"): Xrm.LookupControl<"msdyn_project">;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_resourceorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_salescontractlineid"): Xrm.LookupControl<"salesorderdetail">;
    getControl(controlName: "msdyn_startdatetime"): Xrm.DateControl;
    getControl(controlName: "msdyn_task"): Xrm.LookupControl<"msdyn_projecttask">;
    getControl(controlName: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
    getControl(controlName: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
    getControl(controlName: "msdyn_transactiontypecode"): Xrm.OptionSetControl<msdyn_transactiontypecode>;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_unitschedule"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
