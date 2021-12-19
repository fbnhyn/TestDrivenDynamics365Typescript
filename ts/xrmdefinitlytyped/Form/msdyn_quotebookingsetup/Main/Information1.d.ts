declare namespace Form.msdyn_quotebookingsetup.Main {
  namespace Information1 {
    namespace Tabs {
      interface MarginTab extends Xrm.SectionCollectionBase {
        get(name: "EstimatedMarginSection"): Xrm.PageSection;
        get(name: "EstimatedRevenue"): Xrm.PageSection;
        get(name: "{23ecc851-0e7d-4ce2-8482-97afd671fd2f}_section_4"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ProductsAndServicesTab extends Xrm.SectionCollectionBase {
        get(name: "productsSection"): Xrm.PageSection;
        get(name: "serviceSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface ServiceTaskTab extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _23ecc8510e7d4ce2848297afd671fd2f extends Xrm.SectionCollectionBase {
        get(name: "IncidentsSection"): Xrm.PageSection;
        get(name: "{985f1b59-b0db-43c9-804c-ef1d9c6c6a74}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_autogenerateworkorder"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_estimatedcost"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedmargin"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedmarginperwo"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedproductcost"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedproductrevenue"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedrevenue"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedrevenueperwo"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedservicecost"): Xrm.NumberAttribute;
      get(name: "msdyn_estimatedservicerevenue"): Xrm.NumberAttribute;
      get(name: "msdyn_latitude"): Xrm.NumberAttribute;
      get(name: "msdyn_longitude"): Xrm.NumberAttribute;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_quote"): Xrm.LookupAttribute<"quote">;
      get(name: "msdyn_quotedetailid"): Xrm.Attribute<string>;
      get(name: "msdyn_recurrencesettings"): Xrm.Attribute<string>;
      get(name: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
      get(name: "msdyn_workordertype"): Xrm.LookupAttribute<"msdyn_workordertype">;
      get(name: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
      get(name: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "IncidentsGrid"): Xrm.SubGridControl<"msdyn_quotebookingincident">;
      get(name: "ServiceTasksGrid"): Xrm.SubGridControl<"msdyn_quotebookingservicetask">;
      get(name: "ServicesGrid"): Xrm.SubGridControl<"msdyn_quotebookingservice">;
      get(name: "msdyn_autogenerateworkorder"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_estimatedcost"): Xrm.NumberControl;
      get(name: "msdyn_estimatedmargin"): Xrm.NumberControl;
      get(name: "msdyn_estimatedmarginperwo"): Xrm.NumberControl;
      get(name: "msdyn_estimatedproductcost"): Xrm.NumberControl;
      get(name: "msdyn_estimatedproductrevenue"): Xrm.NumberControl;
      get(name: "msdyn_estimatedrevenue"): Xrm.NumberControl;
      get(name: "msdyn_estimatedrevenueperwo"): Xrm.NumberControl;
      get(name: "msdyn_estimatedservicecost"): Xrm.NumberControl;
      get(name: "msdyn_estimatedservicerevenue"): Xrm.NumberControl;
      get(name: "msdyn_latitude"): Xrm.NumberControl;
      get(name: "msdyn_longitude"): Xrm.NumberControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_quote"): Xrm.LookupControl<"quote">;
      get(name: "msdyn_quotedetailid"): Xrm.StringControl;
      get(name: "msdyn_recurrencesettings"): Xrm.StringControl;
      get(name: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
      get(name: "msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype">;
      get(name: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
      get(name: "productsGrid"): Xrm.SubGridControl<"msdyn_quotebookingproduct">;
      get(name: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "MarginTab"): Xrm.PageTab<Tabs.MarginTab>;
      get(name: "ProductsAndServicesTab"): Xrm.PageTab<Tabs.ProductsAndServicesTab>;
      get(name: "ServiceTaskTab"): Xrm.PageTab<Tabs.ServiceTaskTab>;
      get(name: "{23ecc851-0e7d-4ce2-8482-97afd671fd2f}"): Xrm.PageTab<Tabs._23ecc8510e7d4ce2848297afd671fd2f>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information1 extends Xrm.PageBase<Information1.Attributes,Information1.Tabs,Information1.Controls> {
    getAttribute(attributeName: "msdyn_autogenerateworkorder"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_estimatedcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedmargin"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedmarginperwo"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedproductcost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedproductrevenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedrevenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedrevenueperwo"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedservicecost"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_estimatedservicerevenue"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_latitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_longitude"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_quote"): Xrm.LookupAttribute<"quote">;
    getAttribute(attributeName: "msdyn_quotedetailid"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_recurrencesettings"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_worklocation"): Xrm.OptionSetAttribute<msdyn_worklocation>;
    getAttribute(attributeName: "msdyn_workordertype"): Xrm.LookupAttribute<"msdyn_workordertype">;
    getAttribute(attributeName: "ownerid"): Xrm.LookupAttribute<"systemuser" | "team">;
    getAttribute(attributeName: "transactioncurrencyid"): Xrm.LookupAttribute<"transactioncurrency">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "IncidentsGrid"): Xrm.SubGridControl<"msdyn_quotebookingincident">;
    getControl(controlName: "ServiceTasksGrid"): Xrm.SubGridControl<"msdyn_quotebookingservicetask">;
    getControl(controlName: "ServicesGrid"): Xrm.SubGridControl<"msdyn_quotebookingservice">;
    getControl(controlName: "msdyn_autogenerateworkorder"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_estimatedcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedmargin"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedmarginperwo"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedproductcost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedproductrevenue"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedrevenue"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedrevenueperwo"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedservicecost"): Xrm.NumberControl;
    getControl(controlName: "msdyn_estimatedservicerevenue"): Xrm.NumberControl;
    getControl(controlName: "msdyn_latitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_longitude"): Xrm.NumberControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_quote"): Xrm.LookupControl<"quote">;
    getControl(controlName: "msdyn_quotedetailid"): Xrm.StringControl;
    getControl(controlName: "msdyn_recurrencesettings"): Xrm.StringControl;
    getControl(controlName: "msdyn_worklocation"): Xrm.OptionSetControl<msdyn_worklocation>;
    getControl(controlName: "msdyn_workordertype"): Xrm.LookupControl<"msdyn_workordertype">;
    getControl(controlName: "ownerid"): Xrm.LookupControl<"systemuser" | "team">;
    getControl(controlName: "productsGrid"): Xrm.SubGridControl<"msdyn_quotebookingproduct">;
    getControl(controlName: "transactioncurrencyid"): Xrm.LookupControl<"transactioncurrency">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
