declare namespace Form.msdyn_rmaproduct.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_changeownership"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_credittoaccount"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_itemstatus"): Xrm.OptionSetAttribute<msdyn_rmaproductstatus>;
      get(name: "msdyn_lineorder"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "msdyn_processingaction"): Xrm.OptionSetAttribute<msdyn_rmaprocessingaction>;
      get(name: "msdyn_product"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_qtyprocessed"): Xrm.NumberAttribute;
      get(name: "msdyn_qtyreceived"): Xrm.NumberAttribute;
      get(name: "msdyn_quantitytoreturn"): Xrm.NumberAttribute;
      get(name: "msdyn_returntovendor"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_returntowarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
      get(name: "msdyn_rma"): Xrm.LookupAttribute<"msdyn_rma">;
      get(name: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_totalamount"): Xrm.NumberAttribute;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_unitamount"): Xrm.NumberAttribute;
      get(name: "msdyn_woproduct"): Xrm.LookupAttribute<"msdyn_workorderproduct">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_rmaproduct_statecode>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_rmaproduct_statecode>;
      get(name: "msdyn_changeownership"): Xrm.LookupControl<"account">;
      get(name: "msdyn_credittoaccount"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_itemstatus"): Xrm.OptionSetControl<msdyn_rmaproductstatus>;
      get(name: "msdyn_lineorder"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
      get(name: "msdyn_processingaction"): Xrm.OptionSetControl<msdyn_rmaprocessingaction>;
      get(name: "msdyn_product"): Xrm.LookupControl<"product">;
      get(name: "msdyn_qtyprocessed"): Xrm.NumberControl;
      get(name: "msdyn_qtyreceived"): Xrm.NumberControl;
      get(name: "msdyn_quantitytoreturn"): Xrm.NumberControl;
      get(name: "msdyn_returntovendor"): Xrm.LookupControl<"account">;
      get(name: "msdyn_returntowarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
      get(name: "msdyn_rma"): Xrm.LookupControl<"msdyn_rma">;
      get(name: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_totalamount"): Xrm.NumberControl;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_unitamount"): Xrm.NumberControl;
      get(name: "msdyn_woproduct"): Xrm.LookupControl<"msdyn_workorderproduct">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
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
    getAttribute(attributeName: "msdyn_changeownership"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_credittoaccount"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_customerasset"): Xrm.LookupAttribute<"msdyn_customerasset">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_itemstatus"): Xrm.OptionSetAttribute<msdyn_rmaproductstatus>;
    getAttribute(attributeName: "msdyn_lineorder"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "msdyn_processingaction"): Xrm.OptionSetAttribute<msdyn_rmaprocessingaction>;
    getAttribute(attributeName: "msdyn_product"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_qtyprocessed"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_qtyreceived"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_quantitytoreturn"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_returntovendor"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_returntowarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "msdyn_rma"): Xrm.LookupAttribute<"msdyn_rma">;
    getAttribute(attributeName: "msdyn_taxable"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_unitamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_woproduct"): Xrm.LookupAttribute<"msdyn_workorderproduct">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_rmaproduct_statecode>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_rmaproduct_statecode>;
    getControl(controlName: "msdyn_changeownership"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_credittoaccount"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_customerasset"): Xrm.LookupControl<"msdyn_customerasset">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_itemstatus"): Xrm.OptionSetControl<msdyn_rmaproductstatus>;
    getControl(controlName: "msdyn_lineorder"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "msdyn_processingaction"): Xrm.OptionSetControl<msdyn_rmaprocessingaction>;
    getControl(controlName: "msdyn_product"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_qtyprocessed"): Xrm.NumberControl;
    getControl(controlName: "msdyn_qtyreceived"): Xrm.NumberControl;
    getControl(controlName: "msdyn_quantitytoreturn"): Xrm.NumberControl;
    getControl(controlName: "msdyn_returntovendor"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_returntowarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "msdyn_rma"): Xrm.LookupControl<"msdyn_rma">;
    getControl(controlName: "msdyn_taxable"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_totalamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_unitamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_woproduct"): Xrm.LookupControl<"msdyn_workorderproduct">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
