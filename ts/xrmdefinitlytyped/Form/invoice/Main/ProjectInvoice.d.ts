declare namespace Form.invoice.Main {
  namespace ProjectInvoice {
    namespace Tabs {
      interface HiddenLockedFields extends Xrm.SectionCollectionBase {
        get(name: "tab_5_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface Summary_tab_project extends Xrm.SectionCollectionBase {
        get(name: "Summary_tab_project_section_3"): Xrm.PageSection;
        get(name: "Summary_tab_project_section_5"): Xrm.PageSection;
        get(name: "products"): Xrm.PageSection;
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "tab_5_section_1"): Xrm.PageSection;
        get(name: "tab_5_section_2"): Xrm.PageSection;
        get(name: "totals"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface details_tab extends Xrm.SectionCollectionBase {
        get(name: "Social Pane"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "billto_composite"): Xrm.Attribute<string>;
      get(name: "billto_name"): Xrm.Attribute<string>;
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "discountamount"): Xrm.NumberAttribute;
      get(name: "discountpercentage"): Xrm.NumberAttribute;
      get(name: "duedate"): Xrm.DateAttribute;
      get(name: "freightamount"): Xrm.NumberAttribute;
      get(name: "invoicenumber"): Xrm.Attribute<string>;
      get(name: "msdyn_billtocontactname"): Xrm.Attribute<string>;
      get(name: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_invoice_msdyn_ordertype>;
      get(name: "msdyn_projectinvoicestatus"): Xrm.OptionSetAttribute<msdyn_projectinvoicestatus>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "paymenttermscode"): Xrm.OptionSetAttribute<invoice_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "salesorderid"): Xrm.LookupAttribute<"salesorder">;
      get(name: "statecode"): Xrm.OptionSetAttribute<invoice_statecode>;
      get(name: "totalamount"): Xrm.NumberAttribute;
      get(name: "totalamountlessfreight"): Xrm.NumberAttribute;
      get(name: "totallineitemamount"): Xrm.NumberAttribute;
      get(name: "totaltax"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "willcall"): Xrm.OptionSetAttribute<boolean>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "ProjectInvoiceLines"): Xrm.SubGridControl<"invoicedetail">;
      get(name: "billto_composite"): Xrm.StringControl;
      get(name: "billto_name"): Xrm.StringControl;
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "description"): Xrm.StringControl;
      get(name: "discountamount"): Xrm.NumberControl;
      get(name: "discountpercentage"): Xrm.NumberControl;
      get(name: "duedate"): Xrm.DateControl;
      get(name: "freightamount"): Xrm.NumberControl;
      get(name: "header_msdyn_projectinvoicestatus"): Xrm.OptionSetControl<msdyn_projectinvoicestatus>;
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "header_process_customerid"): Xrm.LookupControl<"account" | "contact"> | null;
      get(name: "header_process_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
      get(name: "header_process_totalamount"): Xrm.NumberControl | null;
      get(name: "header_statecode"): Xrm.OptionSetControl<invoice_statecode>;
      get(name: "header_totalamount"): Xrm.NumberControl;
      get(name: "invoicedetailsGrid"): Xrm.SubGridControl<"invoicedetail">;
      get(name: "invoicenumber"): Xrm.StringControl;
      get(name: "msdyn_billtocontactname"): Xrm.StringControl;
      get(name: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_invoice_msdyn_ordertype>;
      get(name: "name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "paymenttermscode"): Xrm.OptionSetControl<invoice_paymenttermscode>;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "salesorderid"): Xrm.LookupControl<"salesorder">;
      get(name: "totalamount"): Xrm.NumberControl;
      get(name: "totalamountlessfreight"): Xrm.NumberControl;
      get(name: "totallineitemamount"): Xrm.NumberControl;
      get(name: "totaltax"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "willcall"): Xrm.OptionSetControl<boolean>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "HiddenLockedFields"): Xrm.PageTab<Tabs.HiddenLockedFields>;
      get(name: "Summary_tab_project"): Xrm.PageTab<Tabs.Summary_tab_project>;
      get(name: "details_tab"): Xrm.PageTab<Tabs.details_tab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProjectInvoice extends Xrm.PageBase<ProjectInvoice.Attributes,ProjectInvoice.Tabs,ProjectInvoice.Controls> {
    getAttribute(attributeName: "billto_composite"): Xrm.Attribute<string>;
    getAttribute(attributeName: "billto_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "discountamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "discountpercentage"): Xrm.NumberAttribute;
    getAttribute(attributeName: "duedate"): Xrm.DateAttribute;
    getAttribute(attributeName: "freightamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "invoicenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_billtocontactname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_ordertype"): Xrm.OptionSetAttribute<msdyn_invoice_msdyn_ordertype>;
    getAttribute(attributeName: "msdyn_projectinvoicestatus"): Xrm.OptionSetAttribute<msdyn_projectinvoicestatus>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "paymenttermscode"): Xrm.OptionSetAttribute<invoice_paymenttermscode>;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "salesorderid"): Xrm.LookupAttribute<"salesorder">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<invoice_statecode>;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totalamountlessfreight"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totallineitemamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "totaltax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "willcall"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "ProjectInvoiceLines"): Xrm.SubGridControl<"invoicedetail">;
    getControl(controlName: "billto_composite"): Xrm.StringControl;
    getControl(controlName: "billto_name"): Xrm.StringControl;
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "discountamount"): Xrm.NumberControl;
    getControl(controlName: "discountpercentage"): Xrm.NumberControl;
    getControl(controlName: "duedate"): Xrm.DateControl;
    getControl(controlName: "freightamount"): Xrm.NumberControl;
    getControl(controlName: "header_msdyn_projectinvoicestatus"): Xrm.OptionSetControl<msdyn_projectinvoicestatus>;
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "header_process_customerid"): Xrm.LookupControl<"account" | "contact"> | null;
    getControl(controlName: "header_process_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
    getControl(controlName: "header_process_totalamount"): Xrm.NumberControl | null;
    getControl(controlName: "header_statecode"): Xrm.OptionSetControl<invoice_statecode>;
    getControl(controlName: "header_totalamount"): Xrm.NumberControl;
    getControl(controlName: "invoicedetailsGrid"): Xrm.SubGridControl<"invoicedetail">;
    getControl(controlName: "invoicenumber"): Xrm.StringControl;
    getControl(controlName: "msdyn_billtocontactname"): Xrm.StringControl;
    getControl(controlName: "msdyn_ordertype"): Xrm.OptionSetControl<msdyn_invoice_msdyn_ordertype>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "paymenttermscode"): Xrm.OptionSetControl<invoice_paymenttermscode>;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "salesorderid"): Xrm.LookupControl<"salesorder">;
    getControl(controlName: "totalamount"): Xrm.NumberControl;
    getControl(controlName: "totalamountlessfreight"): Xrm.NumberControl;
    getControl(controlName: "totallineitemamount"): Xrm.NumberControl;
    getControl(controlName: "totaltax"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "willcall"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
