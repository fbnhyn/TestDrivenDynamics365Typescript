declare namespace Form.msdyn_opportunitylinetransactionclassificatio.Main {
  namespace Information {
    namespace Tabs {
      interface ResourceCategoriesTab extends Xrm.SectionCollectionBase {
        get(name: "ResourceCategoriesSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface TransactionCategoriesTab extends Xrm.SectionCollectionBase {
        get(name: "TransactionCategoriesSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _0f5b7efe11d14fa3ae3a1a5c1126822d extends Xrm.SectionCollectionBase {
        get(name: "{0f5b7efe-11d1-4fa3-ae3a-1a5c1126822d}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_include"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "RolesGrid"): Xrm.SubGridControl<"msdyn_opportunitylineresourcecategory">;
      get(name: "TransactionCategoriesGrid"): Xrm.SubGridControl<"msdyn_opportunitylinetransactioncategory">;
      get(name: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_include"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ResourceCategoriesTab"): Xrm.PageTab<Tabs.ResourceCategoriesTab>;
      get(name: "TransactionCategoriesTab"): Xrm.PageTab<Tabs.TransactionCategoriesTab>;
      get(name: "{0f5b7efe-11d1-4fa3-ae3a-1a5c1126822d}"): Xrm.PageTab<Tabs._0f5b7efe11d14fa3ae3a1a5c1126822d>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_billingtype"): Xrm.OptionSetAttribute<msdyn_billingtype>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_include"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "RolesGrid"): Xrm.SubGridControl<"msdyn_opportunitylineresourcecategory">;
    getControl(controlName: "TransactionCategoriesGrid"): Xrm.SubGridControl<"msdyn_opportunitylinetransactioncategory">;
    getControl(controlName: "msdyn_billingtype"): Xrm.OptionSetControl<msdyn_billingtype>;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_include"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
