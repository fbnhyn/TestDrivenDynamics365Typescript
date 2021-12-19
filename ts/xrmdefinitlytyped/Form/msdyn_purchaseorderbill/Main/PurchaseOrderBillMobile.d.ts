declare namespace Form.msdyn_purchaseorderbill.Main {
  namespace PurchaseOrderBillMobile {
    namespace Tabs {
      interface fstab_other extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: "tab_3_section_2"): Xrm.PageSection;
        get(name: "tab_3_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_sub_grids extends Xrm.SectionCollectionBase {
        get(name: "fstab_sub_grids_section"): Xrm.PageSection;
        get(name: "fstab_sub_grids_section_2"): Xrm.PageSection;
        get(name: "fstab_sub_grids_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_billdate"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_note"): Xrm.Attribute<string>;
      get(name: "msdyn_paymentterm"): Xrm.LookupAttribute<"msdyn_paymentterm">;
      get(name: "msdyn_purchaseorder"): Xrm.LookupAttribute<"msdyn_purchaseorder">;
      get(name: "msdyn_shippingamount"): Xrm.NumberAttribute;
      get(name: "msdyn_subtotal"): Xrm.NumberAttribute;
      get(name: "msdyn_taxamount"): Xrm.NumberAttribute;
      get(name: "msdyn_taxcode"): Xrm.LookupAttribute<"msdyn_taxcode">;
      get(name: "msdyn_totalamount"): Xrm.NumberAttribute;
      get(name: "msdyn_vendorinvoicenumber"): Xrm.Attribute<string>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "header_process_msdyn_billdate"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_vendorinvoicenumber"): Xrm.StringControl | null;
      get(name: "msdyn_billdate"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_note"): Xrm.StringControl;
      get(name: "msdyn_paymentterm"): Xrm.LookupControl<"msdyn_paymentterm">;
      get(name: "msdyn_purchaseorder"): Xrm.LookupControl<"msdyn_purchaseorder">;
      get(name: "msdyn_shippingamount"): Xrm.NumberControl;
      get(name: "msdyn_subtotal"): Xrm.NumberControl;
      get(name: "msdyn_taxamount"): Xrm.NumberControl;
      get(name: "msdyn_taxcode"): Xrm.LookupControl<"msdyn_taxcode">;
      get(name: "msdyn_totalamount"): Xrm.NumberControl;
      get(name: "msdyn_vendorinvoicenumber"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "fstab_other"): Xrm.PageTab<Tabs.fstab_other>;
      get(name: "fstab_sub_grids"): Xrm.PageTab<Tabs.fstab_sub_grids>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface PurchaseOrderBillMobile extends Xrm.PageBase<PurchaseOrderBillMobile.Attributes,PurchaseOrderBillMobile.Tabs,PurchaseOrderBillMobile.Controls> {
    getAttribute(attributeName: "msdyn_billdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_note"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_paymentterm"): Xrm.LookupAttribute<"msdyn_paymentterm">;
    getAttribute(attributeName: "msdyn_purchaseorder"): Xrm.LookupAttribute<"msdyn_purchaseorder">;
    getAttribute(attributeName: "msdyn_shippingamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_subtotal"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_taxamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_taxcode"): Xrm.LookupAttribute<"msdyn_taxcode">;
    getAttribute(attributeName: "msdyn_totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_vendorinvoicenumber"): Xrm.Attribute<string>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "header_process_msdyn_billdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_vendorinvoicenumber"): Xrm.StringControl | null;
    getControl(controlName: "msdyn_billdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_note"): Xrm.StringControl;
    getControl(controlName: "msdyn_paymentterm"): Xrm.LookupControl<"msdyn_paymentterm">;
    getControl(controlName: "msdyn_purchaseorder"): Xrm.LookupControl<"msdyn_purchaseorder">;
    getControl(controlName: "msdyn_shippingamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_subtotal"): Xrm.NumberControl;
    getControl(controlName: "msdyn_taxamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_taxcode"): Xrm.LookupControl<"msdyn_taxcode">;
    getControl(controlName: "msdyn_totalamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_vendorinvoicenumber"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
