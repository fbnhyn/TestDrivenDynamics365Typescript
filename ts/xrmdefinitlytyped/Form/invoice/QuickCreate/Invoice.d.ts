declare namespace Form.invoice.QuickCreate {
  namespace Invoice {
    namespace Tabs {
      interface newInvoice extends Xrm.SectionCollectionBase {
        get(name: "quickInvoice_salesinformation"): Xrm.PageSection;
        get(name: "quickInvoice_summary"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "description"): Xrm.Attribute<string>;
      get(name: "name"): Xrm.Attribute<string>;
      get(name: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "salesorderid"): Xrm.LookupAttribute<"salesorder">;
      get(name: "statuscode"): Xrm.OptionSetAttribute<invoice_statuscode>;
      get(name: "totalamount"): Xrm.NumberAttribute | null;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "customerid"): Xrm.LookupControl<"account" | "contact">;
      get(name: "description"): Xrm.StringControl;
      get(name: "header_process_customerid"): Xrm.LookupControl<"account" | "contact"> | null;
      get(name: "header_process_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
      get(name: "header_process_totalamount"): Xrm.NumberControl | null;
      get(name: "header_statuscode"): Xrm.OptionSetControl<invoice_statuscode>;
      get(name: "name"): Xrm.StringControl;
      get(name: "opportunityid"): Xrm.LookupControl<"opportunity">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
      get(name: "salesorderid"): Xrm.LookupControl<"salesorder">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "newInvoice"): Xrm.PageTab<Tabs.newInvoice>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Invoice extends Xrm.PageBase<Invoice.Attributes,Invoice.Tabs,Invoice.Controls> {
    getAttribute(attributeName: "customerid"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "opportunityid"): Xrm.LookupAttribute<"opportunity">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "pricelevelid"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "salesorderid"): Xrm.LookupAttribute<"salesorder">;
    getAttribute(attributeName: "statuscode"): Xrm.OptionSetAttribute<invoice_statuscode>;
    getAttribute(attributeName: "totalamount"): Xrm.NumberAttribute | null;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "customerid"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "description"): Xrm.StringControl;
    getControl(controlName: "header_process_customerid"): Xrm.LookupControl<"account" | "contact"> | null;
    getControl(controlName: "header_process_salesorderid"): Xrm.LookupControl<"salesorder"> | null;
    getControl(controlName: "header_process_totalamount"): Xrm.NumberControl | null;
    getControl(controlName: "header_statuscode"): Xrm.OptionSetControl<invoice_statuscode>;
    getControl(controlName: "name"): Xrm.StringControl;
    getControl(controlName: "opportunityid"): Xrm.LookupControl<"opportunity">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "pricelevelid"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "salesorderid"): Xrm.LookupControl<"salesorder">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
