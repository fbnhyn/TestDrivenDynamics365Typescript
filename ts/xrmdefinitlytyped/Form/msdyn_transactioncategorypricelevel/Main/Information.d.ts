declare namespace Form.msdyn_transactioncategorypricelevel.Main {
  namespace Information {
    namespace Tabs {
      interface _3141857404394aac9b66828c997660dc extends Xrm.SectionCollectionBase {
        get(name: "PricingSection"): Xrm.PageSection;
        get(name: "{31418574-0439-4aac-9b66-828c997660dc}_section_4"): Xrm.PageSection;
        get(name: "{44cb3d24-2528-4d5e-b5c1-87b87831eed6}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_percent"): Xrm.NumberAttribute;
      get(name: "msdyn_price"): Xrm.NumberAttribute;
      get(name: "msdyn_pricecalculation"): Xrm.OptionSetAttribute<msdyn_pricecalculation>;
      get(name: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
      get(name: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_unitschedule"): Xrm.LookupAttribute<"uomschedule">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_percent"): Xrm.NumberControl;
      get(name: "msdyn_price"): Xrm.NumberControl;
      get(name: "msdyn_pricecalculation"): Xrm.OptionSetControl<msdyn_pricecalculation>;
      get(name: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
      get(name: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_unitschedule"): Xrm.LookupControl<"uomschedule">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{31418574-0439-4aac-9b66-828c997660dc}"): Xrm.PageTab<Tabs._3141857404394aac9b66828c997660dc>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_percent"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_pricecalculation"): Xrm.OptionSetAttribute<msdyn_pricecalculation>;
    getAttribute(attributeName: "msdyn_pricelist"): Xrm.LookupAttribute<"pricelevel">;
    getAttribute(attributeName: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_unitschedule"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_percent"): Xrm.NumberControl;
    getControl(controlName: "msdyn_price"): Xrm.NumberControl;
    getControl(controlName: "msdyn_pricecalculation"): Xrm.OptionSetControl<msdyn_pricecalculation>;
    getControl(controlName: "msdyn_pricelist"): Xrm.LookupControl<"pricelevel">;
    getControl(controlName: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_unitschedule"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
