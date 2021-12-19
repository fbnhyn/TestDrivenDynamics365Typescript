declare namespace Form.msdyn_rtv.Main {
  namespace RTV {
    namespace Tabs {
      interface _8b74a7e75edb4a599b5277fbd784e116 extends Xrm.SectionCollectionBase {
        get(name: "{7e0518da-7ef7-44ee-922d-7bb9472eb9ef}"): Xrm.PageSection;
        get(name: "{8b74a7e7-5edb-4a59-9b52-77fbd784e116}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface rtvproductstab extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_originatingrma"): Xrm.LookupAttribute<"msdyn_rma">;
      get(name: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_rtvsubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_rtvsystemstatus>;
      get(name: "msdyn_totalamount"): Xrm.NumberAttribute;
      get(name: "msdyn_vendor"): Xrm.LookupAttribute<"account">;
      get(name: "msdyn_vendorcontact"): Xrm.LookupAttribute<"contact">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "statecode"): Xrm.OptionSetAttribute<msdyn_rtv_statecode>;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "footer_statecode"): Xrm.OptionSetControl<msdyn_rtv_statecode>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_originatingrma"): Xrm.LookupControl<"msdyn_rma">;
      get(name: "msdyn_substatus"): Xrm.LookupControl<"msdyn_rtvsubstatus">;
      get(name: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_rtvsystemstatus>;
      get(name: "msdyn_totalamount"): Xrm.NumberControl;
      get(name: "msdyn_vendor"): Xrm.LookupControl<"account">;
      get(name: "msdyn_vendorcontact"): Xrm.LookupControl<"contact">;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "rtvproductsgrid"): Xrm.SubGridControl<"msdyn_rtvproduct">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{8b74a7e7-5edb-4a59-9b52-77fbd784e116}"): Xrm.PageTab<Tabs._8b74a7e75edb4a599b5277fbd784e116>;
      get(name: "rtvproductstab"): Xrm.PageTab<Tabs.rtvproductstab>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface RTV extends Xrm.PageBase<RTV.Attributes,RTV.Tabs,RTV.Controls> {
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_originatingrma"): Xrm.LookupAttribute<"msdyn_rma">;
    getAttribute(attributeName: "msdyn_substatus"): Xrm.LookupAttribute<"msdyn_rtvsubstatus">;
    getAttribute(attributeName: "msdyn_systemstatus"): Xrm.OptionSetAttribute<msdyn_rtvsystemstatus>;
    getAttribute(attributeName: "msdyn_totalamount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_vendor"): Xrm.LookupAttribute<"account">;
    getAttribute(attributeName: "msdyn_vendorcontact"): Xrm.LookupAttribute<"contact">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "statecode"): Xrm.OptionSetAttribute<msdyn_rtv_statecode>;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "footer_statecode"): Xrm.OptionSetControl<msdyn_rtv_statecode>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_originatingrma"): Xrm.LookupControl<"msdyn_rma">;
    getControl(controlName: "msdyn_substatus"): Xrm.LookupControl<"msdyn_rtvsubstatus">;
    getControl(controlName: "msdyn_systemstatus"): Xrm.OptionSetControl<msdyn_rtvsystemstatus>;
    getControl(controlName: "msdyn_totalamount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_vendor"): Xrm.LookupControl<"account">;
    getControl(controlName: "msdyn_vendorcontact"): Xrm.LookupControl<"contact">;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "rtvproductsgrid"): Xrm.SubGridControl<"msdyn_rtvproduct">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
