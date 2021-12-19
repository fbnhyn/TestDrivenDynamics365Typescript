declare namespace Form.msdyn_omnichannelconfiguration.Main {
  namespace RealTimeTranslationSettings {
    namespace Tabs {
      interface RealTimeTranslation extends Xrm.SectionCollectionBase {
        get(name: "RealTimeTranslation_section_2"): Xrm.PageSection;
        get(name: "tab_3_section_1"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_defaultagentinputlanguage"): Xrm.OptionSetAttribute<msdyn_agentinputlanguage>;
      get(name: "msdyn_enablerealtimetranslation"): Xrm.OptionSetAttribute<boolean>;
      get(name: "msdyn_translationwebresourceurl"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "WebResource_featureEnableTerms"): Xrm.WebResourceControl;
      get(name: "WebResource_ocpreviewterms"): Xrm.WebResourceControl;
      get(name: "msdyn_defaultagentinputlanguage"): Xrm.OptionSetControl<msdyn_agentinputlanguage>;
      get(name: "msdyn_enablerealtimetranslation"): Xrm.OptionSetControl<boolean>;
      get(name: "msdyn_translationwebresourceurl"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "Real Time Translation"): Xrm.PageTab<Tabs.RealTimeTranslation>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface RealTimeTranslationSettings extends Xrm.PageBase<RealTimeTranslationSettings.Attributes,RealTimeTranslationSettings.Tabs,RealTimeTranslationSettings.Controls> {
    getAttribute(attributeName: "msdyn_defaultagentinputlanguage"): Xrm.OptionSetAttribute<msdyn_agentinputlanguage>;
    getAttribute(attributeName: "msdyn_enablerealtimetranslation"): Xrm.OptionSetAttribute<boolean>;
    getAttribute(attributeName: "msdyn_translationwebresourceurl"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "WebResource_featureEnableTerms"): Xrm.WebResourceControl;
    getControl(controlName: "WebResource_ocpreviewterms"): Xrm.WebResourceControl;
    getControl(controlName: "msdyn_defaultagentinputlanguage"): Xrm.OptionSetControl<msdyn_agentinputlanguage>;
    getControl(controlName: "msdyn_enablerealtimetranslation"): Xrm.OptionSetControl<boolean>;
    getControl(controlName: "msdyn_translationwebresourceurl"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
