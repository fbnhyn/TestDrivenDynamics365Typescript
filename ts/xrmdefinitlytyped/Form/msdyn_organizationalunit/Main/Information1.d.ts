declare namespace Form.msdyn_organizationalunit.Main {
  namespace Information1 {
    namespace Tabs {
      interface _3d87514637394b349bb2abc10665669d extends Xrm.SectionCollectionBase {
        get(name: "{7588a081-a7ee-4340-87a0-08057da1d0fe}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface b2aa5effa9b648c0b71e6e464591eba4 extends Xrm.SectionCollectionBase {
        get(name: "{d952ab6b-d6b2-462b-b63e-2555c38b9a95}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_currency"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_latitude"): Xrm.NumberAttribute;
      get(name: "msdyn_longitude"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "PriceList"): Xrm.SubGridControl<"pricelevel">;
      get(name: "msdyn_currency"): Xrm.LookupControl<"transactioncurrency">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_latitude"): Xrm.NumberControl;
      get(name: "msdyn_longitude"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{3d875146-3739-4b34-9bb2-abc10665669d}"): Xrm.PageTab<Tabs._3d87514637394b349bb2abc10665669d>;
      get(name: "{b2aa5eff-a9b6-48c0-b71e-6e464591eba4}"): Xrm.PageTab<Tabs.b2aa5effa9b648c0b71e6e464591eba4>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information1 extends Xrm.PageBase<Information1.Attributes,Information1.Tabs,Information1.Controls> {
    getAttribute(attributeName: "msdyn_currency"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "PriceList"): Xrm.SubGridControl<"pricelevel">;
    getControl(controlName: "msdyn_currency"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_latitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_longitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
