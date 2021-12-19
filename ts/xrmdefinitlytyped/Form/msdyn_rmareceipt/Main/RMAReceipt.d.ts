declare namespace Form.msdyn_rmareceipt.Main {
  namespace RMAReceipt {
    namespace Tabs {
      interface c15e55f0be0b45f49350ee4a2f6578fa extends Xrm.SectionCollectionBase {
        get(name: "{07d47361-9e6e-4d81-87ea-cfc744f763d1}"): Xrm.PageSection;
        get(name: "{c15e55f0-be0b-45f4-9350-ee4a2f6578fa}_section_2"): Xrm.PageSection;
        get(name: "{c15e55f0-be0b-45f4-9350-ee4a2f6578fa}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_datereceived"): Xrm.DateAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_rma"): Xrm.LookupAttribute<"msdyn_rma">;
      get(name: "msdyn_shipvia"): Xrm.LookupAttribute<"msdyn_shipvia">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_rmareceipt_statecode>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_rmareceipt_statecode>;
      get(name: "msdyn_datereceived"): Xrm.DateControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_rma"): Xrm.LookupControl<"msdyn_rma">;
      get(name: "msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "productgrid"): Xrm.SubGridControl<"msdyn_rmareceiptproduct">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{c15e55f0-be0b-45f4-9350-ee4a2f6578fa}"): Xrm.PageTab<Tabs.c15e55f0be0b45f49350ee4a2f6578fa>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface RMAReceipt extends Xrm.PageBase<RMAReceipt.Attributes,RMAReceipt.Tabs,RMAReceipt.Controls> {
    getAttribute(attributeName: "msdyn_datereceived"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_rma"): Xrm.LookupAttribute<"msdyn_rma">;
    getAttribute(attributeName: "msdyn_shipvia"): Xrm.LookupAttribute<"msdyn_shipvia">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_rmareceipt_statecode>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_rmareceipt_statecode>;
    getControl(controlName: "msdyn_datereceived"): Xrm.DateControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_rma"): Xrm.LookupControl<"msdyn_rma">;
    getControl(controlName: "msdyn_shipvia"): Xrm.LookupControl<"msdyn_shipvia">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "productgrid"): Xrm.SubGridControl<"msdyn_rmareceiptproduct">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
