declare namespace Form.msdyn_purchaseorder.Main {
  namespace PurchaseOrderMobile {
    namespace Tabs {
      interface Address extends Xrm.SectionCollectionBase {
        get(name: "fstab_address_section_address"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_details extends Xrm.SectionCollectionBase {
        get(name: "fstab_details_column_5_section_1"): Xrm.PageSection;
        get(name: "fstab_details_column_6_section_1"): Xrm.PageSection;
        get(name: "fstab_details_section_amount"): Xrm.PageSection;
        get(name: "fstab_details_section_general"): Xrm.PageSection;
        get(name: "fstab_details_section_user_information"): Xrm.PageSection;
        get(name: "fstab_details_section_work_order"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_general extends Xrm.SectionCollectionBase {
        get(name: "fstab_general_column_2_section_1"): Xrm.PageSection;
        get(name: "fstab_general_section_3"): Xrm.PageSection;
        get(name: "fstab_general_section_summary"): Xrm.PageSection;
        get(name: "fstab_general_section_vendor"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_other extends Xrm.SectionCollectionBase {
        get(name: "tab_5_section_2"): Xrm.PageSection;
        get(name: "tab_5_section_3"): Xrm.PageSection;
        get(name: "tab_5_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_sub_grids extends Xrm.SectionCollectionBase {
        get(name: "fstab_sub_grids_section_2"): Xrm.PageSection;
        get(name: "fstab_sub_grids_section_3"): Xrm.PageSection;
        get(name: "tab_7_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_address1"): Xrm.Attribute<string>;
      get(name: "msdyn_address2"): Xrm.Attribute<string>;
      get(name: "msdyn_address3"): Xrm.Attribute<string>;
      get(name: "msdyn_amountbilled"): Xrm.NumberAttribute;
      get(name: "msdyn_approvalstatus"): Xrm.Attribute<any>;
      get(name: "msdyn_approvedrejectedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_booking"): Xrm.LookupAttribute<"bookableresourcebooking">;
      get(name: "msdyn_city"): Xrm.Attribute<string>;
      get(name: "msdyn_country"): Xrm.Attribute<string>;
      get(name: "msdyn_dateexpected"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_orderedby"): Xrm.LookupAttribute<"systemuser">;
      get(name: "msdyn_paymentterm"): Xrm.LookupAttribute<"msdyn_paymentterm">;
      get(name: "msdyn_postalcode"): Xrm.Attribute<string>;
      get(name: "msdyn_purchaseorderdate"): Xrm.DateAttribute;
      get(name: "msdyn_receivetowarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
      get(name: "msdyn_requestedbyresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_shipto"): Xrm.OptionSetAttribute<msdyn_poshiptotype>;
      get(name: "msdyn_shipvia"): Xrm.LookupAttribute<"msdyn_shipvia">;
      get(name: "msdyn_stateorprovince"): Xrm.Attribute<string>;
      get(name: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_purchaseordersubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_posystemstatus>;
      get(name: "msdyn_totalamount"): Xrm.NumberAttribute;
      get(name: "msdyn_vendor"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_vendornote"): Xrm.Attribute<string>;
      get(name: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "BILLS"): Xrm.SubGridControl<"msdyn_purchaseorderbill">;
      get(name: "PurchaseOrderProductsGrid"): Xrm.SubGridControl<"msdyn_purchaseorderproduct">;
      get(name: "RECEIPTS"): Xrm.SubGridControl<"msdyn_purchaseorderreceipt">;
      get(name: "RECEIPT_PRODUCTS"): Xrm.SubGridControl<"msdyn_purchaseorderreceiptproduct">;
      get(name: "header_process_msdyn_approvalstatus"): Xrm.OptionSetControl<msdyn_poapprovalstatus> | null;
      get(name: "header_process_msdyn_approvedrejectedby"): Xrm.LookupControl<"systemuser"> | null;
      get(name: "header_process_msdyn_purchaseorderdate"): Xrm.DateControl | null;
      get(name: "header_process_msdyn_receivetowarehouse"): Xrm.LookupControl<"msdyn_warehouse"> | null;
      get(name: "header_process_msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_posystemstatus> | null;
      get(name: "header_process_msdyn_systemstatus_1"): Xrm.OptionSetControl<msdyn_posystemstatus> | null;
      get(name: "header_process_msdyn_vendor"): Xrm.LookupControl<"account"> | null;
      get(name: "header_process_msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder"> | null;
      get(name: "msdyn_address1"): Xrm.StringControl;
      get(name: "msdyn_address2"): Xrm.StringControl;
      get(name: "msdyn_address3"): Xrm.StringControl;
      get(name: "msdyn_amountbilled"): Xrm.NumberControl;
      get(name: "msdyn_approvalstatus"): Xrm.Control<Xrm.Attribute<any>>;
      get(name: "msdyn_approvedrejectedby"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_booking"): Xrm.LookupControl<"bookableresourcebooking">;
      get(name: "msdyn_city"): Xrm.StringControl;
      get(name: "msdyn_country"): Xrm.StringControl;
      get(name: "msdyn_dateexpected"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_orderedby"): Xrm.LookupControl<"systemuser">;
      get(name: "msdyn_paymentterm"): Xrm.LookupControl<"msdyn_paymentterm">;
      get(name: "msdyn_postalcode"): Xrm.StringControl;
      get(name: "msdyn_purchaseorderdate"): Xrm.DateControl;
      get(name: "msdyn_receivetowarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
      get(name: "msdyn_requestedbyresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_shipto"): Xrm.OptionSetControl<msdyn_poshiptotype>;
      get(name: "msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia">;
      get(name: "msdyn_stateorprovince"): Xrm.StringControl;
      get(name: "msdyn_substatus"): Xrm.LookupControl<"msdyn_purchaseordersubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_posystemstatus>;
      get(name: "msdyn_totalamount"): Xrm.NumberControl;
      get(name: "msdyn_vendor"): Xrm.LookupControl<"account">;
      get(name: "msdyn_vendornote"): Xrm.StringControl;
      get(name: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Address"): Xrm.PageTab<Tabs.Address>;
      get(name: "fstab_details"): Xrm.PageTab<Tabs.fstab_details>;
      get(name: "fstab_general"): Xrm.PageTab<Tabs.fstab_general>;
      get(name: "fstab_other"): Xrm.PageTab<Tabs.fstab_other>;
      get(name: "fstab_sub_grids"): Xrm.PageTab<Tabs.fstab_sub_grids>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface PurchaseOrderMobile extends Xrm.PageBase<PurchaseOrderMobile.Attributes,PurchaseOrderMobile.Tabs,PurchaseOrderMobile.Controls> {
    getAttribute(attributeName: "msdyn_address1"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_address2"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_address3"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_amountbilled"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_approvalstatus"): Xrm.Attribute<any>;
    getAttribute(attributeName: "msdyn_approvedrejectedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_booking"): Xrm.LookupAttribute<"bookableresourcebooking">;
    getAttribute(attributeName: "msdyn_city"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_country"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_dateexpected"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_orderedby"): Xrm.LookupAttribute<"systemuser">;
    getAttribute(attributeName: "msdyn_paymentterm"): Xrm.LookupAttribute<"msdyn_paymentterm">;
    getAttribute(attributeName: "msdyn_postalcode"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_purchaseorderdate"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_receivetowarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "msdyn_requestedbyresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_shipto"): Xrm.OptionSetAttribute<msdyn_poshiptotype>;
    getAttribute(attributeName: "msdyn_shipvia"): Xrm.LookupAttribute<"msdyn_shipvia">;
    getAttribute(attributeName: "msdyn_stateorprovince"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_purchaseordersubstatus">;
    getAttribute(attributeName: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_posystemstatus>;
    getAttribute(attributeName: "msdyn_totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_vendor"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_vendornote"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_workorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "BILLS"): Xrm.SubGridControl<"msdyn_purchaseorderbill">;
    getControl(controlName: "PurchaseOrderProductsGrid"): Xrm.SubGridControl<"msdyn_purchaseorderproduct">;
    getControl(controlName: "RECEIPTS"): Xrm.SubGridControl<"msdyn_purchaseorderreceipt">;
    getControl(controlName: "RECEIPT_PRODUCTS"): Xrm.SubGridControl<"msdyn_purchaseorderreceiptproduct">;
    getControl(controlName: "header_process_msdyn_approvalstatus"): Xrm.OptionSetControl<msdyn_poapprovalstatus> | null;
    getControl(controlName: "header_process_msdyn_approvedrejectedby"): Xrm.LookupControl<"systemuser"> | null;
    getControl(controlName: "header_process_msdyn_purchaseorderdate"): Xrm.DateControl | null;
    getControl(controlName: "header_process_msdyn_receivetowarehouse"): Xrm.LookupControl<"msdyn_warehouse"> | null;
    getControl(controlName: "header_process_msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_posystemstatus> | null;
    getControl(controlName: "header_process_msdyn_systemstatus_1"): Xrm.OptionSetControl<msdyn_posystemstatus> | null;
    getControl(controlName: "header_process_msdyn_vendor"): Xrm.LookupControl<"account"> | null;
    getControl(controlName: "header_process_msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder"> | null;
    getControl(controlName: "msdyn_address1"): Xrm.StringControl;
    getControl(controlName: "msdyn_address2"): Xrm.StringControl;
    getControl(controlName: "msdyn_address3"): Xrm.StringControl;
    getControl(controlName: "msdyn_amountbilled"): Xrm.NumberControl;
    getControl(controlName: "msdyn_approvalstatus"): Xrm.Control<Xrm.Attribute<any>>;
    getControl(controlName: "msdyn_approvedrejectedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_booking"): Xrm.LookupControl<"bookableresourcebooking">;
    getControl(controlName: "msdyn_city"): Xrm.StringControl;
    getControl(controlName: "msdyn_country"): Xrm.StringControl;
    getControl(controlName: "msdyn_dateexpected"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_orderedby"): Xrm.LookupControl<"systemuser">;
    getControl(controlName: "msdyn_paymentterm"): Xrm.LookupControl<"msdyn_paymentterm">;
    getControl(controlName: "msdyn_postalcode"): Xrm.StringControl;
    getControl(controlName: "msdyn_purchaseorderdate"): Xrm.DateControl;
    getControl(controlName: "msdyn_receivetowarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "msdyn_requestedbyresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_shipto"): Xrm.OptionSetControl<msdyn_poshiptotype>;
    getControl(controlName: "msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia">;
    getControl(controlName: "msdyn_stateorprovince"): Xrm.StringControl;
    getControl(controlName: "msdyn_substatus"): Xrm.LookupControl<"msdyn_purchaseordersubstatus">;
    getControl(controlName: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_posystemstatus>;
    getControl(controlName: "msdyn_totalamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_vendor"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_vendornote"): Xrm.StringControl;
    getControl(controlName: "msdyn_workorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
