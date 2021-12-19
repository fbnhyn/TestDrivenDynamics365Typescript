declare namespace Form.msdyn_inventorytransfer.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_destinationwarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_sourcewarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
      get(name: "msdyn_transferredbyresource"): Xrm.LookupAttribute<"bookableresource">;
      get(name: "msdyn_transfertime"): Xrm.DateAttribute;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_inventorytransfer_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_inventorytransfer_statecode>;
      get(name: "inventorytransferGrid"): Xrm.SubGridControl<"msdyn_inventoryadjustmentproduct">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_destinationwarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_sourcewarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
      get(name: "msdyn_transferredbyresource"): Xrm.LookupControl<"bookableresource">;
      get(name: "msdyn_transfertime"): Xrm.DateControl;
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
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_destinationwarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_sourcewarehouse"): Xrm.LookupAttribute<"msdyn_warehouse">;
    getAttribute(attributeName: "msdyn_transferredbyresource"): Xrm.LookupAttribute<"bookableresource">;
    getAttribute(attributeName: "msdyn_transfertime"): Xrm.DateAttribute;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_inventorytransfer_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_inventorytransfer_statecode>;
    getControl(controlName: "inventorytransferGrid"): Xrm.SubGridControl<"msdyn_inventoryadjustmentproduct">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_destinationwarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_sourcewarehouse"): Xrm.LookupControl<"msdyn_warehouse">;
    getControl(controlName: "msdyn_transferredbyresource"): Xrm.LookupControl<"bookableresource">;
    getControl(controlName: "msdyn_transfertime"): Xrm.DateControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
