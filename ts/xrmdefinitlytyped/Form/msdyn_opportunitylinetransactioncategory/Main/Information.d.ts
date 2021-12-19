declare namespace Form.msdyn_opportunitylinetransactioncategory.Main {
  namespace Information {
    namespace Tabs {
      interface _478bcc40409e4e61b1ebd2dcb2a7144d extends Xrm.SectionCollectionBase {
        get(name: "{478bcc40-409e-4e61-b1eb-d2dcb2a7144d}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{478bcc40-409e-4e61-b1eb-d2dcb2a7144d}"): Xrm.PageTab<Tabs._478bcc40409e4e61b1ebd2dcb2a7144d>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
