declare namespace Form.msdyn_purchaseorderproduct.Main {
  namespace PurchaseOrderProductMobile {
    namespace Tabs {
      interface fstab_general extends Xrm.SectionCollectionBase {
        get(name: "fstab_general_section_general"): Xrm.PageSection;
        get(name: "{5ae19875-5712-4cb9-b3b7-f7583e96ae65}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_other extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: "tab_4_section_2"): Xrm.PageSection;
        get(name: "tab_4_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface fstab_product_associates_to extends Xrm.SectionCollectionBase {
        get(name: "fstab_product_associates_to_section"): Xrm.PageSection;
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
      get(name: "msdyn_dateexpected"): Xrm.DateAttribute;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_itemstatus"): Xrm.OptionSetAttribute<msdyn_purchaseorderproductstatus>;
      get(name: "msdyn_lineorder"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_product"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_purchaseorder"): Xrm.LookupAttribute<"msdyn_purchaseorder">;
      get(name: "msdyn_qtybilled"): Xrm.NumberAttribute;
      get(name: "msdyn_qtyreceived"): Xrm.NumberAttribute;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_totalcost"): Xrm.NumberAttribute;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_unitcost"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
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
      get(name: "msdyn_dateexpected"): Xrm.DateControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_itemstatus"): Xrm.OptionSetControl<msdyn_purchaseorderproductstatus>;
      get(name: "msdyn_lineorder"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_product"): Xrm.LookupControl<"product">;
      get(name: "msdyn_purchaseorder"): Xrm.LookupControl<"msdyn_purchaseorder">;
      get(name: "msdyn_qtybilled"): Xrm.NumberControl;
      get(name: "msdyn_qtyreceived"): Xrm.NumberControl;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_totalcost"): Xrm.NumberControl;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_unitcost"): Xrm.NumberControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "fstab_general"): Xrm.PageTab<Tabs.fstab_general>;
      get(name: "fstab_other"): Xrm.PageTab<Tabs.fstab_other>;
      get(name: "fstab_product_associates_to"): Xrm.PageTab<Tabs.fstab_product_associates_to>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface PurchaseOrderProductMobile extends Xrm.PageBase<PurchaseOrderProductMobile.Attributes,PurchaseOrderProductMobile.Tabs,PurchaseOrderProductMobile.Controls> {
    getAttribute(attributeName: "msdyn_associatetobooking"): Xrm.LookupAttribute<"bookableresourcebooking">;
    getAttribute(attributeName: "msdyn_associatetowarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "msdyn_associatetoworkorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "msdyn_dateexpected"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_itemstatus"): Xrm.OptionSetAttribute<msdyn_purchaseorderproductstatus>;
    getAttribute(attributeName: "msdyn_lineorder"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_product"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_purchaseorder"): Xrm.LookupAttribute<"msdyn_purchaseorder">;
    getAttribute(attributeName: "msdyn_qtybilled"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_qtyreceived"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_totalcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_unitcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_associatetobooking"): Xrm.LookupControl<"bookableresourcebooking">;
    getControl(controlName: "msdyn_associatetowarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "msdyn_associatetoworkorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "msdyn_dateexpected"): Xrm.DateControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_itemstatus"): Xrm.OptionSetControl<msdyn_purchaseorderproductstatus>;
    getControl(controlName: "msdyn_lineorder"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_product"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_purchaseorder"): Xrm.LookupControl<"msdyn_purchaseorder">;
    getControl(controlName: "msdyn_qtybilled"): Xrm.NumberControl;
    getControl(controlName: "msdyn_qtyreceived"): Xrm.NumberControl;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_totalcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_unitcost"): Xrm.NumberControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
