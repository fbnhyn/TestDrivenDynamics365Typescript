declare namespace Form.msdyn_agreementinvoicedate.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
      get(name: "msdyn_invoicedate"): Xrm.DateAttribute;
      get(name: "msdyn_invoicesetup"): Xrm.LookupAttribute<"msdyn_agreementinvoicesetup">;
      get(name: "msdyn_invoicestatus"): Xrm.OptionSetAttribute<msdyn_agreementinvoicestatus>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_agreementinvoicedate_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_agreementinvoicedate_statecode>;
      get(name: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
      get(name: "msdyn_invoicedate"): Xrm.DateControl;
      get(name: "msdyn_invoicesetup"): Xrm.LookupControl<"msdyn_agreementinvoicesetup">;
      get(name: "msdyn_invoicestatus"): Xrm.OptionSetControl<msdyn_agreementinvoicestatus>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_agreement"): Xrm.LookupAttribute<"msdyn_agreement">;
    getAttribute(attributeName: "msdyn_invoicedate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_invoicesetup"): Xrm.LookupAttribute<"msdyn_agreementinvoicesetup">;
    getAttribute(attributeName: "msdyn_invoicestatus"): Xrm.OptionSetAttribute<msdyn_agreementinvoicestatus>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_agreementinvoicedate_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_agreementinvoicedate_statecode>;
    getControl(controlName: "msdyn_agreement"): Xrm.LookupControl<"msdyn_agreement">;
    getControl(controlName: "msdyn_invoicedate"): Xrm.DateControl;
    getControl(controlName: "msdyn_invoicesetup"): Xrm.LookupControl<"msdyn_agreementinvoicesetup">;
    getControl(controlName: "msdyn_invoicestatus"): Xrm.OptionSetControl<msdyn_agreementinvoicestatus>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
