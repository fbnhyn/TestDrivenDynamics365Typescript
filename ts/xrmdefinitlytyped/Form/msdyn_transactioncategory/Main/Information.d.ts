declare namespace Form.msdyn_transactioncategory.Main {
  namespace Information {
    namespace Tabs {
      interface _4ee119bddc5a46579359c0361849634a extends Xrm.SectionCollectionBase {
        get(name: "{0db3dc26-6905-4f70-aea5-0465394a8256}"): Xrm.PageSection;
        get(name: "{4ee119bd-dc5a-4657-9359-c0361849634a}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
      get(name: "msdyn_defaultunit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_unitgroup"): Xrm.LookupAttribute<"uomschedule">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
      get(name: "msdyn_defaultunit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_unitgroup"): Xrm.LookupControl<"uomschedule">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{4ee119bd-dc5a-4657-9359-c0361849634a}"): Xrm.PageTab<Tabs._4ee119bddc5a46579359c0361849634a>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
    getAttribute(attributeName: "msdyn_defaultunit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_unitgroup"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
    getControl(controlName: "msdyn_defaultunit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_unitgroup"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
