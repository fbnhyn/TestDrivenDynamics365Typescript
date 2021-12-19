declare namespace Form.msdyn_orderlineresourcecategory.Main {
  namespace Information {
    namespace Tabs {
      interface _2d187ad503734d39b4e527ab42dfcf85 extends Xrm.SectionCollectionBase {
        get(name: "{2d187ad5-0373-4d39-b4e5-27ab42dfcf85}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{2d187ad5-0373-4d39-b4e5-27ab42dfcf85}"): Xrm.PageTab<Tabs._2d187ad503734d39b4e527ab42dfcf85>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
