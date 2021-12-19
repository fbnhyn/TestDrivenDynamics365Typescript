declare namespace Form.msdyn_inventoryjournal.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_allocatedtoworkorder"): Xrm.LookupAttribute<"msdyn_workorder">;
      get(name: "msdyn_inventoryadjustmentproduct"): Xrm.LookupAttribute<"msdyn_inventoryadjustmentproduct">;
      get(name: "msdyn_journaltype"): Xrm.OptionSetAttribute<msdyn_inventoryjournaltype>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_originatingjournal"): Xrm.LookupAttribute<"msdyn_inventoryjournal">;
      get(name: "msdyn_product"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_purchaseorderproduct"): Xrm.LookupAttribute<"msdyn_purchaseorderproduct">;
      get(name: "msdyn_purchaseorderreceiptproduct"): Xrm.LookupAttribute<"msdyn_purchaseorderreceiptproduct">;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_reversal"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_rmareceiptproduct"): Xrm.LookupAttribute<"msdyn_rmareceiptproduct">;
      get(name: "msdyn_transactiontype"): Xrm.OptionSetAttribute<msdyn_inventorytransactiontype>;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_warehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
      get(name: "msdyn_workorderproduct"): Xrm.LookupAttribute<"msdyn_workorderproduct">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_inventoryjournal_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_inventoryjournal_statecode>;
      get(name: "msdyn_allocatedtoworkorder"): Xrm.LookupControl<"msdyn_workorder">;
      get(name: "msdyn_inventoryadjustmentproduct"): Xrm.LookupControl<"msdyn_inventoryadjustmentproduct">;
      get(name: "msdyn_journaltype"): Xrm.OptionSetControl<msdyn_inventoryjournaltype>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_originatingjournal"): Xrm.LookupControl<"msdyn_inventoryjournal">;
      get(name: "msdyn_product"): Xrm.LookupControl<"product">;
      get(name: "msdyn_purchaseorderproduct"): Xrm.LookupControl<"msdyn_purchaseorderproduct">;
      get(name: "msdyn_purchaseorderreceiptproduct"): Xrm.LookupControl<"msdyn_purchaseorderreceiptproduct">;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_reversal"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_rmareceiptproduct"): Xrm.LookupControl<"msdyn_rmareceiptproduct">;
      get(name: "msdyn_transactiontype"): Xrm.OptionSetControl<msdyn_inventorytransactiontype>;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_warehouse"): Xrm.LookupControl<"msdyn_warehouse">;
      get(name: "msdyn_workorderproduct"): Xrm.LookupControl<"msdyn_workorderproduct">;
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
    getAttribute(attributeName: "msdyn_allocatedtoworkorder"): Xrm.LookupAttribute<"msdyn_workorder">;
    getAttribute(attributeName: "msdyn_inventoryadjustmentproduct"): Xrm.LookupAttribute<"msdyn_inventoryadjustmentproduct">;
    getAttribute(attributeName: "msdyn_journaltype"): Xrm.OptionSetAttribute<msdyn_inventoryjournaltype>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_originatingjournal"): Xrm.LookupAttribute<"msdyn_inventoryjournal">;
    getAttribute(attributeName: "msdyn_product"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_purchaseorderproduct"): Xrm.LookupAttribute<"msdyn_purchaseorderproduct">;
    getAttribute(attributeName: "msdyn_purchaseorderreceiptproduct"): Xrm.LookupAttribute<"msdyn_purchaseorderreceiptproduct">;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_reversal"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_rmareceiptproduct"): Xrm.LookupAttribute<"msdyn_rmareceiptproduct">;
    getAttribute(attributeName: "msdyn_transactiontype"): Xrm.OptionSetAttribute<msdyn_inventorytransactiontype>;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_warehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "msdyn_workorderproduct"): Xrm.LookupAttribute<"msdyn_workorderproduct">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_inventoryjournal_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_inventoryjournal_statecode>;
    getControl(controlName: "msdyn_allocatedtoworkorder"): Xrm.LookupControl<"msdyn_workorder">;
    getControl(controlName: "msdyn_inventoryadjustmentproduct"): Xrm.LookupControl<"msdyn_inventoryadjustmentproduct">;
    getControl(controlName: "msdyn_journaltype"): Xrm.OptionSetControl<msdyn_inventoryjournaltype>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_originatingjournal"): Xrm.LookupControl<"msdyn_inventoryjournal">;
    getControl(controlName: "msdyn_product"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_purchaseorderproduct"): Xrm.LookupControl<"msdyn_purchaseorderproduct">;
    getControl(controlName: "msdyn_purchaseorderreceiptproduct"): Xrm.LookupControl<"msdyn_purchaseorderreceiptproduct">;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_reversal"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_rmareceiptproduct"): Xrm.LookupControl<"msdyn_rmareceiptproduct">;
    getControl(controlName: "msdyn_transactiontype"): Xrm.OptionSetControl<msdyn_inventorytransactiontype>;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_warehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "msdyn_workorderproduct"): Xrm.LookupControl<"msdyn_workorderproduct">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
