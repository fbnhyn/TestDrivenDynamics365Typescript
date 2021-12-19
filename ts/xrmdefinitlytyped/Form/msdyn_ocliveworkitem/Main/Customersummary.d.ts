declare namespace Form.msdyn_ocliveworkitem.Main {
  namespace Customersummary {
    namespace Tabs {
      interface Details extends Xrm.SectionCollectionBase {
        get(name: "Details_section_3"): Xrm.PageSection;
        get(name: "Details_section_3"): Xrm.PageSection;
        get(name: "Details_section_4"): Xrm.PageSection;
        get(name: "tab_2_section_1"): Xrm.PageSection;
        get(name: "tab_2_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface KBSearch extends Xrm.SectionCollectionBase {
        get(name: "tab_2_section_5"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface OCSearchRuntimeControl extends Xrm.SectionCollectionBase {
        get(name: "tab_3_section_5"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_conversationsummaryfield"): Xrm.Attribute<string>;
      get(name: "msdyn_customer"): Xrm.LookupAttribute<"account" | "contact">;
      get(name: "msdyn_issueid"): Xrm.LookupAttribute<"incident">;
      get(name: "msdyn_timelinecontrolfield"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "KBSearchcontrol"): Xrm.BaseControl;
      get(name: "OCSearchRuntimeControl"): Xrm.IFrameControl;
      get(name: "msdyn_conversationsummaryfield"): Xrm.StringControl;
      get(name: "msdyn_customer"): Xrm.LookupControl<"account" | "contact">;
      get(name: "msdyn_issueid"): Xrm.LookupControl<"incident">;
      get(name: "msdyn_timelinecontrolfield"): Xrm.StringControl;
      get(name: "notescontrol"): Xrm.BaseControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Details"): Xrm.PageTab<Tabs.Details>;
      get(name: "KBSearch"): Xrm.PageTab<Tabs.KBSearch>;
      get(name: "OCSearchRuntimeControl"): Xrm.PageTab<Tabs.OCSearchRuntimeControl>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Customersummary extends Xrm.PageBase<Customersummary.Attributes,Customersummary.Tabs,Customersummary.Controls> {
    getAttribute(attributeName: "msdyn_conversationsummaryfield"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_customer"): Xrm.LookupAttribute<"account" | "contact">;
    getAttribute(attributeName: "msdyn_issueid"): Xrm.LookupAttribute<"incident">;
    getAttribute(attributeName: "msdyn_timelinecontrolfield"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "KBSearchcontrol"): Xrm.BaseControl;
    getControl(controlName: "OCSearchRuntimeControl"): Xrm.IFrameControl;
    getControl(controlName: "msdyn_conversationsummaryfield"): Xrm.StringControl;
    getControl(controlName: "msdyn_customer"): Xrm.LookupControl<"account" | "contact">;
    getControl(controlName: "msdyn_issueid"): Xrm.LookupControl<"incident">;
    getControl(controlName: "msdyn_timelinecontrolfield"): Xrm.StringControl;
    getControl(controlName: "notescontrol"): Xrm.BaseControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
