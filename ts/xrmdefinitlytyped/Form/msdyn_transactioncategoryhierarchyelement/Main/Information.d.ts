declare namespace Form.msdyn_transactioncategoryhierarchyelement.Main {
  namespace Information {
    namespace Tabs {
      interface _2f7899c789814aa1823ff08673e0cddb extends Xrm.SectionCollectionBase {
        get(name: "{2f7899c7-8981-4aa1-823f-f08673e0cddb}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_childcategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_parentcategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_childcategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_parentcategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{2f7899c7-8981-4aa1-823f-f08673e0cddb}"): Xrm.PageTab<Tabs._2f7899c789814aa1823ff08673e0cddb>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_childcategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_parentcategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_childcategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_parentcategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
