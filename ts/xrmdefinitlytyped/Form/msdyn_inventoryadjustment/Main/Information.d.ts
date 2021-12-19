declare namespace Form.msdyn_inventoryadjustment.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_adjustedbyresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_adjustmenttime"): Xrm.DateAttribute;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_requestedbyresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_warehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_inventoryadjustment_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_inventoryadjustment_statecode>;
      get(name: "inventoryadjustmentproductssubgrid"): Xrm.SubGridControl<"msdyn_inventoryadjustmentproduct">;
      get(name: "msdyn_adjustedbyresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_adjustmenttime"): Xrm.DateControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_requestedbyresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_warehouse"): Xrm.LookupControl<"msdyn_warehouse">;
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
    getAttribute(attributeName: "msdyn_adjustedbyresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_adjustmenttime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_requestedbyresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_warehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_inventoryadjustment_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_inventoryadjustment_statecode>;
    getControl(controlName: "inventoryadjustmentproductssubgrid"): Xrm.SubGridControl<"msdyn_inventoryadjustmentproduct">;
    getControl(controlName: "msdyn_adjustedbyresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_adjustmenttime"): Xrm.DateControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_requestedbyresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_warehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
