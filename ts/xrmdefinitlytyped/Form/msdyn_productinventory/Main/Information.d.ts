declare namespace Form.msdyn_productinventory.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_bin"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_product"): Xrm.LookupAttribute<"product">;
      get(name: "msdyn_qtyallocated"): Xrm.NumberAttribute;
      get(name: "msdyn_qtyavailable"): Xrm.NumberAttribute;
      get(name: "msdyn_qtyonhand"): Xrm.NumberAttribute;
      get(name: "msdyn_qtyonorder"): Xrm.NumberAttribute;
      get(name: "msdyn_reorderpoint"): Xrm.NumberAttribute;
      get(name: "msdyn_row"): Xrm.Attribute<string>;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_warehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_productinventory_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_productinventory_statecode>;
      get(name: "msdyn_bin"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_product"): Xrm.LookupControl<"product">;
      get(name: "msdyn_qtyallocated"): Xrm.NumberControl;
      get(name: "msdyn_qtyavailable"): Xrm.NumberControl;
      get(name: "msdyn_qtyonhand"): Xrm.NumberControl;
      get(name: "msdyn_qtyonorder"): Xrm.NumberControl;
      get(name: "msdyn_reorderpoint"): Xrm.NumberControl;
      get(name: "msdyn_row"): Xrm.StringControl;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_warehouse"): Xrm.LookupControl<"msdyn_warehouse">;
      get(name: "notescontrol"): Xrm.BaseControl;
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
    getAttribute(attributeName: "msdyn_bin"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_product"): Xrm.LookupAttribute<"product">;
    getAttribute(attributeName: "msdyn_qtyallocated"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_qtyavailable"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_qtyonhand"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_qtyonorder"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_reorderpoint"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_row"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_warehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_productinventory_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_productinventory_statecode>;
    getControl(controlName: "msdyn_bin"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_product"): Xrm.LookupControl<"product">;
    getControl(controlName: "msdyn_qtyallocated"): Xrm.NumberControl;
    getControl(controlName: "msdyn_qtyavailable"): Xrm.NumberControl;
    getControl(controlName: "msdyn_qtyonhand"): Xrm.NumberControl;
    getControl(controlName: "msdyn_qtyonorder"): Xrm.NumberControl;
    getControl(controlName: "msdyn_reorderpoint"): Xrm.NumberControl;
    getControl(controlName: "msdyn_row"): Xrm.StringControl;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_warehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
