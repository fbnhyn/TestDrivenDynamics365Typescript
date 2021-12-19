declare namespace Form.msdyn_contractlinescheduleofvalue.Main {
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
      get(name: "msdyn_amount"): Xrm.NumberAttribute;
      get(name: "msdyn_amount_after_tax"): Xrm.NumberAttribute;
      get(name: "msdyn_contract"): Xrm.LookupAttribute<"salesorder">;
      get(name: "msdyn_contractlinedescription"): Xrm.Attribute<string>;
      get(name: "msdyn_contractlineid"): Xrm.LookupAttribute<"salesorderdetail">;
      get(name: "msdyn_invoicedate"): Xrm.DateAttribute;
      get(name: "msdyn_invoicestatus"): Xrm.OptionSetAttribute<msdyn_invoicestatus>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_projecttask">;
      get(name: "msdyn_tax"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "msdyn_amount"): Xrm.NumberControl;
      get(name: "msdyn_amount_after_tax"): Xrm.NumberControl;
      get(name: "msdyn_contract"): Xrm.LookupControl<"salesorder">;
      get(name: "msdyn_contractlinedescription"): Xrm.StringControl;
      get(name: "msdyn_contractlineid"): Xrm.LookupControl<"salesorderdetail">;
      get(name: "msdyn_invoicedate"): Xrm.DateControl;
      get(name: "msdyn_invoicestatus"): Xrm.OptionSetControl<msdyn_invoicestatus>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_projecttask"): Xrm.LookupControl<"msdyn_projecttask">;
      get(name: "msdyn_tax"): Xrm.NumberControl;
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
    getAttribute(attributeName: "msdyn_amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_amount_after_tax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_contract"): Xrm.LookupAttribute<"salesorder">;
    getAttribute(attributeName: "msdyn_contractlinedescription"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_contractlineid"): Xrm.LookupAttribute<"salesorderdetail">;
    getAttribute(attributeName: "msdyn_invoicedate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_invoicestatus"): Xrm.OptionSetAttribute<msdyn_invoicestatus>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_projecttask"): Xrm.LookupAttribute<"msdyn_projecttask">;
    getAttribute(attributeName: "msdyn_tax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "msdyn_amount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_amount_after_tax"): Xrm.NumberControl;
    getControl(controlName: "msdyn_contract"): Xrm.LookupControl<"salesorder">;
    getControl(controlName: "msdyn_contractlinedescription"): Xrm.StringControl;
    getControl(controlName: "msdyn_contractlineid"): Xrm.LookupControl<"salesorderdetail">;
    getControl(controlName: "msdyn_invoicedate"): Xrm.DateControl;
    getControl(controlName: "msdyn_invoicestatus"): Xrm.OptionSetControl<msdyn_invoicestatus>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_projecttask"): Xrm.LookupControl<"msdyn_projecttask">;
    getControl(controlName: "msdyn_tax"): Xrm.NumberControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
