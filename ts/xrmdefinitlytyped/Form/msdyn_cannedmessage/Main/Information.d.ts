declare namespace Form.msdyn_cannedmessage.Main {
  namespace Information {
    namespace Tabs {
      interface _93219a9c5501404fbc31c01c9cda0f86 extends Xrm.SectionCollectionBase {
        get(name: "{93219a9c-5501-404f-bc31-c01c9cda0f86}_section_2"): Xrm.PageSection;
        get(name: "{ceb1071d-14dc-4dc3-a647-260e616d2fec}"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_locale_field"): Xrm.OptionSetAttribute<msdyn_cannedmessage_msdyn_locale_field>;
      get(name: "msdyn_message"): Xrm.Attribute<string>;
      get(name: "msdyn_tagscontrolfield"): Xrm.Attribute<string>;
      get(name: "msdyn_title"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "msdyn_locale_field"): Xrm.OptionSetControl<msdyn_cannedmessage_msdyn_locale_field>;
      get(name: "msdyn_message"): Xrm.StringControl;
      get(name: "msdyn_tagscontrolfield"): Xrm.StringControl;
      get(name: "msdyn_title"): Xrm.StringControl;
      get(name: "workstreams"): Xrm.SubGridControl<"msdyn_liveworkstream">;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "{93219a9c-5501-404f-bc31-c01c9cda0f86}"): Xrm.PageTab<Tabs._93219a9c5501404fbc31c01c9cda0f86>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_locale_field"): Xrm.OptionSetAttribute<msdyn_cannedmessage_msdyn_locale_field>;
    getAttribute(attributeName: "msdyn_message"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_tagscontrolfield"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_title"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "msdyn_locale_field"): Xrm.OptionSetControl<msdyn_cannedmessage_msdyn_locale_field>;
    getControl(controlName: "msdyn_message"): Xrm.StringControl;
    getControl(controlName: "msdyn_tagscontrolfield"): Xrm.StringControl;
    getControl(controlName: "msdyn_title"): Xrm.StringControl;
    getControl(controlName: "workstreams"): Xrm.SubGridControl<"msdyn_liveworkstream">;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
