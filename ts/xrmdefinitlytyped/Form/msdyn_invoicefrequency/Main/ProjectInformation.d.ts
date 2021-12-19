declare namespace Form.msdyn_invoicefrequency.Main {
  namespace ProjectInformation {
    namespace Tabs {
      interface InvoiceFrequencyDetails_Day extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface InvoiceFrequencyDetails_Weekday extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface InvoiceFrequencyDetails_Weekly extends Xrm.SectionCollectionBase {
        get(name: "tab_4_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _7d8df25f4ce44ff8b4648d31b36593df extends Xrm.SectionCollectionBase {
        get(name: "DetailsSection"): Xrm.PageSection;
        get(name: "{7d8df25f-4ce4-4ff8-b464-8d31b36593df}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_daysofrun"): Xrm.OptionSetAttribute<msdyn_daysofrun>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_period"): Xrm.OptionSetAttribute<msdyn_frequency>;
      get(name: "msdyn_runspermonth"): Xrm.OptionSetAttribute<msdyn_invoicefrequency_msdyn_runspermonth>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "InvoiceFrequencyDetails"): Xrm.SubGridControl<"msdyn_invoicefrequencydetail">;
      get(name: "InvoiceFrequencyDetails_1_Grid"): Xrm.SubGridControl<"msdyn_invoicefrequencydetail">;
      get(name: "InvoiceFrequencyDetails_2_Grid"): Xrm.SubGridControl<"msdyn_invoicefrequencydetail">;
      get(name: "msdyn_daysofrun"): Xrm.OptionSetControl<msdyn_daysofrun>;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_period"): Xrm.OptionSetControl<msdyn_frequency>;
      get(name: "msdyn_runspermonth"): Xrm.OptionSetControl<msdyn_invoicefrequency_msdyn_runspermonth>;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "InvoiceFrequencyDetails_Day"): Xrm.PageTab<Tabs.InvoiceFrequencyDetails_Day>;
      get(name: "InvoiceFrequencyDetails_Weekday"): Xrm.PageTab<Tabs.InvoiceFrequencyDetails_Weekday>;
      get(name: "InvoiceFrequencyDetails_Weekly"): Xrm.PageTab<Tabs.InvoiceFrequencyDetails_Weekly>;
      get(name: "{7d8df25f-4ce4-4ff8-b464-8d31b36593df}"): Xrm.PageTab<Tabs._7d8df25f4ce44ff8b4648d31b36593df>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface ProjectInformation extends Xrm.PageBase<ProjectInformation.Attributes,ProjectInformation.Tabs,ProjectInformation.Controls> {
    getAttribute(attributeName: "msdyn_daysofrun"): Xrm.OptionSetAttribute<msdyn_daysofrun>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_period"): Xrm.OptionSetAttribute<msdyn_frequency>;
    getAttribute(attributeName: "msdyn_runspermonth"): Xrm.OptionSetAttribute<msdyn_invoicefrequency_msdyn_runspermonth>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "InvoiceFrequencyDetails"): Xrm.SubGridControl<"msdyn_invoicefrequencydetail">;
    getControl(controlName: "InvoiceFrequencyDetails_1_Grid"): Xrm.SubGridControl<"msdyn_invoicefrequencydetail">;
    getControl(controlName: "InvoiceFrequencyDetails_2_Grid"): Xrm.SubGridControl<"msdyn_invoicefrequencydetail">;
    getControl(controlName: "msdyn_daysofrun"): Xrm.OptionSetControl<msdyn_daysofrun>;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_period"): Xrm.OptionSetControl<msdyn_frequency>;
    getControl(controlName: "msdyn_runspermonth"): Xrm.OptionSetControl<msdyn_invoicefrequency_msdyn_runspermonth>;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
