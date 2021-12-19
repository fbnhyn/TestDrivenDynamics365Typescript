declare namespace Form.msdyn_rma.Main {
  namespace RMA {
    namespace Tabs {
      interface _967655cbd3184e85a7683b42e0fc398e extends Xrm.SectionCollectionBase {
        get(name: "tab_1_section_2"): Xrm.PageSection;
        get(name: "tab_1_section_3"): Xrm.PageSection;
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: "{567c00b9-7bcd-4668-9fd1-010dd4039922}"): Xrm.PageSection;
        get(name: "{967655cb-d318-4e85-a768-3b42e0fc398e}_section_2"): Xrm.PageSection;
        get(name: "{967655cb-d318-4e85-a768-3b42e0fc398e}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface rmaproductstab extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface tab_3 extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_approvedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_billingaccount"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_daterequested"): Xrm.DateAttribute;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_eta"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_packagingtrackingno"): Xrm.Attribute<string>;
      get(name: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "msdyn_processingaction"): Xrm.OptionSetAttribute<msdyn_rmaprocessingaction>;
      get(name: "msdyn_referenceno"): Xrm.Attribute<string>;
      get(name: "msdyn_requestedbycontact"): Xrm.LookupAttribute<"contact">;
      get(name: "msdyn_serviceaccount"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_shippingtrackingno"): Xrm.Attribute<string>;
      get(name: "msdyn_shipvia"): Xrm.LookupAttribute<"msdyn_shipvia">;
      get(name: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_rmasubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_rmasystemstatus>;
      get(name: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_taxcode"): Xrm.LookupAttribute<"msdyn_taxcode">;
      get(name: "msdyn_totalamount"): Xrm.NumberAttribute;
      get(name: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_approvedby"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_billingaccount"): Xrm.LookupControl<"account">;
      get(name: "msdyn_daterequested"): Xrm.DateControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_eta"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_packagingtrackingno"): Xrm.StringControl;
      get(name: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
      get(name: "msdyn_processingaction"): Xrm.OptionSetControl<msdyn_rmaprocessingaction>;
      get(name: "msdyn_referenceno"): Xrm.StringControl;
      get(name: "msdyn_requestedbycontact"): Xrm.LookupControl<"contact">;
      get(name: "msdyn_serviceaccount"): Xrm.LookupControl<"account">;
      get(name: "msdyn_shippingtrackingno"): Xrm.StringControl;
      get(name: "msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia">;
      get(name: "msdyn_substatus"): Xrm.LookupControl<"msdyn_rmasubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_rmasystemstatus>;
      get(name: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_taxcode"): Xrm.LookupControl<"msdyn_taxcode">;
      get(name: "msdyn_totalamount"): Xrm.NumberControl;
      get(name: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "receiptsgrid"): Xrm.SubGridControl<"msdyn_rmareceipt">;
      get(name: "rmaproductsgrid"): Xrm.SubGridControl<"msdyn_rmaproduct">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{967655cb-d318-4e85-a768-3b42e0fc398e}"): Xrm.PageTab<Tabs._967655cbd3184e85a7683b42e0fc398e>;
      get(name: "rmaproductstab"): Xrm.PageTab<Tabs.rmaproductstab>;
      get(name: "tab_3"): Xrm.PageTab<Tabs.tab_3>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface RMA extends Xrm.PageBase<RMA.Attributes,RMA.Tabs,RMA.Controls> {
    getAttribute(attributeName: "msdyn_approvedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_billingaccount"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_daterequested"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_eta"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_packagingtrackingno"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "msdyn_processingaction"): Xrm.OptionSetAttribute<msdyn_rmaprocessingaction>;
    getAttribute(attributeName: "msdyn_referenceno"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_requestedbycontact"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "msdyn_serviceaccount"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_shippingtrackingno"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_shipvia"): Xrm.LookupAttribute<"msdyn_shipvia">;
    getAttribute(attributeName: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_rmasubstatus">;
    getAttribute(attributeName: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_rmasystemstatus>;
    getAttribute(attributeName: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_taxcode"): Xrm.LookupAttribute<"msdyn_taxcode">;
    getAttribute(attributeName: "msdyn_totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_approvedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_billingaccount"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_daterequested"): Xrm.DateControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_eta"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_packagingtrackingno"): Xrm.StringControl;
    getControl(controlName: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "msdyn_processingaction"): Xrm.OptionSetControl<msdyn_rmaprocessingaction>;
    getControl(controlName: "msdyn_referenceno"): Xrm.StringControl;
    getControl(controlName: "msdyn_requestedbycontact"): Xrm.LookupControl<"contact">;
    getControl(controlName: "msdyn_serviceaccount"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_shippingtrackingno"): Xrm.StringControl;
    getControl(controlName: "msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia">;
    getControl(controlName: "msdyn_substatus"): Xrm.LookupControl<"msdyn_rmasubstatus">;
    getControl(controlName: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_rmasystemstatus>;
    getControl(controlName: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_taxcode"): Xrm.LookupControl<"msdyn_taxcode">;
    getControl(controlName: "msdyn_totalamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "receiptsgrid"): Xrm.SubGridControl<"msdyn_rmareceipt">;
    getControl(controlName: "rmaproductsgrid"): Xrm.SubGridControl<"msdyn_rmaproduct">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
