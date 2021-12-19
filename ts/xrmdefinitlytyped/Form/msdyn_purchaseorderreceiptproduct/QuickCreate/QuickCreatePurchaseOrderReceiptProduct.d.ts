declare namespace Form.msdyn_purchaseorderreceiptproduct.QuickCreate {
  namespace QuickCreatePurchaseOrderReceiptProduct {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_associatetobooking"): Xrm.LookupAttribute<"bookableresourcebooking">;
      get(name: "msdyn_associatetowarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
      get(name: "msdyn_associatetoworkorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "msdyn_purchaseorder"): Xrm.LookupAttribute<"msdyn_purchaseorder">;
      get(name: "msdyn_purchaseorderproduct"): Xrm.LookupAttribute<"msdyn_purchaseorderproduct">;
      get(name: "msdyn_purchaseorderreceipt"): Xrm.LookupAttribute<"msdyn_purchaseorderreceipt">;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_unitcost"): Xrm.NumberAttribute;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_associatetobooking"): Xrm.LookupControl<"bookableresourcebooking">;
      get(name: "msdyn_associatetowarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
      get(name: "msdyn_associatetoworkorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: "msdyn_purchaseorder"): Xrm.LookupControl<"msdyn_purchaseorder">;
      get(name: "msdyn_purchaseorderproduct"): Xrm.LookupControl<"msdyn_purchaseorderproduct">;
      get(name: "msdyn_purchaseorderreceipt"): Xrm.LookupControl<"msdyn_purchaseorderreceipt">;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_unitcost"): Xrm.NumberControl;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface QuickCreatePurchaseOrderReceiptProduct extends Xrm.PageBase<QuickCreatePurchaseOrderReceiptProduct.Attributes,QuickCreatePurchaseOrderReceiptProduct.Tabs,QuickCreatePurchaseOrderReceiptProduct.Controls> {
    getAttribute(attributeName: "msdyn_associatetobooking"): Xrm.LookupAttribute<"bookableresourcebooking">;
    getAttribute(attributeName: "msdyn_associatetowarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "msdyn_associatetoworkorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "msdyn_purchaseorder"): Xrm.LookupAttribute<"msdyn_purchaseorder">;
    getAttribute(attributeName: "msdyn_purchaseorderproduct"): Xrm.LookupAttribute<"msdyn_purchaseorderproduct">;
    getAttribute(attributeName: "msdyn_purchaseorderreceipt"): Xrm.LookupAttribute<"msdyn_purchaseorderreceipt">;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_unitcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_associatetobooking"): Xrm.LookupControl<"bookableresourcebooking">;
    getControl(controlName: "msdyn_associatetowarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "msdyn_associatetoworkorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "msdyn_purchaseorder"): Xrm.LookupControl<"msdyn_purchaseorder">;
    getControl(controlName: "msdyn_purchaseorderproduct"): Xrm.LookupControl<"msdyn_purchaseorderproduct">;
    getControl(controlName: "msdyn_purchaseorderreceipt"): Xrm.LookupControl<"msdyn_purchaseorderreceipt">;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_unitcost"): Xrm.NumberControl;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
