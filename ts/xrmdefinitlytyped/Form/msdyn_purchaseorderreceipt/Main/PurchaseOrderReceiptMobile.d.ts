declare namespace Form.msdyn_purchaseorderreceipt.Main {
  namespace PurchaseOrderReceiptMobile {
    namespace Tabs {
      interface fstab_general extends Xrm.SectionCollectionBase {
        get(name: "fstab_general_section_general"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
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
      get(name: "msdyn_datereceived"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_note"): Xrm.Attribute<string>;
      get(name: "msdyn_purchaseorder"): Xrm.LookupAttribute<"msdyn_purchaseorder">;
      get(name: "msdyn_receivedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_shipvia"): Xrm.LookupAttribute<"msdyn_shipvia">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RECEIPT_PRODUCTS"): Xrm.SubGridControl<"msdyn_purchaseorderreceiptproduct">;
      get(name: "header_process_msdyn_datereceived"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_receivedby"): Xrm.LookupControl<"systemuser"> | null;
      get(name: "header_process_msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia"> | null;
      get(name: "msdyn_datereceived"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_note"): Xrm.StringControl;
      get(name: "msdyn_purchaseorder"): Xrm.LookupControl<"msdyn_purchaseorder">;
      get(name: "msdyn_receivedby"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "fstab_general"): Xrm.PageTab<Tabs.fstab_general>;
      get(name: "fstab_other"): Xrm.PageTab<Tabs.fstab_other>;
      get(name: "fstab_sub_grids"): Xrm.PageTab<Tabs.fstab_sub_grids>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface PurchaseOrderReceiptMobile extends Xrm.PageBase<PurchaseOrderReceiptMobile.Attributes,PurchaseOrderReceiptMobile.Tabs,PurchaseOrderReceiptMobile.Controls> {
    getAttribute(attributeName: "msdyn_datereceived"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_note"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_purchaseorder"): Xrm.LookupAttribute<"msdyn_purchaseorder">;
    getAttribute(attributeName: "msdyn_receivedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_shipvia"): Xrm.LookupAttribute<"msdyn_shipvia">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "RECEIPT_PRODUCTS"): Xrm.SubGridControl<"msdyn_purchaseorderreceiptproduct">;
    getControl(controlName: "header_process_msdyn_datereceived"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_receivedby"): Xrm.LookupControl<"systemuser"> | null;
    getControl(controlName: "header_process_msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia"> | null;
    getControl(controlName: "msdyn_datereceived"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_note"): Xrm.StringControl;
    getControl(controlName: "msdyn_purchaseorder"): Xrm.LookupControl<"msdyn_purchaseorder">;
    getControl(controlName: "msdyn_receivedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
