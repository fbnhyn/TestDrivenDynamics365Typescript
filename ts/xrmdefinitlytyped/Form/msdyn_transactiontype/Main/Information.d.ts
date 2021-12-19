declare namespace Form.msdyn_transactiontype.Main {
  namespace Information {
    namespace Tabs {
      interface fb738610ece54f2cbe4509ea8eb0cfe2 extends Xrm.SectionCollectionBase {
        get(name: "{fb738610-ece5-4f2c-be45-09ea8eb0cfe2}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_defaultunit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
      get(name: "msdyn_transactiontypecode"): Xrm.OptionSetAttribute<msdyn_transactiontypecode>;
      get(name: "msdyn_unitgroup"): Xrm.LookupAttribute<"uomschedule">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_defaultunit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
      get(name: "msdyn_transactiontypecode"): Xrm.OptionSetControl<msdyn_transactiontypecode>;
      get(name: "msdyn_unitgroup"): Xrm.LookupControl<"uomschedule">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{fb738610-ece5-4f2c-be45-09ea8eb0cfe2}"): Xrm.PageTab<Tabs.fb738610ece54f2cbe4509ea8eb0cfe2>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_defaultunit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
    getAttribute(attributeName: "msdyn_transactiontypecode"): Xrm.OptionSetAttribute<msdyn_transactiontypecode>;
    getAttribute(attributeName: "msdyn_unitgroup"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_defaultunit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
    getControl(controlName: "msdyn_transactiontypecode"): Xrm.OptionSetControl<msdyn_transactiontypecode>;
    getControl(controlName: "msdyn_unitgroup"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
