declare namespace Form.msdyn_conversationaction.Main {
  namespace Information {
    namespace Tabs {
      interface ConversationActionLocale extends Xrm.SectionCollectionBase {
        get(name: "{87d6aef8-978d-4530-bfc7-eb7307c1bbd8}_section_2"): Xrm.PageSection;
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
      interface _87d6aef8978d4530bfc7eb7307c1bbd8 extends Xrm.SectionCollectionBase {
        get(name: string): undefined;
        get(): Xrm.PageSection[];
        get(index: number): Xrm.PageSection;
        get(chooser: (item: Xrm.PageSection, index: number) => boolean): Xrm.PageSection[];
      }
    }
    interface Attributes extends Xrm.AttributeCollectionBase {
      get(name: "msdyn_eventname"): Xrm.OptionSetAttribute<msdyn_conversationaction_msdyn_eventname>;
      get(name: "msdyn_eventparameter"): Xrm.Attribute<string>;
      get(name: "msdyn_functionname"): Xrm.Attribute<string>;
      get(name: "msdyn_icon"): Xrm.Attribute<string>;
      get(name: "msdyn_name"): Xrm.Attribute<string>;
      get(name: "msdyn_order"): Xrm.Attribute<string>;
      get(name: "msdyn_webresource"): Xrm.Attribute<string>;
      get(name: string): undefined;
      get(): Xrm.Attribute<any>[];
      get(index: number): Xrm.Attribute<any>;
      get(chooser: (item: Xrm.Attribute<any>, index: number) => boolean): Xrm.Attribute<any>[];
    }
    interface Controls extends Xrm.ControlCollectionBase {
      get(name: "Local_fields"): Xrm.SubGridControl<"msdyn_conversationactionlocale">;
      get(name: "msdyn_eventname"): Xrm.OptionSetControl<msdyn_conversationaction_msdyn_eventname>;
      get(name: "msdyn_eventparameter"): Xrm.StringControl;
      get(name: "msdyn_functionname"): Xrm.StringControl;
      get(name: "msdyn_icon"): Xrm.StringControl;
      get(name: "msdyn_name"): Xrm.StringControl;
      get(name: "msdyn_order"): Xrm.StringControl;
      get(name: "msdyn_webresource"): Xrm.StringControl;
      get(name: string): undefined;
      get(): Xrm.BaseControl[];
      get(index: number): Xrm.BaseControl;
      get(chooser: (item: Xrm.BaseControl, index: number) => boolean): Xrm.BaseControl[];
    }
    interface Tabs extends Xrm.TabCollectionBase {
      get(name: "ConversationActionLocale"): Xrm.PageTab<Tabs.ConversationActionLocale>;
      get(name: "{87d6aef8-978d-4530-bfc7-eb7307c1bbd8}"): Xrm.PageTab<Tabs._87d6aef8978d4530bfc7eb7307c1bbd8>;
      get(name: string): undefined;
      get(): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
      get(index: number): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>;
      get(chooser: (item: Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>, index: number) => boolean): Xrm.PageTab<Xrm.Collection<Xrm.PageSection>>[];
    }
  }
  interface Information extends Xrm.PageBase<Information.Attributes,Information.Tabs,Information.Controls> {
    getAttribute(attributeName: "msdyn_eventname"): Xrm.OptionSetAttribute<msdyn_conversationaction_msdyn_eventname>;
    getAttribute(attributeName: "msdyn_eventparameter"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_functionname"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_icon"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_name"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_order"): Xrm.Attribute<string>;
    getAttribute(attributeName: "msdyn_webresource"): Xrm.Attribute<string>;
    getAttribute(attributeName: string): undefined;
    getAttribute(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Attribute<any>>): Xrm.Attribute<any>[];
    getControl(controlName: "Local_fields"): Xrm.SubGridControl<"msdyn_conversationactionlocale">;
    getControl(controlName: "msdyn_eventname"): Xrm.OptionSetControl<msdyn_conversationaction_msdyn_eventname>;
    getControl(controlName: "msdyn_eventparameter"): Xrm.StringControl;
    getControl(controlName: "msdyn_functionname"): Xrm.StringControl;
    getControl(controlName: "msdyn_icon"): Xrm.StringControl;
    getControl(controlName: "msdyn_name"): Xrm.StringControl;
    getControl(controlName: "msdyn_order"): Xrm.StringControl;
    getControl(controlName: "msdyn_webresource"): Xrm.StringControl;
    getControl(controlName: string): undefined;
    getControl(delegateFunction: Xrm.Collection.MatchingDelegate<Xrm.Control<any>>): Xrm.Control<any>[];
  }
}
