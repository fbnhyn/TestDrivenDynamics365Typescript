declare namespace Form.msdyn_quoteinvoicingproduct.Main {
  namespace Information {
    namespace Tabs {
      interface General extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "exchangerate"): Xrm.NumberAttribute;
      get(name: "msdyn_amount"): Xrm.NumberAttribute;
      get(name: "msdyn_lineorder"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_product"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_quoteinvoicingsetup"): Xrm.LookupAttribute<"msdyn_quoteinvoicingsetup">;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_unitprice"): Xrm.NumberAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "exchangerate"): Xrm.NumberControl;
      get(name: "msdyn_amount"): Xrm.NumberControl;
      get(name: "msdyn_lineorder"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_product"): Xrm.LookupControl<"product">;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_quoteinvoicingsetup"): Xrm.LookupControl<"msdyn_quoteinvoicingsetup">;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_unitprice"): Xrm.NumberControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "General"): Xrm.PageTab<Tabs.General>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "exchangerate"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_lineorder"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_product"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_quoteinvoicingsetup"): Xrm.LookupAttribute<"msdyn_quoteinvoicingsetup">;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_unitprice"): Xrm.NumberAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "exchangerate"): Xrm.NumberControl;
    getControl(controlName: "msdyn_amount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_lineorder"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_product"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_quoteinvoicingsetup"): Xrm.LookupControl<"msdyn_quoteinvoicingsetup">;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_unitprice"): Xrm.NumberControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
