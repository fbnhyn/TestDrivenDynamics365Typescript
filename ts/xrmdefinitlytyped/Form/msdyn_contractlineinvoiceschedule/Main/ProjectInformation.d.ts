declare namespace Form.msdyn_contractlineinvoiceschedule.Main {
  namespace ProjectInformation {
    namespace Tabs {
      interface GeneralTab extends Xrm.SectionCollectionBase {
        get(name: "GeneralSection"): Xrm.PageSection;
        get(name: "InvoiceSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_invoice"): Xrm.LookupAttribute<"invoice">;
      get(name: "msdyn_invoicerundate"): Xrm.DateAttribute;
      get(name: "msdyn_invoicerunstatus"): Xrm.OptionSetAttribute<msdyn_invoicerunstatus>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_transactioncutoffdate"): Xrm.DateAttribute;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_invoice"): Xrm.LookupControl<"invoice">;
      get(name: "msdyn_invoicerundate"): Xrm.DateControl;
      get(name: "msdyn_invoicerunstatus"): Xrm.OptionSetControl<msdyn_invoicerunstatus>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_transactioncutoffdate"): Xrm.DateControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "GeneralTab"): Xrm.PageTab<Tabs.GeneralTab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProjectInformation extends Xrm.PageBase<ProjectInformation.Attributes,ProjectInformation.Tabs,ProjectInformation.Controls> {
    getAttribute(attributeName: "msdyn_invoice"): Xrm.LookupAttribute<"invoice">;
    getAttribute(attributeName: "msdyn_invoicerundate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_invoicerunstatus"): Xrm.OptionSetAttribute<msdyn_invoicerunstatus>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_transactioncutoffdate"): Xrm.DateAttribute;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_invoice"): Xrm.LookupControl<"invoice">;
    getControl(controlName: "msdyn_invoicerundate"): Xrm.DateControl;
    getControl(controlName: "msdyn_invoicerunstatus"): Xrm.OptionSetControl<msdyn_invoicerunstatus>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_transactioncutoffdate"): Xrm.DateControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
