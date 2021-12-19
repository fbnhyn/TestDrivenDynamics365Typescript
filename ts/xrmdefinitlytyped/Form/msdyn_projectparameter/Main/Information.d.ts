declare namespace Form.msdyn_projectparameter.Main {
  namespace Information {
    namespace Tabs {
      interface AmountBasedPricingDimensionTab extends Xrm.SectionCollectionBase {
        get(name: "AmountBasedPricingDimensionSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface MarkupBasedPricingDimensionTab extends Xrm.SectionCollectionBase {
        get(name: "MarkupBasedPricingDimensionSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface PriceListTab extends Xrm.SectionCollectionBase {
        get(name: "PriceListSection"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _4c87da2daa4a4eae972eeac9dbc05c4f extends Xrm.SectionCollectionBase {
        get(name: "{2495cb91-9d0e-4216-806c-d7287b3b2d42}"): Xrm.PageSection;
        get(name: "{4c87da2d-aa4a-4eae-972e-eac9dbc05c4f}_section_2"): Xrm.PageSection;
        get(name: "{4c87da2d-aa4a-4eae-972e-eac9dbc05c4f}_section_3"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "createdon"): Xrm.DateAttribute;
      get(name: "msdyn_backgroundapprovalthreshold"): Xrm.NumberAttribute;
      get(name: "msdyn_defaultorganizationalunit"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
      get(name: "msdyn_defaultworktemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
      get(name: "msdyn_description"): Xrm.Attribute<string>;
      get(name: "msdyn_invoicefrequency"): Xrm.LookupAttribute<"msdyn_invoicefrequency">;
      get(name: "msdyn_pricelistdefaultingiscurrencyagnostic"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_projectmanagerrole"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: "msdyn_resourceallocationmode"): Xrm.OptionSetAttribute<msdyn_projectparameter_msdyn_resourceallocationmode>;
      get(name: "msdyn_teammemberrole"): Xrm.LookupAttribute<"bookableresourcecategory">;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "AmountBasedPricingDimensionGrid"): Xrm.SubGridControl<"msdyn_dimension">;
      get(name: "MarkupBasedPricingDimensionGrid"): Xrm.SubGridControl<"msdyn_dimension">;
      get(name: "PriceListGrid"): Xrm.SubGridControl<"msdyn_projectparameterpricelist">;
      get(name: "createdon"): Xrm.DateControl;
      get(name: "msdyn_backgroundapprovalthreshold"): Xrm.NumberControl;
      get(name: "msdyn_defaultorganizationalunit"): Xrm.LookupControl<"msdyn_organizationalunit">;
      get(name: "msdyn_defaultworktemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
      get(name: "msdyn_description"): Xrm.StringControl;
      get(name: "msdyn_invoicefrequency"): Xrm.LookupControl<"msdyn_invoicefrequency">;
      get(name: "msdyn_pricelistdefaultingiscurrencyagnostic"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_projectmanagerrole"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: "msdyn_resourceallocationmode"): Xrm.OptionSetControl<msdyn_projectparameter_msdyn_resourceallocationmode>;
      get(name: "msdyn_teammemberrole"): Xrm.LookupControl<"bookableresourcecategory">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "AmountBasedPricingDimensionTab"): Xrm.PageTab<Tabs.AmountBasedPricingDimensionTab>;
      get(name: "MarkupBasedPricingDimensionTab"): Xrm.PageTab<Tabs.MarkupBasedPricingDimensionTab>;
      get(name: "PriceListTab"): Xrm.PageTab<Tabs.PriceListTab>;
      get(name: "{4c87da2d-aa4a-4eae-972e-eac9dbc05c4f}"): Xrm.PageTab<Tabs._4c87da2daa4a4eae972eeac9dbc05c4f>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "createdon"): Xrm.DateAttribute;
    getAttribute(attributeName: "msdyn_backgroundapprovalthreshold"): Xrm.NumberAttribute;
    getAttribute(attributeName: "msdyn_defaultorganizationalunit"): Xrm.LookupAttribute<"msdyn_organizationalunit">;
    getAttribute(attributeName: "msdyn_defaultworktemplate"): Xrm.LookupAttribute<"msdyn_workhourtemplate">;
    getAttribute(attributeName: "msdyn_description"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_invoicefrequency"): Xrm.LookupAttribute<"msdyn_invoicefrequency">;
    getAttribute(attributeName: "msdyn_pricelistdefaultingiscurrencyagnostic"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_projectmanagerrole"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: "msdyn_resourceallocationmode"): Xrm.OptionSetAttribute<msdyn_projectparameter_msdyn_resourceallocationmode>;
    getAttribute(attributeName: "msdyn_teammemberrole"): Xrm.LookupAttribute<"bookableresourcecategory">;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "AmountBasedPricingDimensionGrid"): Xrm.SubGridControl<"msdyn_dimension">;
    getControl(controlName: "MarkupBasedPricingDimensionGrid"): Xrm.SubGridControl<"msdyn_dimension">;
    getControl(controlName: "PriceListGrid"): Xrm.SubGridControl<"msdyn_projectparameterpricelist">;
    getControl(controlName: "createdon"): Xrm.DateControl;
    getControl(controlName: "msdyn_backgroundapprovalthreshold"): Xrm.NumberControl;
    getControl(controlName: "msdyn_defaultorganizationalunit"): Xrm.LookupControl<"msdyn_organizationalunit">;
    getControl(controlName: "msdyn_defaultworktemplate"): Xrm.LookupControl<"msdyn_workhourtemplate">;
    getControl(controlName: "msdyn_description"): Xrm.StringControl;
    getControl(controlName: "msdyn_invoicefrequency"): Xrm.LookupControl<"msdyn_invoicefrequency">;
    getControl(controlName: "msdyn_pricelistdefaultingiscurrencyagnostic"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_projectmanagerrole"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: "msdyn_resourceallocationmode"): Xrm.OptionSetControl<msdyn_projectparameter_msdyn_resourceallocationmode>;
    getControl(controlName: "msdyn_teammemberrole"): Xrm.LookupControl<"bookableresourcecategory">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
