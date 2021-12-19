declare namespace Form.msdyn_quotelinetransaction.QuickCreate {
  namespace ProjectQuickCreate {
    namespace Tabs {
      interface tab_1 extends Xrm.SectionCollectionBase {
        get(name: "tab_1_column_1_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_2_section_1"): Xrm.PageSection;
        get(name: "tab_1_column_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_amount"): Xrm.NumberAttribute;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_enddatetime"): Xrm.DateAttribute;
      get(name: "msdyn_price"): Xrm.NumberAttribute;
      get(name: "msdyn_quantity"): Xrm.NumberAttribute;
      get(name: "msdyn_quoteid"): Xrm.LookupAttribute<"quote">;
      get(name: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_resourceorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_startdatetime"): Xrm.DateAttribute;
      get(name: "msdyn_tax"): Xrm.NumberAttribute;
      get(name: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
      get(name: "msdyn_transactiontypecode"): Xrm.OptionSetAttribute<msdyn_transactiontypecode>;
      get(name: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
      get(name: "msdyn_unitschedule"): Xrm.LookupAttribute<"uomschedule">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_amount"): Xrm.NumberControl;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_enddatetime"): Xrm.DateControl;
      get(name: "msdyn_price"): Xrm.NumberControl;
      get(name: "msdyn_quantity"): Xrm.NumberControl;
      get(name: "msdyn_quoteid"): Xrm.LookupControl<"quote">;
      get(name: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_resourceorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_startdatetime"): Xrm.DateControl;
      get(name: "msdyn_tax"): Xrm.NumberControl;
      get(name: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
      get(name: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
      get(name: "msdyn_transactiontypecode"): Xrm.OptionSetControl<msdyn_transactiontypecode>;
      get(name: "msdyn_unit"): Xrm.LookupControl<"uom">;
      get(name: "msdyn_unitschedule"): Xrm.LookupControl<"uomschedule">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "tab_1"): Xrm.PageTab<Tabs.tab_1>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProjectQuickCreate extends Xrm.PageBase<ProjectQuickCreate.Attributes,ProjectQuickCreate.Tabs,ProjectQuickCreate.Controls> {
    getAttribute(attributeName: "msdyn_amount"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_enddatetime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_price"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_quantity"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_quoteid"): Xrm.LookupAttribute<"quote">;
    getAttribute(attributeName: "msdyn_resourcecategory"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_resourceorganizationalunitid"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_startdatetime"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_tax"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_transactioncategory"): Xrm.LookupAttribute<"msdyn_transactioncategory">;
    getAttribute(attributeName: "msdyn_transactionclassification"): Xrm.OptionSetAttribute<msdyn_transactionclassification>;
    getAttribute(attributeName: "msdyn_transactiontypecode"): Xrm.OptionSetAttribute<msdyn_transactiontypecode>;
    getAttribute(attributeName: "msdyn_unit"): Xrm.LookupAttribute<"uom">;
    getAttribute(attributeName: "msdyn_unitschedule"): Xrm.LookupAttribute<"uomschedule">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_amount"): Xrm.NumberControl;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_enddatetime"): Xrm.DateControl;
    getControl(controlName: "msdyn_price"): Xrm.NumberControl;
    getControl(controlName: "msdyn_quantity"): Xrm.NumberControl;
    getControl(controlName: "msdyn_quoteid"): Xrm.LookupControl<"quote">;
    getControl(controlName: "msdyn_resourcecategory"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_resourceorganizationalunitid"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_startdatetime"): Xrm.DateControl;
    getControl(controlName: "msdyn_tax"): Xrm.NumberControl;
    getControl(controlName: "msdyn_transactioncategory"): Xrm.LookupControl<"msdyn_transactioncategory">;
    getControl(controlName: "msdyn_transactionclassification"): Xrm.OptionSetControl<msdyn_transactionclassification>;
    getControl(controlName: "msdyn_transactiontypecode"): Xrm.OptionSetControl<msdyn_transactiontypecode>;
    getControl(controlName: "msdyn_unit"): Xrm.LookupControl<"uom">;
    getControl(controlName: "msdyn_unitschedule"): Xrm.LookupControl<"uomschedule">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
