declare namespace Form.msdyn_rmareceiptproduct.Main {
  namespace Information {
    namespace Tabs {
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_rma"): Xrm.LookupAttribute<"msdyn_rma">;
      get(name: "msdyn_rmaproduct"): Xrm.LookupAttribute<"msdyn_rmaproduct">;
      get(name: "msdyn_rmareceipt"): Xrm.LookupAttribute<"msdyn_rmareceipt">;
      get(name: "msdyn_rtv"): Xrm.LookupAttribute<"msdyn_rtv">;
      get(name: "msdyn_rtvproduct"): Xrm.LookupAttribute<"msdyn_rtvproduct">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_rmareceiptproduct_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_rmareceiptproduct_statecode>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_rma"): Xrm.LookupControl<"msdyn_rma">;
      get(name: "msdyn_rmaproduct"): Xrm.LookupControl<"msdyn_rmaproduct">;
      get(name: "msdyn_rmareceipt"): Xrm.LookupControl<"msdyn_rmareceipt">;
      get(name: "msdyn_rtv"): Xrm.LookupControl<"msdyn_rtv">;
      get(name: "msdyn_rtvproduct"): Xrm.LookupControl<"msdyn_rtvproduct">;
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
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_rma"): Xrm.LookupAttribute<"msdyn_rma">;
    getAttribute(attributeName: "msdyn_rmaproduct"): Xrm.LookupAttribute<"msdyn_rmaproduct">;
    getAttribute(attributeName: "msdyn_rmareceipt"): Xrm.LookupAttribute<"msdyn_rmareceipt">;
    getAttribute(attributeName: "msdyn_rtv"): Xrm.LookupAttribute<"msdyn_rtv">;
    getAttribute(attributeName: "msdyn_rtvproduct"): Xrm.LookupAttribute<"msdyn_rtvproduct">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_rmareceiptproduct_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_rmareceiptproduct_statecode>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_rma"): Xrm.LookupControl<"msdyn_rma">;
    getControl(controlName: "msdyn_rmaproduct"): Xrm.LookupControl<"msdyn_rmaproduct">;
    getControl(controlName: "msdyn_rmareceipt"): Xrm.LookupControl<"msdyn_rmareceipt">;
    getControl(controlName: "msdyn_rtv"): Xrm.LookupControl<"msdyn_rtv">;
    getControl(controlName: "msdyn_rtvproduct"): Xrm.LookupControl<"msdyn_rtvproduct">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
